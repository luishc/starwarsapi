const app = require('../../src/app');
const request = require('supertest');

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
})