const pool = require('../config/db');
const { getAiReply } = require('../utils/aiResponse');

// List all conversations for the signed-in user
exports.listConversations = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, title, created_at FROM conversations WHERE user_id = ? ORDER BY created_at DESC',
      [req.user.id]
    );
    return res.json({ conversations: rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Could not load your conversations.' });
  }
};

// Create a new conversation
exports.createConversation = async (req, res) => {
  try {
    const title = (req.body?.title || 'New chat').trim().slice(0, 150) || 'New chat';
    const [result] = await pool.query(
      'INSERT INTO conversations (user_id, title) VALUES (?, ?)',
      [req.user.id, title]
    );
    return res.status(201).json({ id: result.insertId, title, created_at: new Date() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Could not start a new chat.' });
  }
};

// Get all messages in a conversation
exports.getMessages = async (req, res) => {
  try {
    const { id } = req.params;
    const [conv] = await pool.query(
      'SELECT id FROM conversations WHERE id = ? AND user_id = ?',
      [id, req.user.id]
    );
    if (conv.length === 0) {
      return res.status(404).json({ message: 'Conversation not found.' });
    }

    const [messages] = await pool.query(
      'SELECT id, sender, content, created_at FROM messages WHERE conversation_id = ? ORDER BY created_at ASC',
      [id]
    );
    return res.json({ messages });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Could not load messages.' });
  }
};

// Send a message and get the bot's reply
exports.sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Type a message before sending.' });
    }

    const [conv] = await pool.query(
      'SELECT id FROM conversations WHERE id = ? AND user_id = ?',
      [id, req.user.id]
    );
    if (conv.length === 0) {
      return res.status(404).json({ message: 'Conversation not found.' });
    }

    await pool.query(
      'INSERT INTO messages (conversation_id, sender, content) VALUES (?, "user", ?)',
      [id, content.trim()]
    );

    const [history] = await pool.query(
      'SELECT sender, content FROM messages WHERE conversation_id = ? ORDER BY created_at ASC LIMIT 20',
      [id]
    );

    const reply = await getAiReply(content.trim(), history);

    const [botInsert] = await pool.query(
      'INSERT INTO messages (conversation_id, sender, content) VALUES (?, "bot", ?)',
      [id, reply]
    );

    return res.status(201).json({
      reply: { id: botInsert.insertId, sender: 'bot', content: reply, created_at: new Date() },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'The assistant could not respond. Please try again.' });
  }
};

// Delete a conversation
exports.deleteConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      'DELETE FROM conversations WHERE id = ? AND user_id = ?',
      [id, req.user.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Conversation not found.' });
    }
    return res.json({ message: 'Chat deleted.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Could not delete this chat.' });
  }
};
