// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';

// Tipo per le statistiche
export class UserStatsDTO {
  @ApiProperty({
    description: 'Numero totale di risposte date',
    example: 5
  })
  answers: number = 0;
}

export class LeaderboardResponseDTO {
  @ApiProperty({
    description: 'Nickname dell\'utente',
    example: 'alice123'
  })
  nickname!: string;

  @ApiProperty({
    description: 'Statistiche dell\'utente',
    type: UserStatsDTO,
    example: { answers: 5 }
  })
  _count!: UserStatsDTO;
}
