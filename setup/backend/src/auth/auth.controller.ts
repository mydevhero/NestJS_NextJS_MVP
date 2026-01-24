// Aggiunto dallo script init.sh

import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiOkResponse, ApiUnauthorizedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto, LoginErrorResponseDto } from './dto/login-response.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login semplificato' })
  @ApiOkResponse({
    description: 'Login effettuato con successo',
    type: LoginResponseDto
  })
  @ApiUnauthorizedResponse({
    description: 'Nickname non trovato',
    type: LoginErrorResponseDto
  })
  @ApiBadRequestResponse({
    description: 'Validazione fallita (es. nickname troppo corto)'
  })
  login(@Body() loginDto: LoginRequestDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto.nickname);
  }
}
