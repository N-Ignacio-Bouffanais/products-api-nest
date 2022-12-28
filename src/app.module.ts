import { Module } from '@nestjs/common';
import { ClotheModule } from './clothe/clothe.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectronicsModule } from './electronics/electronics.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ClotheModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/products'),
    ElectronicsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
