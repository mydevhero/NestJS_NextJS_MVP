// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';

export class QuizListResponseDTO {
  @ApiProperty({
    description: 'ID del quiz',
    example: 1
  })
  id!: number;

  @ApiProperty({
    description: 'Domanda del quiz',
    example: 'Quanto fa 2+2?'
  })
  question!: string;

  @ApiProperty({
    description: 'Opzioni di risposta',
    example: ['3', '4', '5', '6'],
    type: [String]
  })
  options!: string[];

  @ApiProperty({
    description: 'Indica se l\'utente ha già risposto a questo quiz',
    example: false
  })
  completed!: boolean;
}
