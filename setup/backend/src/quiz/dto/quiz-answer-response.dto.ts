// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';

export class QuizAnswerResponseDTO {
  @ApiProperty({
    description: 'ID della risposta creata',
    example: 456
  })
  id!: number;

  @ApiProperty({
    description: 'ID dell\'utente che ha risposto',
    example: 123
  })
  userId!: number;

  @ApiProperty({
    description: 'ID del quiz a cui si è risposto',
    example: 1
  })
  quizId!: number;

  @ApiProperty({
    description: 'Indica se la risposta è corretta',
    example: true
  })
  isCorrect!: boolean;

  @ApiProperty({
    description: 'Data e ora della risposta',
    example: '2024-01-23T10:30:00.000Z'
  })
  createdAt!: Date;
}
