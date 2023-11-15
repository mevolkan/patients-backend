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

  async create(createPatientDto: CreatePatientDto) {
    const { firstName, lastName, dob, gender } = createPatientDto;
    const newPatient = this.patientRepository.create({
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
    });
    return this.patientRepository.save(newPatient);
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

  async findReport(patientId: number, res: Response) {
    const patient = await this.patientRepository.findOneBy({ patientId });
    if (patient) {
      return res.status(200).json(patient);
    }
    return res.status(404).json({ msg: 'patient not found.' });
  }


  async update(
    patientId: number,
    updatePatientDto: UpdatePatientDto,
    res: Response,
  ) {
    const { firstName, lastName, dob, gender } = updatePatientDto;
    const patient = await this.patientRepository.findOneBy({ patientId });
    if (patient) {
      await this.patientRepository.update(
        { patientId: patientId },
        {
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          gender: gender,
        },
      );
      return res.status(200).json({
        msg: 'patient #${patientId} #${firstName} updated successfully.',
      });
    }
    return res.status(404).json({ msg: 'patient not found.' });
  }

  async remove(patientId: number, res: Response) {
    const patient = await this.patientRepository.findOneBy({ patientId });
    if (patient) {
      await this.patientRepository.remove(patient);
      return res.status(200).json({ msg: 'patient removed successfully.' });
    }
    return res.status(404).json({ msg: 'patient not found.' });
  }

  async delete(patientId: number, res: Response) {
    const patient = await this.patientRepository.findOneBy({ patientId });
    if (patient) {
      await this.patientRepository.delete(patient);
      return res.status(200).json({ msg: 'patient deleted successfully.' });
    }
    return res.status(404).json({ msg: 'patient not found.' });
  }
}
