import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClotheDocument = HydratedDocument<Clothe>;

@Schema()
export class Clothe {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  size: string;
  @Prop()
  price: number;
  @Prop()
  brand: string;
  @Prop()
  imageURl: string;
}

export const ClotheSchema = SchemaFactory.createForClass(Clothe);