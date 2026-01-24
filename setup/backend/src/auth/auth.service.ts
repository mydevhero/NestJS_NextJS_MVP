// Aggiunto dallo script init.sh

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { prisma } from '../../lib/prisma';

@Injectable()
// Aggiunto dallo script init.sh

export class AuthService {
  async login(nickname: string) {
    const user = await prisma.user.findUnique({
      where: { nickname },
    });

    if (!user) {
      throw new UnauthorizedException('Utente non trovato. Usa Alice, Bob o Charlie.');
    }

    // In un sistema reale qui genereremmo un JWT.
    // Per questo test, restituiamo i dati utente per la sessione frontend.
    return user;
  }
}
