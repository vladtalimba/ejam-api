import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
    let superHeroesController: SuperheroesController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SuperheroesController],
            providers:[SuperheroesService]
        }).compile();

        superHeroesController = app.get<SuperheroesController>(SuperheroesController);
    });

    describe('Superheroes Controller', () => {
        it('should return an empty array', () => {
            expect(superHeroesController.getAll()).toEqual([]);
        });
        
        it('should only return the new entry', () => {
            const entry = {
                name: "Vlad",
                superPower: "Invisibility",
                humilityScore: 5
            }

            expect(superHeroesController.postSuperhero(entry)).toEqual([{
                name: "Vlad",
                superPower: "Invisibility",
                humilityScore: 5
            }]);
        });

        it('should return the array in sorted order', () => {
            let arr;
            arr = superHeroesController.postSuperhero({
                name: "Vlad",
                superPower: "Invisibility",
                humilityScore: 5
            });

            arr = superHeroesController.postSuperhero({
                name: "Vlad",
                superPower: "Invisibility",
                humilityScore: 2
            });

            arr = superHeroesController.postSuperhero({
                name: "Vlad",
                superPower: "Invisibility",
                humilityScore: 1
            });

            arr = superHeroesController.postSuperhero({
                name: "Vlad",
                superPower: "Invisibility",
                humilityScore: 7
            });

            expect(superHeroesController.getAll()).toEqual(arr);
        })

    })
})