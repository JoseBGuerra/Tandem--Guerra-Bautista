import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';
import { Preferencia } from '../../preferencia/entities/preferencia.entity';
import { IdiomaPersona } from '../../idioma_persona/entities/idioma_persona.entity';
import { Bloqueo } from '../../bloqueo/entities/bloqueo.entity';
import { Pais } from '../entities/pais.entity';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
        nombre?: string;
        apellido?: string;
        alias?: string;
        email?: string;
        paisDeResidencia?: Pais;
        estaActivo?: boolean; //si es false no puede ni iniciar ni recibir contactos
        idiomasQueHabla?: number[]; //lista de idiomas que habla
        idiomasQueAprende?: number[]; //lista de idiomas que aprende, maximo 3
        preferencias?: number; //preferencias de la persona
        bloqueos?: number[]; //lista de personas bloqueadas
}
