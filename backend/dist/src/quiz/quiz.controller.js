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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const quiz_service_1 = require("./quiz.service");
const quiz_list_param_dto_1 = require("./dto/quiz-list-param.dto");
const quiz_list_response_dto_1 = require("./dto/quiz-list-response.dto");
const quiz_leaderboard_response_dto_1 = require("./dto/quiz-leaderboard-response.dto");
const quiz_detail_param_dto_1 = require("./dto/quiz-detail-param.dto");
const quiz_detail_response_dto_1 = require("./dto/quiz-detail-response.dto");
const quiz_answer_param_dto_1 = require("./dto/quiz-answer-param.dto");
const quiz_answer_response_dto_1 = require("./dto/quiz-answer-response.dto");
let QuizController = class QuizController {
    quizService;
    constructor(quizService) {
        this.quizService = quizService;
    }
    findAll(query) {
        return this.quizService.findAll(query.userId);
    }
    getLeaderboard() {
        return this.quizService.getLeaderboard();
    }
    getPublicDetail(params) {
        return this.quizService.getPublicDetail(params.id);
    }
    submitAnswer(id, dto) {
        return this.quizService.submitAnswer(id, dto);
    }
};
exports.QuizController = QuizController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Lista di tutti i quiz',
        description: 'Restituisce tutti i quiz. Opzionalmente filtra per vedere quali quiz un utente ha completato.'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista di quiz restituita con successo',
        type: [quiz_list_response_dto_1.QuizListResponseDTO]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quiz_list_param_dto_1.QuizListParamDTO]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('leaderboard'),
    (0, swagger_1.ApiOperation)({
        summary: 'Classifica pubblica',
        description: 'Restituisce la top 10 degli utenti con più risposte corrette'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Classifica restituita con successo',
        type: [quiz_leaderboard_response_dto_1.LeaderboardResponseDTO]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "getLeaderboard", null);
__decorate([
    (0, common_1.Get)(':id/public'),
    (0, swagger_1.ApiOperation)({
        summary: 'Dettaglio pubblico del quiz',
        description: 'Informazioni pubbliche sul quiz, inclusa la percentuale di successo'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Dettaglio quiz restituito',
        type: quiz_detail_response_dto_1.QuizDetailResponseDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Quiz non trovato'
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quiz_detail_param_dto_1.QuizDetailParamDTO]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "getPublicDetail", null);
__decorate([
    (0, common_1.Post)(':id/answer'),
    (0, swagger_1.ApiOperation)({
        summary: 'Invia una risposta al quiz',
        description: 'Registra la risposta di un utente a un quiz. Ritorna i dettagli della risposta creata.'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID del quiz',
        type: Number,
        example: 1,
        required: true
    }),
    (0, swagger_1.ApiBody)({
        type: quiz_answer_param_dto_1.QuizAnswerParamDTO,
        description: 'Dati della risposta'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Risposta registrata con successo',
        type: quiz_answer_response_dto_1.QuizAnswerResponseDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Dati non validi o utente ha già risposto'
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Quiz non trovato'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, quiz_answer_param_dto_1.QuizAnswerParamDTO]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "submitAnswer", null);
exports.QuizController = QuizController = __decorate([
    (0, swagger_1.ApiTags)('quiz'),
    (0, common_1.Controller)('quiz'),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
//# sourceMappingURL=quiz.controller.js.map