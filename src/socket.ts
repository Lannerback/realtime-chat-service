import { Server, Socket } from 'socket.io';

interface Message {
  userId: string;
  message: string;
}

export function initSocket(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('chat message', (data: Message) => {
      console.log(`(New message)${data.userId}: ${data.message}`);
      socket.broadcast.emit('chat message', data); // send to everyone except sender
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
}
