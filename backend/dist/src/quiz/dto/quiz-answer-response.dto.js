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
exports.QuizAnswerResponseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class QuizAnswerResponseDTO {
    id;
    userId;
    quizId;
    isCorrect;
    createdAt;
    explanation;
}
exports.QuizAnswerResponseDTO = QuizAnswerResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID della risposta creata',
        example: 456
    }),
    __metadata("design:type", Number)
], QuizAnswerResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID dell\'utente che ha risposto',
        example: 123
    }),
    __metadata("design:type", Number)
], QuizAnswerResponseDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del quiz a cui si è risposto',
        example: 1
    }),
    __metadata("design:type", Number)
], QuizAnswerResponseDTO.prototype, "quizId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica se la risposta è corretta',
        example: true
    }),
    __metadata("design:type", Boolean)
], QuizAnswerResponseDTO.prototype, "isCorrect", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data e ora della risposta',
        example: '2024-01-23T10:30:00.000Z'
    }),
    __metadata("design:type", Date)
], QuizAnswerResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'La spiegazione del quiz, restituita solo dopo la risposta',
        example: '2+2 fa 4 per le proprietà dell\'aritmetica.'
    }),
    __metadata("design:type", String)
], QuizAnswerResponseDTO.prototype, "explanation", void 0);
//# sourceMappingURL=quiz-answer-response.dto.js.map