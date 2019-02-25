const planetRoute = require('express').Router();
const PlanetController = require('../controller/PlanetController');

planetRoute.post('/', PlanetController.create_a_planet);
planetRoute.get('/', PlanetController.list_planets);
planetRoute.delete('/:planetId', PlanetController.delete_planet);

module.exports = planetRoute;