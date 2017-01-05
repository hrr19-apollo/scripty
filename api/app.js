const express = require('express');
const bodyParser = require('body-parser');

const contentHandlers = require('./routes/content-route-handlers');
const lessonHandlers = require('./routes/lesson-route-handlers');
const userHandlers = require('./routes/user-route-handlers');

const log = require('./helpers/log');
const db = require('./data/config');

const authenticationRequired =
  require('./helpers/auth.js')(process.env.JWT_SECRET || 'scripty');

const app = express();

app.use(bodyParser.json());

// Apply headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Log out requests for debug
app.use((req, res, next) => {
  log.info(`Request recieved from ${req.url} with method ${req.method}.`);
  next();
});

// Define routes
app.get('/lessons', lessonHandlers.getAllLessons);
app.get('/lessons/:id', lessonHandlers.getLessonAndContentsById);
app.post('/lessons', lessonHandlers.createLesson);
app.put('/lessons/:id', lessonHandlers.updateLessonById);
app.delete('/lessons/:id', lessonHandlers.deleteLessonById);

app.get('/users', authenticationRequired, userHandlers.getUsers);
app.get('/users/:id', authenticationRequired, userHandlers.getUserById);
app.post('/users', authenticationRequired, userHandlers.createUser);
app.put('/users/:id', authenticationRequired, userHandlers.updateUserById);
app.delete('/users/:id', authenticationRequired, userHandlers.deleteUserById);
app.get('/signin', userHandlers.signinUser);

app.get('/content/:type', contentHandlers.getContentByType);
app.get('/content/:id', contentHandlers.getContentById);
app.post('/content', contentHandlers.createContent);
app.put('/content/:id', contentHandlers.updateContentById);
app.delete('/content/:id', contentHandlers.deleteContentById);

app.listen(process.env.PORT || 3011, () => {
  log.info(`Listening on port ${process.env.PORT || 3011}.`);
});

const u = require('util');

app.all('*', (...args) => {
  log.info('Request fell through.', ...[args.map(arg => u.inspect(arg))]);
});