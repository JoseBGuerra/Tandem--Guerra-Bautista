import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BloqueoService } from './bloqueo.service';
import { CreateBloqueoDto } from './dto/create-bloqueo.dto';


@Controller('bloqueo')
export class BloqueoController {
  constructor(private readonly bloqueoService: BloqueoService) {}

  @Post()
  create(@Body() createBloqueoDto: CreateBloqueoDto) {
    return this.bloqueoService.create(createBloqueoDto);
  }

  @Get()
  findAll() {
    return this.bloqueoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloqueoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloqueoService.remove(+id);
  }
}
