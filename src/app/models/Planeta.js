var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const swapi = require('swapi-node');

var planetaSchema = new Schema({
    nome: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    clima: {
        type: String
    },
    terreno: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    aparicoes_filmes:{
        type: Number
    }
});

planetaSchema.pre('save', async function(next) {
    var result = await swapi.get('https://swapi.co/api/planets?search=' + this.nome);
    
    if(result.count > 0){
        this.aparicoes_filmes = result.results[0].films.length;
    }

    next();
});

module.exports = mongoose.model('Planeta', planetaSchema);