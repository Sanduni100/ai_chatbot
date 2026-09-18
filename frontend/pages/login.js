import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      toast.error('Please enter both your email and password.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', form);
      setAuthToken(data.token);
      login(data.token, data.user);
      toast.success(data.message || 'Signed in successfully.');
      router.push('/chat');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)' }} className="min-h-screen">
      <Head>
        <title>Sign in — Nova Chat</title>
      </Head>
      <Navbar />

      <div className="flex items-center justify-center px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-xl2 border p-8 shadow-soft"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
        >
          <h1 className="font-display text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Sign in to pick up where you left off.
          </p>

          <label className="mt-6 block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:ring-2"
            style={{ borderColor: 'var(--border)' }}
          />

          <label className="mt-4 block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="mt-2 w-full rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:ring-2"
            style={{ borderColor: 'var(--border)' }}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
            style={{ background: 'var(--bubble-user)' }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>

          <p className="mt-5 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold" style={{ color: 'var(--bubble-user)' }}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
