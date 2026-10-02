import { PartialType } from '@nestjs/mapped-types';
import { CreateIdiomaPersonaDto } from './create-idioma_persona.dto';

export class UpdateIdiomaPersonaDto extends PartialType(CreateIdiomaPersonaDto) {
    nivel?: string;
}
