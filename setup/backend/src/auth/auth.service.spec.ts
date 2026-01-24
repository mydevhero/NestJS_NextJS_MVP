// Aggiunto dallo script init.sh

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { prisma } from '../../lib/prisma';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;

  // Mock dell'oggetto Prisma
  const mockPrisma = {
    user: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: prisma, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<prisma>(prisma);
  });

  it('dovrebbe restituire un utente se il nickname esiste', async () => {
    const mockUser = { id: 1, nickname: 'Alice', email: 'alice@test.com' };
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

    const result = await service.login('Alice');
    expect(result).toEqual(mockUser);
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { nickname: 'Alice' } });
  });

  it('dovrebbe lanciare UnauthorizedException se l\'utente non esiste', async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

    await expect(service.login('Sconosciuto')).rejects.toThrow(UnauthorizedException);
  });
});
