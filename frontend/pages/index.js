import Head from 'next/head';
import Link from 'next/link';
import { FiArrowRight, FiMic, FiMessageCircle, FiShield, FiZap } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const features = [
  {
    icon: FiZap,
    title: 'Instant answers',
    body: 'Responses stream back in real time, so conversations feel natural instead of transactional.',
  },
  {
    icon: FiMessageCircle,
    title: 'Threaded conversations',
    body: 'Every chat is saved to your account, so you can pick a thread back up whenever you return.',
  },
  {
    icon: FiShield,
    title: 'Private by default',
    body: 'Messages are tied to your account behind a signed-in session — nobody else can see your chats.',
  },
];

export default function Home() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)' }} className="min-h-screen">
      <Head>
        <title>Nova Chat — Your AI Assistant</title>
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'var(--bubble-user)', opacity: 0.18 }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <p
              className="mb-5 inline-flex rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ background: 'var(--surface-alt)', color: 'var(--text-secondary)' }}
            >
              Now answering in under a second
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              A chat assistant that actually keeps up with you
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Ask questions, get help drafting something, or just think out loud. Nova
              remembers the thread and replies like a colleague who's already caught up.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--bubble-user)' }}
              >
                Start chatting free <FiArrowRight />
              </Link>
              <Link
                href="/login"
                className="rounded-full border px-6 py-3 text-sm font-semibold"
                style={{ borderColor: 'var(--border)' }}
              >
                I already have an account
              </Link>
            </div>

            <div
              className="mt-10 flex max-w-sm items-center gap-3 rounded-full border px-4 py-3"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: 'var(--bubble-user)' }}
              >
                <FiMic size={14} />
              </span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                "Draft a follow-up email to my client about the delay"
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="rounded-xl2 border p-5 shadow-soft"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{ background: 'linear-gradient(135deg, var(--bubble-user), #7A0C2E)' }}
                >
                  AI
                </span>
                <div>
                  <p className="text-sm font-semibold">Nova</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Active now</p>
                </div>
              </div>

              <div className="space-y-3">
                <div
                  className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-white"
                  style={{ background: 'var(--bubble-user)' }}
                >
                  Can you summarize this quarter's numbers?
                </div>
                <div
                  className="max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2 text-sm"
                  style={{ background: 'var(--surface-alt)', color: 'var(--text-primary)' }}
                >
                  Revenue is up 12% quarter over quarter, driven mostly by renewals. Want the
                  full breakdown?
                </div>
                <div
                  className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-white"
                  style={{ background: 'var(--bubble-user)' }}
                >
                  Yes, please.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Built to feel like a real conversation</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl2 border p-6"
                style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
              >
                <span
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl2 text-white"
                  style={{ background: 'var(--bubble-user)' }}
                >
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-16 md:px-10">
        <div
          className="mx-auto max-w-6xl rounded-xl2 border p-10 text-center"
          style={{ borderColor: 'var(--border)', background: 'var(--surface-alt)' }}
        >
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Create an account, start typing</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm" style={{ color: 'var(--text-secondary)' }}>
            No setup, no configuration. Sign up, open a chat, and Nova is ready.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-soft"
            style={{ background: 'var(--bubble-user)' }}
          >
            Create your free account <FiArrowRight />
          </Link>
        </div>
      </section>

      <footer className="border-t px-6 py-8 text-center text-sm md:px-10" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        © {new Date().getFullYear()} Nova Chat. Built for demonstration purposes.
      </footer>
    </div>
  );
}
