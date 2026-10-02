import { Test, TestingModule } from '@nestjs/testing';
import { IdiomaPersonaService } from './idioma_persona.service';

describe('IdiomaPersonaService', () => {
  let service: IdiomaPersonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdiomaPersonaService],
    }).compile();

    service = module.get<IdiomaPersonaService>(IdiomaPersonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
