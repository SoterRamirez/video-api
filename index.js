const express = require('express');
const app = express();

const { config } = require('./config/index');

const authAp = require('./routes/auth');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies.js');

const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

//routes
authAp(app);
moviesApi(app);
userMoviesApi(app);

//Error 404
app.use(notFoundHandler);

//Manejadores de errorres
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Escuchando en http://localhost:${config.port}`);
});