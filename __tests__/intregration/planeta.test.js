const app = require('../../src/app');
const request = require('supertest');
const factory = require('../utils/factory');
const planetList = require('../utils/createManyPlanets');

describe('Planeta API', () =>{
    describe('Save Planet', () => {
        it('should save a new planet', async () => {
            const response = await request(app)
                .post('/planetas')
                .send({
                    nome: 'Alderaan',
                    clima: 'temperate',
                    terreno: 'grasslands, mountains'
                });
    
            expect(response.status).toBe(200);
        });
    
        it('should not save a new planet without a name property', async () => {
            const response = await request(app)
                .post('/planetas')
    
            expect(response.status).toBe(500);
        });
    
        it('should not save a planet thar already exists', async () => {
            const planetMock = await factory.create('Planet');
    
            const response = await request(app)
                .post('/planetas')
                .send(planetMock);
    
            expect(response.status).toBe(500);
        });
    });

    describe('List planets, find and delete a planet', () => {
        it('should return a list of planets', async () => {
            const planets = planetList.generatePlanets(5);
            await factory.createMany('Planet', 5, planets);

            const response = await request(app)
                .get('/planetas');

            expect(response.status).toBe(200);
        });

        it('should return a planets searching by name', async () => {
            const planets = planetList.generatePlanets(5);
            const planetsMock = await factory.createMany('Planet', 5, planets);

            const response = await request(app)
                .get('/planetas?nome='+ planetsMock[0].nome);

            expect(response.status).toBe(200);
        });

        it('should return a planets searching by id', async () => {
            const planets = planetList.generatePlanets(5);
            const planetsMock = await factory.createMany('Planet', 5, planets);

            const response = await request(app)
                .get('/planetas?id='+ planetsMock[0]._id);

            expect(response.status).toBe(200);
        });

        it('should delete a planet', async () => {
            const planets = planetList.generatePlanets(5);
            const planetsMock = await factory.createMany('Planet', 5, planets);
    
            const response = await request(app)
                .delete('/planetas/' + planetsMock[0]._id);
    
            expect(response.status).toBe(200);
        });

        it('should get an error when try to delete planet that dont exist', async () => {
            const planets = planetList.generatePlanets(5);
            const planetsMock = await factory.createMany('Planet', 5, planets);
    
            const response = await request(app)
                .delete('/planetas/123123');
    
            expect(response.status).toBe(500);
        });
    });

});