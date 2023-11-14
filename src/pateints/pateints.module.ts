import { Module } from '@nestjs/common';
import { PateintsService } from './pateints.service';
import { PateintsController } from './pateints.controller';

@Module({
  controllers: [PateintsController],
  providers: [PateintsService],
})
export class PateintsModule {}
