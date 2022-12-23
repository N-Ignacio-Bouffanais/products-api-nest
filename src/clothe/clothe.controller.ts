import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClotheService } from './clothe.service';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Clothes')
@Controller('clothe')
export class ClotheController {
  constructor(private readonly clotheService: ClotheService) {}

  @Post()
  create(@Body() createClotheDto: CreateClotheDto) {
    return this.clotheService.create(createClotheDto);
  }

  @Get()
  findAll() {
    return this.clotheService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clotheService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClotheDto: UpdateClotheDto) {
    return this.clotheService.update(+id, updateClotheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clotheService.remove(+id);
  }
}
