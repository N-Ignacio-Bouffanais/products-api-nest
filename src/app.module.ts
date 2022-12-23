import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClotheModule } from './clothe/clothe.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClotheModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/products'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
