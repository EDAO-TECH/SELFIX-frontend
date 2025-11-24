import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming Input exists or standard input
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/lib/supabaseClient';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch users and their certifications
      // Note: In a real app, this would be a joined query or view
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*');

      if (usersError) throw usersError;

      const { data: certsData, error: certsError } = await supabase
        .from('certifications')
        .select('*');

      if (certsError) throw certsError;

      // Combine data
      const combinedData = usersData.map(user => {
        const userCerts = certsData.filter(c => c.user_id === user.id);
        return {
          ...user,
          level1: userCerts.find(c => c.level === 'level1')?.progress_percentage || 0,
          level2: userCerts.find(c => c.level === 'level2')?.progress_percentage || 0,
          level3: userCerts.find(c => c.level === 'level3')?.progress_percentage || 0,
        };
      });

      setUsers(combinedData);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user => 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.full_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCSV = () => {
    const headers = ['ID', 'Email', 'Full Name', 'Level 1 %', 'Level 2 %', 'Level 3 %'];
    const csvContent = [
      headers.join(','),
      ...filteredUsers.map(u => [
        u.id, 
        u.email, 
        u.full_name || '', 
        u.level1, 
        u.level2, 
        u.level3
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'certification_report.csv';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Admin Dashboard | Selfix Academy</title>
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Monitor certification progress and user performance.</p>
          </div>
          <Button onClick={exportCSV} className="bg-green-600 hover:bg-green-700 text-white gap-2">
            <Download size={16} /> Export Report
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Progress Overview</CardTitle>
            <CardDescription>Real-time tracking of all registered users.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search users by email or name..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Level 1</TableHead>
                    <TableHead>Level 2</TableHead>
                    <TableHead>Level 3</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">Loading data...</TableCell>
                    </TableRow>
                  ) : filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">No users found.</TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium">{user.full_name || 'Unknown'}</span>
                            <span className="text-xs text-slate-500">{user.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{user.organisation || '-'}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-slate-100 rounded-full h-2 max-w-[60px]">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${user.level1}%` }}></div>
                            </div>
                            <span className="text-xs">{user.level1}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-slate-100 rounded-full h-2 max-w-[60px]">
                              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${user.level2}%` }}></div>
                            </div>
                            <span className="text-xs">{user.level2}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-slate-100 rounded-full h-2 max-w-[60px]">
                              <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${user.level3}%` }}></div>
                            </div>
                            <span className="text-xs">{user.level3}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.level1 === 100 ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'
                          }`}>
                            {user.level1 === 100 ? 'Certified' : 'Active'}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;