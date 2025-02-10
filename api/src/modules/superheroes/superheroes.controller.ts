import { Body, Controller, Get, Post } from "@nestjs/common";
import { SuperheroesService } from "./superheroes.service";
import { CreateSuperheroDto } from "./dto/create-superhero.dto";


@Controller('superheroes')
export class SuperheroesController{
    constructor(private readonly superheroesService: SuperheroesService){}
    @Get()
    getAll(): string{
        return this.superheroesService.getAll();
    }

    @Post()
    postSuperhero(@Body() createSuperheroDto: CreateSuperheroDto): CreateSuperheroDto[]{
        return this.superheroesService.postSuperhero(createSuperheroDto);
    }
}