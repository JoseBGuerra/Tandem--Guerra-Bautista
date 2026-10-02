import { Injectable } from '@nestjs/common';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomaService {
  Idiomas: Idioma[] = [
    { id: 1, idioma: 'Español' },
    { id: 2, idioma: 'Inglés' },
    { id: 3, idioma: 'Francés' },
    { id: 4, idioma: 'Alemán' },
    { id: 5, idioma: 'Italiano' },
    { id: 6, idioma: 'Portugués' },
    { id: 7, idioma: 'Chino' },
    { id: 8, idioma: 'Japonés' },
    { id: 9, idioma: 'Ruso' },
    { id: 10, idioma: 'Árabe' },
  ]; 


  findAll() {
    return this.Idiomas;
  }

  findOne(id: number) {
    const idioma = this.Idiomas.find((v) => v.id === id);
    if(idioma) {
      return idioma;
    }else{
      throw new Error("El idioma no existe");
    }
  }

}
