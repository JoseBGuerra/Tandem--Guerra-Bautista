import { Module } from '@nestjs/common';
import { BloqueoService } from './bloqueo.service';
import { BloqueoController } from './bloqueo.controller';
import { PersonaService } from '../persona/persona.service';

@Module({
  controllers: [BloqueoController],
  providers: [BloqueoService,PersonaService],
  
})
export class BloqueoModule {}
