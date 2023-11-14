import { PartialType } from '@nestjs/mapped-types';
import { CreatePateintDto } from './create-patient.dto';

export class UpdatePateintDto extends PartialType(CreatePateintDto) {}
