import { Injectable } from '@nestjs/common';
import { CreateBloqueoDto } from './dto/create-bloqueo.dto';
import { Bloqueo } from './entities/bloqueo.entity';
import {PersonaService} from '../persona/persona.service'

@Injectable()
export class BloqueoService {
  constructor(private readonly personaService: PersonaService ) {}
  bloqueos: Bloqueo[];

  create(createBloqueoDto: CreateBloqueoDto) {
    const bloqueo = new Bloqueo();
    bloqueo.id = this.bloqueos.length + 1;
    const persona = this.personaService.findOne(createBloqueoDto.idPersonaBloqueada);
    if(!persona){
      throw new Error(`Persona con ese ID no existe`);
    }
    bloqueo.PersonaBloqueada =  persona
    this.bloqueos.push(bloqueo);
    return bloqueo;
  }

  findAll() {
    return this.bloqueos;
  }

  findOne(id: number) {
    return this.bloqueos.find((v) => v.id === id);
  }

  remove(id: number) {
    this.bloqueos = this.bloqueos.filter((v) => v.id !== id);
  }
}
