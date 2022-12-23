import { PartialType } from '@nestjs/mapped-types';
import { CreateClotheDto } from './create-clothe.dto';

export class UpdateClotheDto extends PartialType(CreateClotheDto) {}
