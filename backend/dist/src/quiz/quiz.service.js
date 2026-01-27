"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../lib/prisma");
let QuizService = class QuizService {
    async findAll(userId) {
        const quizzes = await prisma_1.prisma.quiz.findMany({
            include: {
                answers: userId ? { where: { userId } } : false,
            },
        });
        return quizzes.map((q) => {
            const answer = q.answers?.[0];
            return {
                id: q.id,
                question: q.question,
                options: q.options,
                completed: !!answer,
                userSelection: answer
                    ? {
                        selectedOption: answer.selectedOption ?? 0,
                        isCorrect: answer.isCorrect,
                    }
                    : undefined,
                explanation: answer ? q.explanation : undefined,
            };
        });
    }
    async getPublicDetail(id) {
        const quiz = await prisma_1.prisma.quiz.findUnique({
            where: { id },
            include: { _count: { select: { answers: true } } },
        });
        if (!quiz)
            throw new common_1.NotFoundException('Quiz non trovato');
        const correctAnswers = await prisma_1.prisma.answer.count({
            where: { quizId: id, isCorrect: true },
        });
        const totalAnswers = quiz._count.answers;
        const successRate = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
        return {
            question: quiz.question,
            explanation: quiz.explanation,
            successRate: `${successRate}%`,
        };
    }
    async submitAnswer(quizId, dto) {
        const quiz = await prisma_1.prisma.quiz.findUnique({
            where: { id: quizId },
        });
        if (!quiz)
            throw new common_1.NotFoundException('Quiz non trovato');
        if (dto.answer < 0 || dto.answer >= quiz.options.length) {
            throw new common_1.BadRequestException('Indice risposta non valido');
        }
        const existing = await prisma_1.prisma.answer.findUnique({
            where: { userId_quizId: { userId: dto.userId, quizId } },
        });
        if (existing) {
            throw new common_1.BadRequestException('Hai già risposto a questo quiz');
        }
        const isCorrect = quiz.correctAnswer === dto.answer;
        const answer = await prisma_1.prisma.answer.create({
            data: {
                userId: dto.userId,
                quizId: quizId,
                isCorrect: isCorrect,
                selectedOption: dto.answer,
            },
        });
        return {
            id: answer.id,
            userId: answer.userId,
            quizId: answer.quizId,
            isCorrect: answer.isCorrect,
            createdAt: answer.createdAt,
            explanation: quiz.explanation,
        };
    }
    async getLeaderboard() {
        const users = await prisma_1.prisma.user.findMany({
            select: {
                nickname: true,
                _count: {
                    select: {
                        answers: { where: { isCorrect: true } },
                    },
                },
            },
            orderBy: {
                answers: { _count: 'desc' },
            },
            take: 10,
        });
        return users.map((user) => ({
            nickname: user.nickname,
            _count: {
                answers: user._count.answers,
            },
        }));
    }
};
exports.QuizService = QuizService;
exports.QuizService = QuizService = __decorate([
    (0, common_1.Injectable)()
], QuizService);
//# sourceMappingURL=quiz.service.js.map