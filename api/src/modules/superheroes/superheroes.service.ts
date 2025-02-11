import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateSuperheroDto } from "./dto/create-superhero.dto";


const superHeroes:  CreateSuperheroDto[] = [];

@Injectable()
export class SuperheroesService {

    getAll(): CreateSuperheroDto[]{
        // Sort superheroes array in descending order based on the humility score.
        superHeroes.sort((a, b) => b.humilityScore - a.humilityScore);
        return superHeroes;
    }

    postSuperhero(data: CreateSuperheroDto): CreateSuperheroDto[]{
        // Basic validation. Could use various npm packages in a full scale application.
        if(!data){
            throw new BadRequestException("Superhero data is required");
        }
        if(!data.name){
            throw new BadRequestException("Name is required");
        }
        if(!data.superPower){
            throw new BadRequestException("Superpower is required");
        }

        if(!data.humilityScore){
            throw new BadRequestException("Humility score is required");
        }

        if(data.humilityScore < 1 || data.humilityScore > 10){
            throw new BadRequestException("Humility score must be between 1 and 10");
        }
        // Add a new superhero to the array.
        superHeroes.push(data);
        // Return the get function to get back the new sorted list of superheroes.
        return this.getAll();
    }
}