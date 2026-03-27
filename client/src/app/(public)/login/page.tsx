'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService';

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async () => {
    if (!username || !password) return;

    setLoading(true);
    setError('');

    try {
      await authService.login(username, password);

      router.push('/admin/dashboard');
    } catch (e) {
      setError('Sai tài khoản hoặc mật khẩu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-vc-primary flex items-center justify-center px-6">
      <div className="bg-white rounded-vc p-8 w-full max-w-sm">
        
        <h1 className="text-2xl font-bold mb-6 text-center">
          Đăng nhập Admin
        </h1>

        {error && (
          <div className="text-danger mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          placeholder="Tài khoản"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-vc rounded-vc px-4 py-2 mb-4"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-vc rounded-vc px-4 py-2 mb-6"
          onKeyDown={(e) => e.key === 'Enter' && login()}
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-vc-accent text-white py-3 rounded-vc"
        >
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </div>
    </div>
  );
}