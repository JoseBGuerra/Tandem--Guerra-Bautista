import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { PreferenciaService } from '../preferencia/preferencia.service';
import { BloqueoService } from '../bloqueo/bloqueo.service';
import { IdiomaPersonaService } from '../idioma_persona/idioma_persona.service';
import { IdiomaService } from '../idioma/idioma.service';

@Module({
  controllers: [PersonaController],
  providers: [IdiomaService, PersonaService, PreferenciaService, BloqueoService, IdiomaPersonaService],
})
export class PersonaModule {}
