import { Injectable } from '@nestjs/common';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { Preferencia } from './entities/preferencia.entity';

@Injectable()
export class PreferenciaService {
  preferencias: Preferencia[];

  create(createPreferenciaDto: CreatePreferenciaDto) {
    const preferencia = new Preferencia();
    preferencia.id = this.preferencias.length + 1;
    preferencia.PuedenIniciarSoloCompatibles = createPreferenciaDto.PuedenIniciarSoloCompatibles;
    preferencia.cantConversacionesMaximas = createPreferenciaDto.cantConversacionesMaximas;
    preferencia.tieneNoMolestar = createPreferenciaDto.tieneNoMolestar;
    this.preferencias.push(preferencia);
    return preferencia;  
  }

  findAll() {
    return this.preferencias;
  }

  findOne(id: number) {
    return this.preferencias.find(preferencia => preferencia.id === id);
  }

  update(id: number, updatePreferenciaDto: UpdatePreferenciaDto) {
    const preferencia = this.findOne(id);
    if (!preferencia) {
      throw new Error(`Preferencia with ID ${id} not found`);
    } else {
      if (updatePreferenciaDto.PuedenIniciarSoloCompatibles) {
        preferencia.PuedenIniciarSoloCompatibles = updatePreferenciaDto.PuedenIniciarSoloCompatibles;
      }
      if (updatePreferenciaDto.cantConversacionesMaximas) {
        preferencia.cantConversacionesMaximas = updatePreferenciaDto.cantConversacionesMaximas;
      }
      if (updatePreferenciaDto.tieneNoMolestar !== undefined) {
        preferencia.tieneNoMolestar = updatePreferenciaDto.tieneNoMolestar;
      }
      return preferencia;
    }
  }

  remove(id: number) {
    this.preferencias = this.preferencias.filter(preferencia => preferencia.id !== id);
  }
}
