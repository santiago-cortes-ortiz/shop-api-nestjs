import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsUrl,
  IsPositive,
} from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateProductDto {
  @IsString()
  readonly name?: string;
  @IsString()
  readonly description?: string;
  @IsNumber()
  @IsPositive()
  readonly price?: number;
  @IsNumber()
  @IsPositive()
  readonly stock?: number;
  @IsUrl()
  readonly image?: string;
}
