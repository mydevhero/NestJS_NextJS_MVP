"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Gestione RecruitingTest : API Quiz')
        .setDescription('Documentazione interattiva delle API per il progetto "Gestione Quiz Logici"')
        .setVersion('1.0')
        .addTag('quiz')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('NESTJS_PORT') || 3001;
    await app.listen(port);
    console.log(`Server in esecuzione su: http://localhost:%d`, port);
    console.log(`Documentazione API: http://localhost:%d/api/docs`, port);
}
bootstrap();
//# sourceMappingURL=main.js.map