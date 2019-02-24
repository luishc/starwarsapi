const faker = require('faker');

class PlanetsGenerator{
    generatePlanets(qtd) {
        const planetsObj = [];

        for(let i = 0; i < qtd; i++){
            var planet = {
                nome: faker.name.firstName(),
                clima: faker.lorem.word(),
                terreno: faker.lorem.word()
            };
        
            planetsObj.push(planet);
        }

        return planetsObj;
    }
}

const generator = new PlanetsGenerator();
module.exports = generator;