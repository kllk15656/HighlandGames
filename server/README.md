Server (Node + Express + MongoDB)
- Copy .env.example to .env and fill MONGO_URI and JWT_SECRET
- Install: npm install
- Start: npm run dev (requires nodemon) or npm start
- Endpoints:
  POST /api/auth/register  { username, email, password }
  POST /api/auth/login     { username, password } -> returns { token }
