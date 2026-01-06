"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '../../../types';
import { useAuthStore } from '../../../store/useAuthStore';

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        
        if (data.success) {
          setUsers(data.data || []);
        } else {
          setError(data.error || 'Failed to fetch users');
          logout();
          router.push('/login');
        }
      } catch (err) {
        setError('Connection to server failed');
        logout();
        router.push('/login');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [router, logout]);

  return (
    <div className="dashboard-content skeleton-fade-in">
      <div className="admin-header-box">
        <h2>User Archive</h2>
        <p>Consult the full registry of accounts and access levels.</p>
      </div>
      
      {loading ? (
        <div className="admin-loading-state">
          <p>Updating Ledger...</p>
        </div>
      ) : error ? (
        <div className="admin-error-state">
          <p className="admin-error-text">{error}</p>
        </div>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email Address</th>
                <th>Join Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="admin-table-row">
                  <td className="admin-id-col">#{user.id}</td>
                  <td className="admin-email-col">{user.email}</td>
                  <td className="admin-date-col">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
            <div className="admin-empty-state">
              <p>Archive Empty.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
