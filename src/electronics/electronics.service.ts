import { Injectable } from '@nestjs/common';
import { CreateElectronicDto } from './dto/create-electronic.dto';
import { UpdateElectronicDto } from './dto/update-electronic.dto';

@Injectable()
export class ElectronicsService {
  create(createElectronicDto: CreateElectronicDto) {
    return 'This action adds a new electronic';
  }

  findAll() {
    return `This action returns all electronics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} electronic`;
  }

  update(id: number, updateElectronicDto: UpdateElectronicDto) {
    return `This action updates a #${id} electronic`;
  }

  remove(id: number) {
    return `This action removes a #${id} electronic`;
  }
}
