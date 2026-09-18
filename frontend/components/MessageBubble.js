export default function MessageBubble({ sender, content }) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[75%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser ? 'rounded-tr-sm' : 'rounded-tl-sm'
        }`}
        style={{
          background: isUser ? 'var(--bubble-user)' : 'var(--bubble-bot)',
          color: isUser ? 'var(--bubble-user-text)' : 'var(--bubble-bot-text)',
          border: isUser ? 'none' : '1px solid var(--border)',
        }}
      >
        {content}
      </div>
    </div>
  );
}
