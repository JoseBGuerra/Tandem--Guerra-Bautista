import { Test, TestingModule } from '@nestjs/testing';
import { IdiomaPersonaController } from './idioma_persona.controller';
import { IdiomaPersonaService } from './idioma_persona.service';

describe('IdiomaPersonaController', () => {
  let controller: IdiomaPersonaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdiomaPersonaController],
      providers: [IdiomaPersonaService],
    }).compile();

    controller = module.get<IdiomaPersonaController>(IdiomaPersonaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
