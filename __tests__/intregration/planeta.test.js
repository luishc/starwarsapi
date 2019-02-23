const app = require('../../src/app');
const request = require('supertest');
const factory = require('../utils/factory');

describe('Planeta API', () =>{
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

        const secondResponse = await request(app)
            .post('/planetas')
            .send(planetMock);

        expect(secondResponse.status).toBe(500);
    });
});