// Aggiunto dallo script init.sh

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Abilitiamo CORS per permettere al frontend (Next.js)
   * di effettuare chiamate verso questo server.
   */
  app.enableCors();

  /**
   * ValidationPipe permette di validare automaticamente i DTO
   * in ingresso usando i decoratori di class-validator.
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // Rimuove proprietà non definite
      forbidNonWhitelisted: true, // Lancia errore per proprietà extra
      transform: true,            // Trasforma tipi (string → number, etc.)
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Configurazione Swagger per la documentazione delle API
  const config = new DocumentBuilder()
    .setTitle('Gestione RecruitingTest : API Quiz')
    .setDescription('Documentazione interattiva delle API per il progetto "Gestione Quiz Logici"')
    .setVersion('1.0')
    .addTag('quiz')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Swagger sarà accessibile all'indirizzo http://localhost:3000/api/docs
  SwaggerModule.setup('api/docs', app, document);

  // Avviamo il server sulla porta 3000
  await app.listen(3000);

  console.log(`🚀 Server in esecuzione su: http://localhost:3000`);
  console.log(`📖 Documentazione API: http://localhost:3000/api/docs`);
}

bootstrap();

// vim: set tabstop=2 shiftwidth=2 expandtab colorcolumn=121 :
