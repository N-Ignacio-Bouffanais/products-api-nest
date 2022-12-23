import { Test, TestingModule } from '@nestjs/testing';
import { ClotheController } from './clothe.controller';
import { ClotheService } from './clothe.service';

describe('ClotheController', () => {
  let controller: ClotheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClotheController],
      providers: [ClotheService],
    }).compile();

    controller = module.get<ClotheController>(ClotheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
