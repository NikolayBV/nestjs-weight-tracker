/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsString, MinLength, IsInt, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmail(undefined, { message: 'Неверный формат email' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Пароль должен быть минимум 6 символов' })
  password: string;

  @IsInt({ message: 'Возраст должен быть целым числом' })
  @Min(1, { message: 'Возраст должен быть больше 0' })
  age: number;

  @IsInt({ message: 'Рост должен быть целым числом' })
  @Min(1, { message: 'Рост должен быть больше 0' })
  height: number;
}
