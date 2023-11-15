import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';
import { Response } from 'express';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  create(createPatientDto: CreatePatientDto) {
    return 'This action adds a new pateint';
  }

  async findAll(res: Response) {
    const patient = await this.patientRepository.find();
    if (patient.length !== 0) {
      return res.status(200).json(patient);
    }
    return res.status(404).json({ msg: 'patient not found.' });
  }

  async findOne(patientId: number, res: Response) {
    const patient = await this.patientRepository.findOneBy({ patientId });
    if (patient) {
      return res.status(200).json(patient);
    }
    return res.status(404).json({ msg: 'patient not found.' });
  }

  update(patientId: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${patientId} pateint`;
  }

  remove(patientId: number) {
    return `This action removes a #${patientId} pateint`;
  }
}
