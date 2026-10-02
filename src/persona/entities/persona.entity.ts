import { IdiomaPersona } from "../../idioma_persona/entities/idioma_persona.entity";
import { Preferencia } from "../../preferencia/entities/preferencia.entity";
import { Bloqueo } from "../../bloqueo/entities/bloqueo.entity";
import { Pais } from "./pais.entity";
export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    alias: string;
    email: string;
    paisDeResidencia: Pais;
    estaActivo: boolean; //si es false no puede ni iniciar ni recibir contactos
    idiomasQueHabla: IdiomaPersona[]; //lista de idiomas que habla
    idiomasQueAprende: IdiomaPersona[]; //lista de idiomas que aprende, maximo 3
    preferencias: Preferencia; //preferencias de la persona
    bloqueos: Bloqueo[]; //lista de personas bloqueadas

    
}
