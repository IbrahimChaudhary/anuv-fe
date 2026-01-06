"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/useAuthStore';
import Footer from '../footer/Footer';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.data);
        router.push('/admin/dashboard');
      } else {
        setError(data.error || data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="login-container">
        <div className="login-form-container">
          <div className="login-form-wrapper theme-whitish-bg">
            <h2>Login</h2>
            {error && <p style={{ color: 'red', marginBottom: '10px', fontFamily: 'IBM Plex Mono' }}>{error}</p>}
            <form style={{ position: 'relative', zIndex: 2 }} onSubmit={handleSubmit}>
              <div className="login-field">
                <label htmlFor="email">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="YOUR@EMAIL.COM" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="login-field" style={{ marginBottom: '35px' }}>
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              
              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            
            {/* Decorative elements to match the theme */}
            <div className="stamp-sticker" style={{ position: 'absolute', top: '20px', right: '20px', width: '80px', transform: 'rotate(15deg)', zIndex: 1, opacity: 0.8 }}>
              <img src="/images/stam.svg" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
