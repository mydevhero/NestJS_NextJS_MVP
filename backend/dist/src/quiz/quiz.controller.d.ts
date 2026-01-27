import { QuizService } from './quiz.service';
import { QuizListParamDTO } from './dto/quiz-list-param.dto';
import { QuizListResponseDTO } from './dto/quiz-list-response.dto';
import { LeaderboardResponseDTO } from './dto/quiz-leaderboard-response.dto';
import { QuizDetailParamDTO } from './dto/quiz-detail-param.dto';
import { QuizDetailResponseDTO } from './dto/quiz-detail-response.dto';
import { QuizAnswerParamDTO } from './dto/quiz-answer-param.dto';
import { QuizAnswerResponseDTO } from './dto/quiz-answer-response.dto';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    findAll(query: QuizListParamDTO): Promise<QuizListResponseDTO[]>;
    getLeaderboard(): Promise<LeaderboardResponseDTO[]>;
    getPublicDetail(params: QuizDetailParamDTO): Promise<QuizDetailResponseDTO>;
    submitAnswer(id: number, dto: QuizAnswerParamDTO): Promise<QuizAnswerResponseDTO>;
}
