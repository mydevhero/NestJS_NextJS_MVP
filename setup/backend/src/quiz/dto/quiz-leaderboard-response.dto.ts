// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';

export class LeaderboardResponseDTO {
  @ApiProperty({
    description: 'Nickname dell\'utente',
    example: 'alice123'
  })
  nickname: string;

  @ApiProperty({
    description: 'Statistiche dell\'utente',
    example: { correctAnswers: 5 }
  })
  _count: {
    answers: number;
  };
}
