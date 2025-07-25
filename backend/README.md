# SkillSwap Backend

This is the backend API for SkillSwap, built with Express.js, Node.js, and MongoDB.

## Setup

1. Copy `.env.example` to `.env` and set your MongoDB URI:
   ```
   cp .env.example .env
   # Edit .env to set MONGODB_URI
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server (dev mode):
   ```
   npm run dev
   ```
   Or for production:
   ```
   npm start
   ```

## API Endpoints

- `GET    /api/lessons`         - List all lessons
- `POST   /api/lessons`         - Create a lesson
- `GET    /api/lessons/:id`     - Get a lesson by ID
- `PUT    /api/lessons/:id`     - Update a lesson
- `DELETE /api/lessons/:id`     - Delete a lesson

- `GET    /api/trades`          - List all trades
- `POST   /api/trades`          - Create a trade
- `GET    /api/trades/:id`      - Get a trade by ID
- `PUT    /api/trades/:id`      - Update a trade
- `DELETE /api/trades/:id`      - Delete a trade

- `GET    /api/comments/:lessonId` - List comments for a lesson
- `POST   /api/comments`           - Add a comment
- `POST   /api/auth/register`    - Register a new user (name, email, password)
- `POST   /api/auth/login`       - Login (email, password) → returns JWT and user info

## Notes
- No authentication yet (for demo/dev only).
- Make sure MongoDB is running locally or use a cloud URI. 