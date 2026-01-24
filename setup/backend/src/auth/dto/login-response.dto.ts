// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'alice@example.com' })
  email: string;

  @ApiProperty({ example: 'Alice' })
  nickname: string;
}

/**
 * DTO per documentare gli errori (KO) in Swagger
 */
export class LoginErrorResponseDto {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({ example: 'Utente non trovato' })
  message: string;

  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}
