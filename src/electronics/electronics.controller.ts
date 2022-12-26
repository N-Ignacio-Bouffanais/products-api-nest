import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElectronicsService } from './electronics.service';
import { CreateElectronicDto } from './dto/create-electronic.dto';
import { UpdateElectronicDto } from './dto/update-electronic.dto';

@Controller('electronics')
export class ElectronicsController {
  constructor(private readonly electronicsService: ElectronicsService) {}

  @Post()
  create(@Body() createElectronicDto: CreateElectronicDto) {
    return this.electronicsService.create(createElectronicDto);
  }

  @Get()
  findAll() {
    return this.electronicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.electronicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElectronicDto: UpdateElectronicDto) {
    return this.electronicsService.update(+id, updateElectronicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.electronicsService.remove(+id);
  }
}
