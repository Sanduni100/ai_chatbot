# Nova Chat — AI ChatBot (Next.js + Express + MySQL)

A full-stack chat application: a Next.js frontend styled around the pink/maroon
palette you shared, an Express + MySQL backend, JWT auth, toast notifications
for form validation, and a light/dark mode toggle.

## Project structure

```
ai-chatbot/
├── backend/     Express + MySQL API (auth, conversations, messages)
└── frontend/    Next.js app (landing page, auth pages, chat dashboard)
```

## 1. Set up the database

```bash
mysql -u root -p < backend/schema.sql
```

This creates the `ai_chatbot` database with `users`, `conversations`, and
`messages` tables.

## 2. Run the backend

```bash
cd backend
cp .env.example .env
# edit .env with your MySQL credentials and a JWT secret
npm install
npm run dev        # or: npm start
```

The API runs on `http://localhost:5000` by default.

Endpoints:
- `POST /api/auth/register` — { name, email, password }
- `POST /api/auth/login` — { email, password }
- `GET /api/chat/conversations` — list chats (auth required)
- `POST /api/chat/conversations` — create a chat
- `DELETE /api/chat/conversations/:id` — delete a chat
- `GET /api/chat/conversations/:id/messages` — chat history
- `POST /api/chat/conversations/:id/messages` — send a message, get the bot's reply

### Connecting a real AI model (optional)

By default, replies come from a small built-in responder so the app works
with zero external setup. To use a real model, set `OPENAI_API_KEY` (and
optionally `OPENAI_MODEL`) in `backend/.env` — see `backend/utils/aiResponse.js`.
You can swap this out for any provider's API by editing that one file.

## 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`. Create an account, then start chatting.

If your API runs somewhere other than `http://localhost:5000/api`, set
`NEXT_PUBLIC_API_URL` in a `frontend/.env.local` file.

## Notes

- Passwords are hashed with bcrypt; sessions use JWTs stored in
  `localStorage` and sent as `Authorization: Bearer <token>`.
- All form validation errors (empty fields, bad email, short password,
  mismatched passwords, server errors) surface as toast notifications via
  `react-toastify`.
- Theme is persisted to `localStorage` and respects the OS preference on
  first visit; toggle it from the navbar on any page.
- The color palette (maroon/crimson/rose/pink/blush) lives in
  `frontend/tailwind.config.js` and `frontend/styles/globals.css` as CSS
  variables, so both themes stay on-brand.
