import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PateintsService } from './pateints.service';
import { CreatePateintDto } from './dto/create-pateint.dto';
import { UpdatePateintDto } from './dto/update-pateint.dto';

@Controller('pateints')
export class PateintsController {
  constructor(private readonly pateintsService: PateintsService) {}

  @Post()
  create(@Body() createPateintDto: CreatePateintDto) {
    return this.pateintsService.create(createPateintDto);
  }

  @Get()
  findAll() {
    return this.pateintsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pateintsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePateintDto: UpdatePateintDto) {
    return this.pateintsService.update(+id, updatePateintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pateintsService.remove(+id);
  }
}
