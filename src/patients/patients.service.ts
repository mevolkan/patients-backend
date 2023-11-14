import { Injectable } from '@nestjs/common';
import { CreatePateintDto } from './dto/create-patient.dto';
import { UpdatePateintDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  create(createPateintDto: CreatePateintDto) {
    return 'This action adds a new pateint';
  }

  findAll() {
    return `This action returns all patients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pateint`;
  }

  update(id: number, updatePateintDto: UpdatePateintDto) {
    return `This action updates a #${id} pateint`;
  }

  remove(id: number) {
    return `This action removes a #${id} pateint`;
  }
}
