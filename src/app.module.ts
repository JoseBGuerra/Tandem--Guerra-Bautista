import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { IdiomaModule } from './idioma/idioma.module';
import { PreferenciaModule } from './preferencia/preferencia.module';
import { BloqueoModule } from './bloqueo/bloqueo.module';
import { IdiomaPersonaModule } from './idioma_persona/idioma_persona.module';

@Module({
  imports: [PersonaModule, IdiomaModule, PreferenciaModule, BloqueoModule, IdiomaPersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
