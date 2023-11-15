import { Injectable } from '@nestjs/common';
import { CreateVitalDto } from './dto/create-vital.dto';
import { UpdateVitalDto } from './dto/update-vital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vital } from './entities/vital.entity';
import { Response } from 'express';
import { Patient } from 'src/patients/entities/patient.entity';

@Injectable()
export class VitalsService {
  constructor(
    @InjectRepository(Vital)
    private vitalRepository: Repository<Vital>,
  ) {}

  async create(createVitalDto: CreateVitalDto) {
    const {
      date,
      height,
      weight,
      bmi,
      generalHealth,
      takingDrugs,
      comments,
      patientId,
    } = createVitalDto;

    const newVital = this.vitalRepository.create({
      date: date,
      height: height,
      weight: weight,
      bmi: bmi,
      generalHealth: generalHealth,
      takingDrugs: takingDrugs,
      comments: comments,
      patientId: patientId,
    });
    return this.vitalRepository.save(newVital);
  }

  async findAll(res: Response) {
    const vital = await this.vitalRepository.find();
    if (vital.length !== 0) {
      return res.status(200).json(vital);
    }
    return res.status(404).json({ msg: 'vital not found' });
  }

  async findOne(vitalId: number, res: Response) {
    const vital = await this.vitalRepository.findOneBy({ vitalId });
    if (vital) {
      return res.status(200).json(vital);
    }
    return res.status(404).json({ msg: 'vital not found' });
  }

  async update(vitalId: number, updateVitalDto: UpdateVitalDto, res: Response) {
    const {
      date,
      height,
      weight,
      bmi,
      generalHealth,
      takingDrugs,
      comments,
      patientId,
    } = updateVitalDto;
    const vital = await this.vitalRepository.findOneBy({ vitalId });
    if (vital) {
      await this.vitalRepository.update(
        { vitalId: vitalId },
        {
          date: date,
          height: height,
          weight: weight,
          bmi: bmi,
          generalHealth: generalHealth,
          takingDrugs: takingDrugs,
          comments: comments,
          patientId: patientId,
        },
      );
      return res.status(200).json({
        msg: 'vital #${vitalId} updated succesfully',
      });
    }
    return res.status(404).json('Vital not found');
  }

  async delete(vitalId: number, res: Response) {
    const vital = await this.vitalRepository.findOneBy({ vitalId });
    if (vital) {
      return res.status(200).json({ msg: 'vital deleted successfully.' });
    }
    return res.status(404).json({ msg: 'vital not found.' });
  }
}
