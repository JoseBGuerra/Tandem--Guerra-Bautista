import { Test, TestingModule } from '@nestjs/testing';
import { BloqueoController } from './bloqueo.controller';
import { BloqueoService } from './bloqueo.service';

describe('BloqueoController', () => {
  let controller: BloqueoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloqueoController],
      providers: [BloqueoService],
    }).compile();

    controller = module.get<BloqueoController>(BloqueoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
