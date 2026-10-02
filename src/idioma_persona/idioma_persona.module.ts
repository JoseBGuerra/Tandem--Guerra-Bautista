import { Module } from '@nestjs/common';
import { IdiomaPersonaService } from './idioma_persona.service';
import { IdiomaPersonaController } from './idioma_persona.controller';
import { PersonaService } from '../persona/persona.service';
import { IdiomaService } from '../idioma/idioma.service';

@Module({
  controllers: [IdiomaPersonaController],
  providers: [IdiomaPersonaService, PersonaService, IdiomaService],
})
export class IdiomaPersonaModule {
}
