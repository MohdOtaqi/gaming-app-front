# Gaming Community Platform

A full-stack web application that connects gamers and helps them find teammates for their favorite games. Built with React, Node.js, Express, and MongoDB.

## 🎮 Features

- **User Authentication & Profiles**: Secure login/registration with detailed gaming profiles
- **Real-time Chat**: Instant messaging between users using Socket.IO
- **Game Management**: Admin panel to manage available games
- **Member Discovery**: Find active players for specific games
- **Responsive Design**: Modern UI that works on all devices
- **Role-based Access**: Admin and user roles with different permissions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Material-UI** - Component library
- **Bootstrap** - CSS framework
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.IO** - Real-time communication
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd my-gaming-app
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Create a `.env` file in the client directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Run the Application
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "gamertag": "GamerJohn",
  "description": "Looking for teammates",
  "favoriteGames": ["Valorant", "CS2"],
  "platforms": ["PC", "PS5"]
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "gamertag": "GamerJohn"
  }
}
```

#### POST `/api/auth/login`
Authenticate existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### User Management Endpoints

#### GET `/api/users/me`
Get current user's profile.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "gamertag": "GamerJohn",
  "description": "Looking for teammates",
  "favoriteGames": ["Valorant", "CS2"],
  "platforms": ["PC", "PS5"],
  "isActive": true,
  "activeGames": ["Valorant"]
}
```

#### PUT `/api/users/me`
Update current user's profile.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "John Doe",
  "gamertag": "NewGamerTag",
  "description": "Updated description",
  "favoriteGames": ["Valorant", "CS2", "Apex Legends"],
  "platforms": ["PC", "PS5", "Xbox"]
}
```

#### POST `/api/users/me/active`
Set user as active for specific games.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "game": "Valorant"
}
```

#### POST `/api/users/me/inactive`
Set user as inactive.

**Headers:** `Authorization: Bearer <token>`

### Member Discovery Endpoints

#### GET `/api/users/members`
Find active members for a specific game.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `game` (required): Game name to search for

**Response:**
```json
[
  {
    "id": "user_id",
    "name": "John Doe",
    "gamertag": "GamerJohn",
    "avatar": "avatar_url",
    "isActive": true,
    "activeGame": "Valorant"
  }
]
```

### Chat Endpoints

#### GET `/api/users/me/chats`
Get all chats for current user.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
[
  {
    "_id": "chat_id",
    "participants": [
      {
        "id": "user_id",
        "name": "John Doe",
        "avatar": "avatar_url",
        "gamertag": "GamerJohn"
      }
    ],
    "messages": [],
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### GET `/api/users/me/chats/:userId`
Get or create chat with specific user.

**Headers:** `Authorization: Bearer <token>`

#### POST `/api/users/me/chats/:userId`
Send message to user.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "text": "Hello! Want to play together?"
}
```

### Game Management Endpoints (Admin Only)

#### GET `/api/games`
Get all available games.

**Headers:** `Authorization: Bearer <token>`

#### POST `/api/games`
Add new game (Admin only).

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "New Game",
  "imageUrl": "game_image_url"
}
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header for protected endpoints:

```
Authorization: Bearer <your_jwt_token>
```

## 🎨 UI Components

The application uses a combination of UI frameworks:

- **Material-UI**: Primary component library for forms, navigation, and layout
- **Bootstrap**: Additional styling and responsive utilities
- **Custom CSS**: Tailored styling for gaming theme

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Development

### Project Structure
```
my-gaming-app/
├── client/                 # React frontend
│   ├── public/            # Static files
│   │   ├── components/    # React components
│   │   ├── css/          # Stylesheets
│   │   ├── services/     # API services
│   │   └── App.js        # Main app component
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
└── README.md
```

### Available Scripts

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🚀 Deployment Analysis

### Deployment Platforms

The application can be deployed on various platforms:

- **Heroku**: Easy deployment with Git integration
- **Vercel**: Great for React frontend
- **Railway**: Full-stack deployment
- **AWS**: Scalable cloud deployment
- **DigitalOcean**: VPS deployment

### Production Environment Variables

**Backend (.env):**
```env
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
PORT=5000
NODE_ENV=production
```

**Frontend (.env):**
```env
REACT_APP_API_URL=your_production_api_url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ for the gaming community** 
