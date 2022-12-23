import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClotheService } from './clothe.service';
import { ClotheController } from './clothe.controller';
import { Clothe, ClotheSchema } from './schema/clothe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clothe.name, schema: ClotheSchema }]),
  ],
  controllers: [ClotheController],
  providers: [ClotheService],
})
export class ClotheModule {}
