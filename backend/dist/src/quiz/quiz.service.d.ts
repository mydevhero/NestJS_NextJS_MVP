import { QuizListResponseDTO } from './dto/quiz-list-response.dto';
import { QuizDetailResponseDTO } from './dto/quiz-detail-response.dto';
import { QuizAnswerResponseDTO } from './dto/quiz-answer-response.dto';
import { LeaderboardResponseDTO } from './dto/quiz-leaderboard-response.dto';
import { QuizAnswerParamDTO } from './dto/quiz-answer-param.dto';
export declare class QuizService {
    findAll(userId?: number): Promise<QuizListResponseDTO[]>;
    getPublicDetail(id: number): Promise<QuizDetailResponseDTO>;
    submitAnswer(quizId: number, dto: QuizAnswerParamDTO): Promise<QuizAnswerResponseDTO>;
    getLeaderboard(): Promise<LeaderboardResponseDTO[]>;
}
