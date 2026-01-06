"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/useAuthStore';

import '../style.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [hydrated, setHydrated] = React.useState(false);

  // Wait for hydration to avoid redirecting prematurely on refresh
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (hydrated && !isAuthenticated) {
      router.push('/login');
    }
  }, [hydrated, isAuthenticated, router]);

  if (!hydrated) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f5f5f5', fontFamily: 'IBM Plex Mono' }}>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div>
          <h1>Admin Panel</h1>
          <p>Welcome back, {user?.name}</p>
        </div>
        <nav className="admin-nav">
          <button 
            onClick={() => { logout(); router.push('/login'); }} 
            className="admin-logout-btn"
          >
            Logout
          </button>
        </nav>
      </header>
      
      <main>
        {children}
      </main>
    </div>
  );
}
