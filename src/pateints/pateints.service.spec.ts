import { Test, TestingModule } from '@nestjs/testing';
import { PateintsService } from './pateints.service';

describe('PateintsService', () => {
  let service: PateintsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PateintsService],
    }).compile();

    service = module.get<PateintsService>(PateintsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
