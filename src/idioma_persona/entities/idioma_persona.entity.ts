import { Persona } from "../../persona/entities/persona.entity";
import { Idioma } from "../../idioma/entities/idioma.entity";

export class IdiomaPersona {
    id: number;
    persona: Persona;
    idioma: Idioma;
    nivel: string;
}
