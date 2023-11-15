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
  findOne(@Param('patientId') patientId: string) {
    return this.patientsService.findOne(+patientId);
  }

  @Patch(':patientId')
  update(
    @Param('patientId') patientId: string,
    @Body() updatePateintDto: UpdatePatientDto,
  ) {
    return this.patientsService.update(+patientId, updatePateintDto);
  }

  @Delete(':patientId')
  remove(@Param('patientId') patientId: string) {
    return this.patientsService.remove(+patientId);
  }
}
