import { Test, TestingModule } from '@nestjs/testing';
import { PateintsController } from './pateints.controller';
import { PateintsService } from './pateints.service';

describe('PateintsController', () => {
  let controller: PateintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PateintsController],
      providers: [PateintsService],
    }).compile();

    controller = module.get<PateintsController>(PateintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
