const Planeta = require('../models/Planeta');

class PlanetController{

    create_a_planet (req, res) {
        var planeta = new Planeta(req.body);
        planeta.save((err, msg) => {
            if (err)
                res.status(500).send(err);
            
            res.json(msg);
        });
    }

    list_planets (req, res) {
        Planeta.find({}, (msg) => {
            res.json(msg);
        });
    }
}

module.exports = new PlanetController();