import { PartialType } from '@nestjs/swagger';
import { CreateElectronicDto } from './create-electronic.dto';

export class UpdateElectronicDto extends PartialType(CreateElectronicDto) {}
