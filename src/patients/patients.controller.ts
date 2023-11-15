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
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Response } from 'express';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() createPateintDto: CreatePatientDto) {
    return this.patientsService.create(createPateintDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.patientsService.findAll(res);
  }

  @Get(':patientId')
  findOne(@Param('patientId') patientId: number, @Res() res: Response) {
    return this.patientsService.findOne(+patientId, res);
  }

  @Patch(':patientId')
  update(
    @Param('patientId') patientId: number,
    @Body() updatePateintDto: UpdatePatientDto,
    @Res() res: Response,
  ) {
    return this.patientsService.update(+patientId, updatePateintDto, res);
  }

  @Delete(':patientId')
  remove(@Param('patientId') patientId: number) {
    return this.patientsService.remove(+patientId);
  }
}
