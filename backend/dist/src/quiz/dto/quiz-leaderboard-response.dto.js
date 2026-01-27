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
exports.LeaderboardResponseDTO = exports.UserStatsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserStatsDTO {
    answers = 0;
}
exports.UserStatsDTO = UserStatsDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Numero totale di risposte date',
        example: 5
    }),
    __metadata("design:type", Number)
], UserStatsDTO.prototype, "answers", void 0);
class LeaderboardResponseDTO {
    nickname;
    _count;
}
exports.LeaderboardResponseDTO = LeaderboardResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nickname dell\'utente',
        example: 'alice123'
    }),
    __metadata("design:type", String)
], LeaderboardResponseDTO.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Statistiche dell\'utente',
        type: UserStatsDTO,
        example: { answers: 5 }
    }),
    __metadata("design:type", UserStatsDTO)
], LeaderboardResponseDTO.prototype, "_count", void 0);
//# sourceMappingURL=quiz-leaderboard-response.dto.js.map