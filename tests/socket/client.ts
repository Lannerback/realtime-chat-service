import { io } from 'socket.io-client';

// Init connection to the server
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server: user_id:', socket.id);

  // Send a greeting message
  socket.emit('chat message', {
    userId: socket.id,
    message: `Hello from ${socket.id}!`
  });
});

socket.on('chat message', (data) => {
  console.log('Received:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected');
});