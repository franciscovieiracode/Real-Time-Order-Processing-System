const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Global socket access
global.io = io;

// Socket connection logic
io.on('connection', (socket) => {
  console.log('🟢 Client connected via Socket.io');
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
