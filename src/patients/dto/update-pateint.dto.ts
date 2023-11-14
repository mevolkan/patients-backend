import { PartialType } from '@nestjs/mapped-types';
import { CreatePateintDto } from './create-pateint.dto';

export class UpdatePateintDto extends PartialType(CreatePateintDto) {}
