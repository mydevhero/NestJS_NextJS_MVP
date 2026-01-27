"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginErrorResponseDTO = exports.LoginResponseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginResponseDTO {
    id;
    email;
    nickname;
}
exports.LoginResponseDTO = LoginResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID univoco dell\'utente' }),
    __metadata("design:type", Number)
], LoginResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'alice@example.com', description: 'Email dell\'utente' }),
    __metadata("design:type", String)
], LoginResponseDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alice', description: 'Nickname dell\'utente' }),
    __metadata("design:type", String)
], LoginResponseDTO.prototype, "nickname", void 0);
class LoginErrorResponseDTO {
    statusCode;
    message;
    error;
}
exports.LoginErrorResponseDTO = LoginErrorResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401, description: 'Codice di stato HTTP' }),
    __metadata("design:type", Number)
], LoginErrorResponseDTO.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Utente non trovato', description: 'Messaggio di errore' }),
    __metadata("design:type", String)
], LoginErrorResponseDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unauthorized', description: 'Tipo di errore' }),
    __metadata("design:type", String)
], LoginErrorResponseDTO.prototype, "error", void 0);
//# sourceMappingURL=login-response.dto.js.map