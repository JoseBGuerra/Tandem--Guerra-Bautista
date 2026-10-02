import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PreferenciaService } from '../preferencia/preferencia.service';
import { BloqueoService } from '../bloqueo/bloqueo.service';
import { IdiomaPersonaService } from '../idioma_persona/idioma_persona.service';
import { Persona } from './entities/persona.entity';
import { Idioma } from '../idioma/entities/idioma.entity';

@Injectable()
export class PersonaService {
  constructor(
    private readonly preferenciaService: PreferenciaService,
    private readonly bloqueoService: BloqueoService,
    private readonly idiomaPersonaService: IdiomaPersonaService
  ) {}

  personas: Persona[];
  
  create(createPersonaDto: CreatePersonaDto) {
    const persona = new Persona();

    if (createPersonaDto.idiomasQueAprende.length > 3) {
      throw new Error('No se pueden agregar más de 3 idiomas que aprende');
    }else{
      persona.id = this.personas.length + 1;
    persona.nombre = createPersonaDto.nombre;
    persona.apellido = createPersonaDto.apellido;
    persona.alias = createPersonaDto.alias;
    persona.email = createPersonaDto.email;
    persona.paisDeResidencia = createPersonaDto.paisDeResidencia;
    persona.estaActivo = createPersonaDto.estaActivo;
    const preferencia = this.preferenciaService.findOne(createPersonaDto.preferencias);
    if (!preferencia) {
      throw new Error('Preferencia no encontrada');
    }
    persona.preferencias = preferencia;
    const idiomasQueHabla = createPersonaDto.idiomasQueHabla.map(idioma => this.idiomaPersonaService.findOne(idioma)).filter(idioma => idioma !== undefined);
    const idiomasQueAprende = createPersonaDto.idiomasQueAprende.map(idioma => this.idiomaPersonaService.findOne(idioma)).filter(idioma => idioma !== undefined);
    const bloqueos = createPersonaDto.bloqueos.map(bloqueo => this.bloqueoService.findOne(bloqueo)).filter(bloqueo => bloqueo !== undefined)
    persona.idiomasQueHabla = idiomasQueHabla;
    persona.idiomasQueAprende = idiomasQueAprende;
    persona.bloqueos = bloqueos;
    }

    this.personas.push(persona);
    return persona;
  }

  findAll() {
    return this.personas;
  }

  findOne(id: number) {
    return this.personas.find(persona => persona.id === id);
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const persona = this.findOne(id);
    if (!persona) {
      throw new Error(`Persona with ID ${id} not found`);
    }else{
      if (updatePersonaDto.nombre) {
        persona.nombre = updatePersonaDto.nombre;
      }
      if (updatePersonaDto.apellido) {
        persona.apellido = updatePersonaDto.apellido;
      }
      if (updatePersonaDto.alias) {
        persona.alias = updatePersonaDto.alias;
      }
      if (updatePersonaDto.email) {
        persona.email = updatePersonaDto.email;
      }
      if (updatePersonaDto.paisDeResidencia) {
        persona.paisDeResidencia = updatePersonaDto.paisDeResidencia;
      }
      if (updatePersonaDto.estaActivo !== undefined) {
        persona.estaActivo = updatePersonaDto.estaActivo;
      }
      if (updatePersonaDto.idiomasQueHabla) {
        const idiomasQueHabla = updatePersonaDto.idiomasQueHabla.map(idioma => this.idiomaPersonaService.findOne(idioma)).filter(idioma => idioma !== undefined);
        persona.idiomasQueHabla = idiomasQueHabla;
      }
      if (updatePersonaDto.idiomasQueAprende) {
        if (updatePersonaDto.idiomasQueAprende.length > 3) {
          throw new Error('No se pueden agregar más de 3 idiomas que aprende');
        }
        const idiomasQueAprende = updatePersonaDto.idiomasQueAprende.map(idioma => this.idiomaPersonaService.findOne(idioma)).filter(idioma => idioma !== undefined);
        persona.idiomasQueAprende = idiomasQueAprende;
      }
      if (updatePersonaDto.preferencias) {
        const preferencia = this.preferenciaService.findOne(updatePersonaDto.preferencias);
        if (!preferencia) {
          throw new Error('Preferencia no encontrada');
        }
        persona.preferencias = preferencia;
      }
      if (updatePersonaDto.bloqueos) {
        const bloqueos = updatePersonaDto.bloqueos.map(bloqueo => this.bloqueoService.findOne(bloqueo)).filter(bloqueo => bloqueo !== undefined);
        persona.bloqueos = bloqueos;
      }
    }
  }

  remove(id: number) {
    this.personas = this.personas.filter(persona => persona.id !== id);
  }

  buscarPersonasCompatibles(id: number) {
    const personaCliente = this.personas.find(persona => persona.id === id)
    var personasCompatibles: Persona[] = [];
    if(personaCliente){
      const idiomasHablados  = personaCliente.idiomasQueHabla;
      const idiomasAprende  = personaCliente.idiomasQueAprende;
      for(var i = 0; i < idiomasHablados.length;i++){
        const personasQueAprenden = this.personas.filter(
          persona => persona.idiomasQueAprende.find(
            idioma => idioma.idioma = idiomasHablados[i].idioma 
          )
        )
        personasCompatibles.concat(personasQueAprenden)
      }
      for(var i = 0; i < idiomasAprende.length;i++){
        const personasQueHablan = this.personas.filter(
          persona => persona.idiomasQueHabla.find(
            idioma => idioma.idioma = idiomasAprende[i].idioma 
          )
           && personasCompatibles.filter(
            p => p.id === id
          ).length == 0
        )
        personasCompatibles.concat(personasQueHablan)
      }

      personasCompatibles = personasCompatibles.filter(persona => persona.estaActivo == true && personaCliente.bloqueos.filter(bloqueo => bloqueo.PersonaBloqueada = persona).length == 0);
      return personaCliente

    }
      
  }

  
    puedeContactarEnIdiomaDeterminado(idCliente: number, idReceptor: number, idIdioma: number){
      const cliente = this.personas.find(persona => persona.id === idCliente);
      const receptor = this.personas.find(persona => persona.id === idReceptor);
      const 
      
    }
}
