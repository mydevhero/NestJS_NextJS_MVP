// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';

export class QuizDetailResponseDTO {
  @ApiProperty({
    description: 'Domanda del quiz',
    example: 'Quanto fa 2+2?'
  })
  question!: string;

  @ApiProperty({
    description: 'Spiegazione della risposta corretta',
    example: '2+2 fa 4 perché...'
  })
  explanation!: string;

  @ApiProperty({
    description: 'Percentuale di successo tra tutti gli utenti',
    example: '65%'
  })
  successRate!: string;
}
