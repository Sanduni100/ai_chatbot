import { useEffect, useRef, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages, onSend, sending, conversationTitle }) {
  const [draft, setDraft] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    onSend(draft.trim());
    setDraft('');
  };

  return (
    <section className="flex flex-1 flex-col" style={{ background: 'var(--bg)' }}>
      <div className="border-b px-6 py-4" style={{ borderColor: 'var(--border)' }}>
        <h2 className="font-display text-base font-semibold">{conversationTitle || 'Select a chat'}</h2>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-6 py-6">
        {messages.length === 0 && (
          <p className="mt-10 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
            You can ask me anything you want…
          </p>
        )}
        {messages.map((m) => (
          <MessageBubble key={m.id} sender={m.sender} content={m.content} />
        ))}
        {sending && (
          <div className="flex justify-start">
            <div
              className="rounded-2xl rounded-tl-sm border px-4 py-2.5 text-sm"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', background: 'var(--bubble-bot)' }}
            >
              Typing…
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 border-t px-6 py-4"
        style={{ borderColor: 'var(--border)' }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="You can ask me anything you want…"
          className="flex-1 rounded-full border bg-transparent px-4 py-2.5 text-sm outline-none focus:ring-2"
          style={{ borderColor: 'var(--border)' }}
        />
        <button
          type="submit"
          disabled={sending}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white disabled:opacity-60"
          style={{ background: 'var(--bubble-user)' }}
          aria-label="Send message"
        >
          <FiSend size={16} />
        </button>
      </form>
    </section>
  );
}
