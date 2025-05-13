import express from "express";
import { createServer } from 'http';
import { Server } from 'socket.io';
import { initSocket } from './socket';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

initSocket(io);

httpServer.listen(3000, () => {
  console.log('Socket server running on http://localhost:3000');
});
