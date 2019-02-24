const faker = require('faker');
const { factory } = require('factory-girl');
const Planeta = require('../../src/app/models/Planeta');

factory.define('Planet', Planeta, {
    nome: faker.random.word(),
    clima: faker.lorem.word(),
    terreno: faker.lorem.word()
});

module.exports = factory;

