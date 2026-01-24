// Aggiunto dallo script init.sh

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class QuizDetailParamDTO {
  @ApiProperty({
    description: 'ID del quiz',
    example: 1,
    type: Number,
    required: true
  })
  @IsInt()
  @Min(1)
  id: number;
}
