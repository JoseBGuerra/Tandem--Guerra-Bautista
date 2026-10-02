import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdiomaPersonaService } from './idioma_persona.service';
import { CreateIdiomaPersonaDto } from './dto/create-idioma_persona.dto';
import { UpdateIdiomaPersonaDto } from './dto/update-idioma_persona.dto';

@Controller('idioma-persona')
export class IdiomaPersonaController {
  constructor(private readonly idiomaPersonaService: IdiomaPersonaService) {}

  @Post()
  create(@Body() createIdiomaPersonaDto: CreateIdiomaPersonaDto) {
    return this.idiomaPersonaService.create(createIdiomaPersonaDto);
  }

  @Get()
  findAll() {
    return this.idiomaPersonaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idiomaPersonaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdiomaPersonaDto: UpdateIdiomaPersonaDto) {
    return this.idiomaPersonaService.update(+id, updateIdiomaPersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idiomaPersonaService.remove(+id);
  }
}
