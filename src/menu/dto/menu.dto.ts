import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsString,
} from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  photo: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
