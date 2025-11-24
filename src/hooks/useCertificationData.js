import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';

export const useCertificationData = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const fetchUserProgress = useCallback(async (userId, level) => {
    try {
      setLoading(true);
      
      // 1. Get Certification Record
      let { data: cert, error: certError } = await supabase
        .from('certifications')
        .select('*')
        .eq('user_id', userId)
        .eq('level', level)
        .single();

      if (certError && certError.code !== 'PGRST116') {
        throw certError;
      }

      // If no certification record exists, create one
      if (!cert) {
        const { data: newCert, error: createError } = await supabase
          .from('certifications')
          .insert([{ user_id: userId, level, status: 'not_started', progress_percentage: 0 }])
          .select()
          .single();
        
        if (createError) throw createError;
        cert = newCert;
      }

      // 2. Get All Modules for this level
      const { data: allModules, error: modulesError } = await supabase
        .from('modules')
        .select('*')
        .eq('certification_level', level)
        .order('order', { ascending: true });

      if (modulesError) throw modulesError;

      // 3. Get User Completed Modules
      const { data: userModules, error: userModulesError } = await supabase
        .from('user_modules')
        .select('module_id, completed')
        .eq('user_id', userId);

      if (userModulesError) throw userModulesError;

      // Merge data
      const mergedModules = allModules.map(m => ({
        ...m,
        completed: userModules.some(um => um.module_id === m.id && um.completed)
      }));

      return {
        progress: cert.progress_percentage,
        modules: mergedModules,
        status: cert.status,
        isCertified: cert.status === 'completed'
      };

    } catch (error) {
      console.error('Error fetching progress:', error);
      toast({
        variant: "destructive",
        title: "Error loading progress",
        description: error.message
      });
      return null;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const updateModuleProgress = useCallback(async (userId, level, moduleId, isCompleted) => {
    try {
      // 1. Upsert user_module record
      const { error: moduleError } = await supabase
        .from('user_modules')
        .upsert({ 
          user_id: userId, 
          module_id: moduleId, 
          completed: isCompleted,
          completed_at: isCompleted ? new Date().toISOString() : null
        }, { onConflict: 'user_id, module_id' });

      if (moduleError) throw moduleError;

      // 2. Recalculate progress
      const { data: allModules } = await supabase
        .from('modules')
        .select('id')
        .eq('certification_level', level);
        
      const { data: completedModules } = await supabase
        .from('user_modules')
        .select('module_id')
        .eq('user_id', userId)
        .eq('completed', true)
        .in('module_id', allModules.map(m => m.id));

      const progress = Math.round((completedModules.length / allModules.length) * 100);
      const status = progress === 100 ? 'completed' : 'in_progress';

      // 3. Update certification record
      const { error: certError } = await supabase
        .from('certifications')
        .update({ 
          progress_percentage: progress,
          status: status,
          completed_at: status === 'completed' ? new Date().toISOString() : null
        })
        .eq('user_id', userId)
        .eq('level', level);

      if (certError) throw certError;

      return { progress, status };

    } catch (error) {
      console.error('Error updating module:', error);
      toast({
        variant: "destructive",
        title: "Error saving progress",
        description: error.message
      });
      throw error;
    }
  }, [toast]);

  return {
    loading,
    fetchUserProgress,
    updateModuleProgress
  };
};