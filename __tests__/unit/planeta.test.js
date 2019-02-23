const Planeta = require('../../src/app/models/Planeta');

describe('Planet', () =>{
    it('should get number of appearances in films of exinting planet', async () =>{
        const planeta = await Planeta.create({
            nome: 'Alderaan',
            clima: 'temperate',
            terreno: 'grasslands, mountains'
        });

        expect(Object.keys(planeta.toObject())).toEqual(
            expect.arrayContaining(['_id', 'aparicoes_filmes'])
        );
        expect(planeta.aparicoes_filmes).toBeGreaterThanOrEqual(0);
    });

    it('should not contains number of appearances in films of planet that doesnt extist', async () =>{
        const planeta = await Planeta.create({
            nome: 'Terra',
            clima: 'temperate',
            terreno: 'grasslands, mountains'
        });

        expect(planeta.toObject()).not.toHaveProperty('aparicoes_filmes');
        
    });
});