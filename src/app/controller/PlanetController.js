const Planeta = require('../models/Planeta');

class PlanetController{

    create_a_planet (req, res) {
        var planeta = new Planeta(req.body);
        planeta.save((err, msg) => {
            if (err){
                res.status(500).send(err);
            } else{
                res.json(msg);
            }
        });
    }

    list_planets (req, res) {
        let search = {};
        
        const {nome, id} = require('url').parse(req.url,true).query;
        if(id !== undefined) {
            search._id = id;
        } else if(nome != undefined) {
            search.nome = nome;
        }
        
        Planeta.find(search, (err, msg) => {
            if(err){
                console.log(err);
            } else {
                res.json({msg, search});
            }
        });
    }

    delete_planet (req, res) {
        Planeta.findOneAndDelete({
            _id: req.params.planetId
        },
        
        function(err, planeta) {
            if (err){
                res.status(500).send(err);
            } else{
                res.json({ planet: 'planet successfully deleted' });
            }

        });
    }
}

module.exports = new PlanetController();