import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Clothe, ClotheDocument } from './schema/clothe.schema';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';

@Injectable()
export class ClotheService {
  constructor(
    @InjectModel(Clothe.name) private ClotheModel: Model<ClotheDocument>,
  ) {}

  async create(createClotheDto: CreateClotheDto): Promise<Clothe> {
    const createClothe = new this.ClotheModel(createClotheDto);
    return createClothe.save()
  }

  findAll(): Promise <Clothe[]> {
    return this.ClotheModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} clothe`;
  }

  update(id: number, updateClotheDto: UpdateClotheDto) {
    return `This action updates a #${id} clothe`;
  }

  remove(id: number) {
    return `This action removes a #${id} clothe`;
  }
}
