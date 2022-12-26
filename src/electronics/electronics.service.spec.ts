import { Test, TestingModule } from '@nestjs/testing';
import { ElectronicsService } from './electronics.service';

describe('ElectronicsService', () => {
  let service: ElectronicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectronicsService],
    }).compile();

    service = module.get<ElectronicsService>(ElectronicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
