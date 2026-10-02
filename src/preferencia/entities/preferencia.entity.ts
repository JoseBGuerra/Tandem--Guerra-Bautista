export class Preferencia {
    id: number;
    PuedenIniciarSoloCompatibles: string; //este delimita si pueden todos, o solo compatibles, si quiere que ninguno pueda iniciar conversaciones, entonces modifica true no molestar
    cantConversacionesMaximas: number; //entre 1 y 10
    tieneNoMolestar: boolean; //no vana recibir conversaciones de nadie, pero las que tienen abiertas las pueden seguir teniendo
}
