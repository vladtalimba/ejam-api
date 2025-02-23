import { Body, Controller, Get, Post } from "@nestjs/common";
import { SuperheroesService } from "./superheroes.service";
import { CreateSuperheroDto } from "./dto/create-superhero.dto";


// Controller for the superheroes module.
@Controller('superheroes')
export class SuperheroesController{
    constructor(private readonly superheroesService: SuperheroesService){}
    // Get function for the /superheroes endpoint. Returns all superheroes sorted based on their humility score.
    @Get()
    async getAll(): Promise<CreateSuperheroDto[]>{
        return await this.superheroesService.getAll();
    }

    // Post function for the /superheroes endpoint. Adds a new entry then returns the new sorted array.
    @Post()
    async postSuperhero(@Body() entry: any): Promise<CreateSuperheroDto[]>{
        return await this.superheroesService.postSuperhero(entry);
    }
}