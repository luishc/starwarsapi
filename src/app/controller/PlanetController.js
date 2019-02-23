const Planeta = require('../models/Planeta');

class PlanetController{

    async create_a_planet (req, res){

        var planeta = new Planeta(req.body);

        planeta.save(function(err, msg) {
            if (err)
                res.status(500).send(err);
            
            res.json(msg);
        });
    }
}

module.exports = new PlanetController();