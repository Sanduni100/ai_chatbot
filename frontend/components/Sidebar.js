import { FiPlus, FiTrash2, FiMessageSquare } from 'react-icons/fi';

export default function Sidebar({ conversations, activeId, onSelect, onCreate, onDelete }) {
  return (
    <aside
      className="hidden w-72 shrink-0 flex-col border-r px-4 py-5 md:flex"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <button
        onClick={onCreate}
        className="mb-4 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white"
        style={{ background: 'var(--bubble-user)' }}
      >
        <FiPlus /> New chat
      </button>

      <div className="flex-1 space-y-1 overflow-y-auto">
        {conversations.length === 0 && (
          <p className="mt-6 text-center text-xs" style={{ color: 'var(--text-secondary)' }}>
            No chats yet — start one above.
          </p>
        )}
        {conversations.map((c) => (
          <div
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="group flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm"
            style={{
              background: c.id === activeId ? 'var(--surface-alt)' : 'transparent',
              color: 'var(--text-primary)',
            }}
          >
            <span className="flex items-center gap-2 truncate">
              <FiMessageSquare size={14} style={{ color: 'var(--text-secondary)' }} />
              <span className="truncate">{c.title}</span>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(c.id);
              }}
              className="opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Delete chat"
            >
              <FiTrash2 size={14} style={{ color: 'var(--text-secondary)' }} />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
