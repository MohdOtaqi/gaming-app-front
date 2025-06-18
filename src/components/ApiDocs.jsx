import React from "react";
import { Container, Card } from "react-bootstrap";

const ApiDocs = () => (
  <Container className="my-5">
    <Card>
      <Card.Body>
        <h1>🎮 Gaming App API Documentation</h1>
        <h3>Base URL</h3>
        <pre>http://localhost:5000/api</pre>

        <h3>Authentication</h3>
        <h5>Register</h5>
        <pre>POST /auth/register</pre>
        <p>Request Body:</p>
        <pre>{`
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "gamertag": "GamerJohn",
  "description": "Looking for teammates",
  "avatar": "avatar_url",
  "favoriteGames": ["Valorant", "CS2"],
  "platforms": ["PC", "PS5"]
}
        `}</pre>
        <h5>Login</h5>
        <pre>POST /auth/login</pre>
        <p>Request Body:</p>
        <pre>{`
{
  "email": "john@example.com",
  "password": "password123"
}
        `}</pre>

        <h3>User Profile & Management</h3>
        <ul>
          <li><b>GET /users/me</b> - Get current user profile</li>
          <li><b>PUT /users/me</b> - Update current user profile</li>
          <li><b>POST /users/me/active</b> - Set user as active</li>
          <li><b>POST /users/me/inactive</b> - Set user as inactive</li>
          <li><b>GET /users/members?game=Valorant</b> - Get active members for a game</li>
          <li><b>GET /users/:id</b> - Get user by ID</li>
        </ul>

        <h3>Chat</h3>
        <ul>
          <li><b>GET /users/me/chats</b> - Get all chats</li>
          <li><b>GET /users/me/chats/:userId</b> - Get/create chat with user</li>
          <li><b>POST /users/me/chats/:userId</b> - Send message</li>
          <li><b>DELETE /users/me/chats/:chatId</b> - Delete chat</li>
        </ul>

        <h3>Games (Admin Only)</h3>
        <ul>
          <li><b>GET /games</b> - Get all games</li>
          <li><b>POST /games</b> - Add new game</li>
        </ul>

        <h3>Authentication Header</h3>
        <pre>Authorization: Bearer &lt;your_jwt_token&gt;</pre>
      </Card.Body>
    </Card>
  </Container>
);

export default ApiDocs; 