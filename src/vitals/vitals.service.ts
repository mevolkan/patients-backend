import { Injectable } from '@nestjs/common';
import { CreateVitalDto } from './dto/create-vital.dto';
import { UpdateVitalDto } from './dto/update-vital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vital } from './entities/vital.entity';
import { Response } from '@nestjs/common';

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
      // patientId: patientId,
    });
    return this.vitalRepository.save(newVital);
  }

  findAll() {
    return `This action returns all vitals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vital`;
  }

  update(id: number, updateVitalDto: UpdateVitalDto) {
    return `This action updates a #${id} vital`;
  }

  delete(id: number) {
    return `This action deletes a #${id} vital`;
  }
}
