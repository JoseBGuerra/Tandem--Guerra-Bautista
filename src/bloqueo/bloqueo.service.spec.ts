import { Test, TestingModule } from '@nestjs/testing';
import { BloqueoService } from './bloqueo.service';

describe('BloqueoService', () => {
  let service: BloqueoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloqueoService],
    }).compile();

    service = module.get<BloqueoService>(BloqueoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
