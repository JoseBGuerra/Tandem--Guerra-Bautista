import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdiomaService } from './idioma.service';

@Controller('idioma')
export class IdiomaController {
  constructor(private readonly idiomaService: IdiomaService) {}


  @Get()
  findAll() {
    return this.idiomaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idiomaService.findOne(+id);
  }

}
