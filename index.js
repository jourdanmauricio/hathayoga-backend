const express = require('express');

const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  ormErrorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

// Middleware para recibir datos
// json
app.use(express.json());
// files
app.use(express.urlencoded({ extended: false }));

// Server Static Files
app.use('/static', express.static('public'));

// aceptamos cualquier origen
app.use(cors());
// const whiteList = ['http://localhost:8080', 'https://yathayogaloberia.ga'];
// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Acceso no permitido'));
//     }
//   },
// };
// app.use(cors(options));

require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

routerApi(app);

// Se gestionan después del router
// Tener en cuenta el orden. Primero log y despues error, sino no ejecutaría log,
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port: ' + port);
});
