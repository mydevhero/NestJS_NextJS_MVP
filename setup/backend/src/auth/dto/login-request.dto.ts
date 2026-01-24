// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    example: 'Alice',
    description: 'Il nickname univoco dell\'utente'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nickname: string;
}
