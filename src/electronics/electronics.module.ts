import { Module } from '@nestjs/common';
import { ElectronicsService } from './electronics.service';
import { ElectronicsController } from './electronics.controller';

@Module({
  controllers: [ElectronicsController],
  providers: [ElectronicsService]
})
export class ElectronicsModule {}
