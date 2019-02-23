const routes = require('express').Router();
const planetRoute = require('./planetRoute');

routes.use('/planetas', planetRoute)

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Star Wars API!' });
});

module.exports = routes;