const app = require('../../src/app');
const request = require('supertest');
const Planeta = require('../../src/app/models/Planeta');

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
        var planet = {
            nome: 'Teste duplicate 2',
            clima: 'temperate',
            terreno: 'grasslands, mountains'
        }
        
        var planeta = await Planeta.create(planet);

        const secondResponse = await request(app)
            .post('/planetas')
            .send(planet);

        expect(secondResponse.status).toBe(500);
    });
})