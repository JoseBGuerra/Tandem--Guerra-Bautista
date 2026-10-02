import { Injectable } from '@nestjs/common';
import { CreateIdiomaPersonaDto } from './dto/create-idioma_persona.dto';
import { UpdateIdiomaPersonaDto } from './dto/update-idioma_persona.dto';
import { IdiomaPersona } from './entities/idioma_persona.entity';
import { PersonaService } from '../persona/persona.service';
import { IdiomaService } from '../idioma/idioma.service';


@Injectable()
export class IdiomaPersonaService {
  constructor(private readonly personaService: PersonaService, private readonly idiomaService: IdiomaService) {}

  idiomaPersonas: IdiomaPersona[];
  create(createIdiomaPersonaDto: CreateIdiomaPersonaDto) {
    const idiomaPersona = new IdiomaPersona();
    idiomaPersona.id = this.idiomaPersonas.length + 1;
    const persona = this.personaService.findOne(createIdiomaPersonaDto.personaId);
    if (!persona) {
      throw new Error(`Persona con ID ${createIdiomaPersonaDto.personaId} no existe`);
    }
    idiomaPersona.persona = persona;
    idiomaPersona.idioma = this.idiomaService.findOne(createIdiomaPersonaDto.idiomaId);
    idiomaPersona.nivel = createIdiomaPersonaDto.nivel;
    this.idiomaPersonas.push(idiomaPersona);
    return idiomaPersona;
  }

  findAll() {
    return this.idiomaPersonas;
  }

  findOne(id: number) {
    return this.idiomaPersonas.find(idiomaPersona => idiomaPersona.id === id);
  }

  update(id: number, updateIdiomaPersonaDto: UpdateIdiomaPersonaDto) {
    const idiomaPersona = this.findOne(id);
    if (!idiomaPersona) {
      throw new Error(`IdiomaPersona with ID ${id} not found`);
    }else{
      if (updateIdiomaPersonaDto.nivel) {
        idiomaPersona.nivel = updateIdiomaPersonaDto.nivel;
      }
    }
    return idiomaPersona;
  }

  remove(id: number) {
    this.idiomaPersonas = this.idiomaPersonas.filter(idiomaPersona => idiomaPersona.id !== id);
  }
}
