const planetRoute = require('express').Router();
const PlanetController = require('../controller/PlanetController');

planetRoute.post('/', PlanetController.create_a_planet);
planetRoute.get('/', PlanetController.list_planets);

module.exports = planetRoute;