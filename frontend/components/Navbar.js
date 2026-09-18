import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between border-b px-6 py-4 backdrop-blur md:px-10"
      style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
    >
      <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl2 text-white"
          style={{ background: 'linear-gradient(135deg, var(--bubble-user), #7A0C2E)' }}
        >
          AI
        </span>
        Nova Chat
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-medium md:flex" style={{ color: 'var(--text-secondary)' }}>
        <Link href="/#features">Features</Link>
        <Link href="/#how-it-works">How it works</Link>
        {user && <Link href="/chat">Chat</Link>}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        {user ? (
          <button
            onClick={logout}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--bubble-user)' }}
          >
            Sign out
          </button>
        ) : (
          <>
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold sm:inline-block"
              style={{ color: 'var(--text-primary)' }}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--bubble-user)' }}
            >
              Get started
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
