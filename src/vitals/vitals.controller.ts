import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { VitalsService } from './vitals.service';
import { CreateVitalDto } from './dto/create-vital.dto';
import { UpdateVitalDto } from './dto/update-vital.dto';
import { Response } from 'express';

@Controller('vitals')
export class VitalsController {
  constructor(private readonly vitalsService: VitalsService) {}

  @Post()
  create(@Body() createVitalDto: CreateVitalDto) {
    return this.vitalsService.create(createVitalDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.vitalsService.findAll(res);
  }

  @Get(':vitalId')
  findOne(@Param('vitalId') vitalId: number, @Res() res: Response) {
    return this.vitalsService.findOne(+vitalId, res);
  }

  @Patch(':vitalId')
  update(
    @Param('vitalId') vitalId: number,
    @Body() updateVitalDto: UpdateVitalDto,
    @Res() res: Response,
  ) {
    return this.vitalsService.update(+vitalId, updateVitalDto, res);
  }

  @Delete(':vitalId')
  delete(@Param('vitalId') vitalId: number, @Res() res: Response) {
    return this.vitalsService.delete(+vitalId, res);
  }
}
