import { Test, TestingModule } from '@nestjs/testing';
import { ClotheService } from './clothe.service';

describe('ClotheService', () => {
  let service: ClotheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClotheService],
    }).compile();

    service = module.get<ClotheService>(ClotheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
