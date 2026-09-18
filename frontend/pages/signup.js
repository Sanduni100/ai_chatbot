import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }
    if (form.password !== form.confirm) {
      toast.error('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.post('/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      setAuthToken(data.token);
      login(data.token, data.user);
      toast.success(data.message || 'Account created successfully.');
      router.push('/chat');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not create your account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)' }} className="min-h-screen">
      <Head>
        <title>Create account — Nova Chat</title>
      </Head>
      <Navbar />

      <div className="flex items-center justify-center px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-xl2 border p-8 shadow-soft"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
        >
          <h1 className="font-display text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
            It only takes a moment to get started.
          </p>

          <label className="mt-6 block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jordan Lee"
            className="mt-2 w-full rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:ring-2"
            style={{ borderColor: 'var(--border)' }}
          />

          <label className="mt-4 block text-sm font-medium">Email</label>
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
            placeholder="At least 6 characters"
            className="mt-2 w-full rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:ring-2"
            style={{ borderColor: 'var(--border)' }}
          />

          <label className="mt-4 block text-sm font-medium">Confirm password</label>
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className="mt-2 w-full rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:ring-2"
            style={{ borderColor: 'var(--border)' }}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
            style={{ background: 'var(--bubble-user)' }}
          >
            {loading ? 'Creating account…' : 'Create account'}
          </button>

          <p className="mt-5 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
            Already have an account?{' '}
            <Link href="/login" className="font-semibold" style={{ color: 'var(--bubble-user)' }}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
