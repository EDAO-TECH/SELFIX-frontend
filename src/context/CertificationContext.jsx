import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useCertificationData } from '@/hooks/useCertificationData';

const CertificationContext = createContext();

export const useCertification = () => useContext(CertificationContext);

export const CertificationProvider = ({ children }) => {
  const { user } = useAuth();
  const { fetchUserProgress, updateModuleProgress } = useCertificationData();
  
  const [certificationState, setCertificationState] = useState({
    level1: { progress: 0, modules: [], isCertified: false },
    level2: { progress: 0, modules: [], isCertified: false },
    level3: { progress: 0, modules: [], isCertified: false }
  });

  // Initial load
  useEffect(() => {
    if (user) {
      loadLevelData('level1');
      loadLevelData('level2');
      loadLevelData('level3');
    }
  }, [user]);

  const loadLevelData = async (level) => {
    if (!user) return;
    const data = await fetchUserProgress(user.id, level);
    if (data) {
      setCertificationState(prev => ({
        ...prev,
        [level]: data
      }));
    }
  };

  const handleUpdateModule = async (level, moduleId) => {
    if (!user) return;
    
    const currentLevel = certificationState[level];
    const module = currentLevel.modules.find(m => m.id === moduleId);
    const newStatus = !module.completed;

    // Optimistic update
    setCertificationState(prev => ({
      ...prev,
      [level]: {
        ...prev[level],
        modules: prev[level].modules.map(m => 
          m.id === moduleId ? { ...m, completed: newStatus } : m
        )
      }
    }));

    try {
      const result = await updateModuleProgress(user.id, level, moduleId, newStatus);
      
      // Update with server calculation
      setCertificationState(prev => ({
        ...prev,
        [level]: {
          ...prev[level],
          progress: result.progress,
          isCertified: result.status === 'completed'
        }
      }));
    } catch (error) {
      // Revert on error
      loadLevelData(level);
    }
  };

  return (
    <CertificationContext.Provider value={{ certificationState, updateModuleStatus: handleUpdateModule }}>
      {children}
    </CertificationContext.Provider>
  );
};