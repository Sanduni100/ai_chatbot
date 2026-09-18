import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';

export default function Chat() {
  const { user, token, ready } = useAuth();
  const router = useRouter();

  const [conversations, setConversations] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ready) return;
    if (!token) {
      router.replace('/login');
      return;
    }
    setAuthToken(token);
    loadConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, token]);

  const loadConversations = async () => {
    try {
      const { data } = await api.get('/chat/conversations');
      setConversations(data.conversations);
      if (data.conversations.length > 0) {
        selectConversation(data.conversations[0].id);
      } else {
        setLoading(false);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not load your chats.');
      setLoading(false);
    }
  };

  const selectConversation = useCallback(async (id) => {
    setActiveId(id);
    setLoading(true);
    try {
      const { data } = await api.get(`/chat/conversations/${id}/messages`);
      setMessages(data.messages);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not load this chat.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreate = async () => {
    try {
      const { data } = await api.post('/chat/conversations', { title: 'New chat' });
      setConversations((prev) => [data, ...prev]);
      setActiveId(data.id);
      setMessages([]);
      toast.success('New chat started.');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not start a new chat.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/chat/conversations/${id}`);
      setConversations((prev) => prev.filter((c) => c.id !== id));
      if (activeId === id) {
        setActiveId(null);
        setMessages([]);
      }
      toast.success('Chat deleted.');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not delete this chat.');
    }
  };

  const handleSend = async (content) => {
    if (!activeId) {
      toast.error('Start a new chat first.');
      return;
    }
    const optimisticUserMsg = { id: `temp-${Date.now()}`, sender: 'user', content };
    setMessages((prev) => [...prev, optimisticUserMsg]);
    setSending(true);
    try {
      const { data } = await api.post(`/chat/conversations/${activeId}/messages`, { content });
      setMessages((prev) => [...prev, data.reply]);
    } catch (err) {
      toast.error(err.response?.data?.message || 'The assistant could not respond.');
    } finally {
      setSending(false);
    }
  };

  const activeTitle = conversations.find((c) => c.id === activeId)?.title;

  if (!ready || !user) return null;

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)' }} className="flex h-screen flex-col">
      <Head>
        <title>Chat — Nova Chat</title>
      </Head>
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          conversations={conversations}
          activeId={activeId}
          onSelect={selectConversation}
          onCreate={handleCreate}
          onDelete={handleDelete}
        />
        {loading ? (
          <div className="flex flex-1 items-center justify-center text-sm" style={{ color: 'var(--text-secondary)' }}>
            Loading…
          </div>
        ) : (
          <ChatWindow
            messages={messages}
            onSend={handleSend}
            sending={sending}
            conversationTitle={activeTitle}
          />
        )}
      </div>
    </div>
  );
}
