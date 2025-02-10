import { Injectable } from "@nestjs/common";
import { CreateSuperheroDto } from "./dto/create-superhero.dto";


const superHeroes:  CreateSuperheroDto[] = [];

@Injectable()
export class SuperheroesService {

    getAll(){
        return "Hello world!"
    }

    postSuperhero(superHero: CreateSuperheroDto): CreateSuperheroDto[]{
        superHeroes.push(superHero);
        return superHeroes;
    }
}