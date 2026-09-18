// Generates a reply for the chatbot.
// If OPENAI_API_KEY is set in .env, it calls OpenAI's chat completion API.
// Otherwise it falls back to a small built-in responder so the app runs
// end-to-end with zero external setup.

async function getAiReply(message, history = []) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (apiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a friendly, concise assistant inside a chat product.' },
            ...history.map((m) => ({
              role: m.sender === 'bot' ? 'assistant' : 'user',
              content: m.content,
            })),
            { role: 'user', content: message },
          ],
          max_tokens: 500,
        }),
      });
      const data = await response.json();
      const text = data?.choices?.[0]?.message?.content;
      if (text) return text.trim();
    } catch (err) {
      console.error('AI provider call failed, falling back to built-in responder:', err.message);
    }
  }

  return builtInReply(message);
}

function builtInReply(message) {
  const text = message.trim().toLowerCase();

  if (!text) return "I didn't catch that — could you type your question again?";
  if (/^(hi|hello|hey)\b/.test(text)) return "Hey! I'm your assistant. What can I help you with today?";
  if (text.includes('help')) return "Sure, I can help. Tell me a bit more about what you're trying to do.";
  if (text.includes('price') || text.includes('pricing')) {
    return 'Pricing depends on your plan — head to the Pricing page, or tell me your use case and I can point you to the right one.';
  }
  if (text.includes('thank')) return "You're welcome! Anything else I can help with?";
  if (text.endsWith('?')) return `Good question. Here's a quick take: ${message.replace(/\?+$/, '')} is something I can look into further if you give me a bit more detail.`;

  return `Got it — you said: "${message}". Tell me more so I can give you a useful answer.`;
}

module.exports = { getAiReply };
