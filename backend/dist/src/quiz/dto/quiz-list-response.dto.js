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
exports.QuizListResponseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class QuizListResponseDTO {
    id;
    question;
    options;
    completed;
    userSelection;
    explanation;
}
exports.QuizListResponseDTO = QuizListResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del quiz',
        example: 1
    }),
    __metadata("design:type", Number)
], QuizListResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Domanda del quiz',
        example: 'Quanto fa 2+2?'
    }),
    __metadata("design:type", String)
], QuizListResponseDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Opzioni di risposta',
        example: ['3', '4', '5', '6'],
        type: [String]
    }),
    __metadata("design:type", Array)
], QuizListResponseDTO.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica se l\'utente ha già risposto a questo quiz',
        example: false
    }),
    __metadata("design:type", Boolean)
], QuizListResponseDTO.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Dettagli della risposta data dall\'utente'
    }),
    __metadata("design:type", Object)
], QuizListResponseDTO.prototype, "userSelection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Spiegazione del quiz (mostrata solo se completato)' }),
    __metadata("design:type", String)
], QuizListResponseDTO.prototype, "explanation", void 0);
//# sourceMappingURL=quiz-list-response.dto.js.map