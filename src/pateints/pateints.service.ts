import { Injectable } from '@nestjs/common';
import { CreatePateintDto } from './dto/create-pateint.dto';
import { UpdatePateintDto } from './dto/update-pateint.dto';

@Injectable()
export class PateintsService {
  create(createPateintDto: CreatePateintDto) {
    return 'This action adds a new pateint';
  }

  findAll() {
    return `This action returns all pateints`;
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
