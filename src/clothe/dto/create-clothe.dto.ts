import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class CreateClotheDto {
  @IsNotEmpty()
  @Length(6, 30)
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  size: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  brand: string;
  @IsNotEmpty()
  imageURl: string;
}
