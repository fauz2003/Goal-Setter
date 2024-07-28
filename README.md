# Goal Setter

Goal Setter is a goal setting application developed using the MERN stack. It allows users to add, view, and delete their goals. Each user can only manage goals associated with their unique email address. The project implements JWT authentication, encryption using bcrypt, frontend authentication, and Redux Toolkit.

## Features

- User authentication using JWT
- Password encryption using bcrypt
- Frontend authentication
- Redux Toolkit for state management

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/goal-setter.git
```

2. Install dependencies:

```bash
cd goal-setter
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```plaintext
PORT=3000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

4. Start the development server:

```bash
npm run dev
```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Sign up for a new account or log in with your existing credentials.
3. Add, view, and delete your goals.


