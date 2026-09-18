const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/auth');
const {
  listConversations,
  createConversation,
  getMessages,
  sendMessage,
  deleteConversation,
} = require('../controllers/chatController');

router.use(requireAuth);

router.get('/conversations', listConversations);
router.post('/conversations', createConversation);
router.delete('/conversations/:id', deleteConversation);
router.get('/conversations/:id/messages', getMessages);
router.post('/conversations/:id/messages', sendMessage);

module.exports = router;
