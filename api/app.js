const express = require('express');
const bodyParser = require('body-parser');

const contentHandlers = require('./routes/content-route-handlers');
const lessonHandlers = require('./routes/lesson-route-handlers');
const userHandlers = require('./routes/user-route-handlers');

const log = require('./helpers/log');
const db = require('./data/config');

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
app.get('/api/lessons', lessonHandlers.getAllLessons);
app.get('/api/lessons/:id', lessonHandlers.getLessonById);
app.post('/api/lessons', lessonHandlers.createLesson);
app.put('/api/lessons/:id', lessonHandlers.updateLessonById);
app.delete('/api/lessons/:id', lessonHandlers.deleteLessonById);

app.get('/api/users', userHandlers.getUsers);
app.get('/api/users/:id', userHandlers.getUserById);
app.post('/api/users', userHandlers.createUser);
app.put('/api/users/:id', userHandlers.updateUserById);
app.delete('/api/users/:id', userHandlers.deleteUserById);

app.get('/api/content/:type', contentHandlers.getContentByType);
app.get('/api/content/:id', contentHandlers.getContentById);
app.post('/api/content', contentHandlers.createContent);
app.put('/api/content', contentHandlers.updateContentById);
app.delete('/api/content', contentHandlers.deleteContentById);

app.listen(process.env.PORT || 3011, () => {
  log.info(`Listening on port ${process.env.PORT || 3011}.`);
});
