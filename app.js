const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const { createServer } = require('http')
const { Server } = require("socket.io");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const Message = require('./model/message.model');

const app = express();

const server = createServer(app)
// Setup socket.io server
const io = new Server(server, {
  cors: {
    origin: "*", // React frontend
    methods: ["GET", "POST"],
  },
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);

app.get("/messages/:user1/:user2", async (req, res) => {
  const { user1, user2 } = req.params;
  const messages = await Message.find({
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 },
    ],
  }).sort({ createdAt: 1 });
  res.json(messages);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const onlineUsers = new Map(); // userId -> socket.id

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join', (userId) => {
    socket.userId = userId;
    onlineUsers.set(userId, socket.id);
    socket.join(userId);

    // Notify all clients about online users
    io.emit('onlineUsers', Array.from(onlineUsers.keys()));
  });

  socket.on('privateMessage', async ({ sender, receiver, text }) => {
    const newMessage = new Message({ sender, receiver, text });
    await newMessage.save();
    io.to(sender).to(receiver).emit('privateMessage', newMessage);
  });

  socket.on('disconnect', () => {
    if (socket.userId) {
      onlineUsers.delete(socket.userId);
      io.emit('onlineUsers', Array.from(onlineUsers.keys()));
      console.log('User disconnected:', socket.userId);
    }
  });
});


module.exports = server;
