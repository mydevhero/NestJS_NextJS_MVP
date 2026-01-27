export declare class QuizListResponseDTO {
    id: number;
    question: string;
    options: string[];
    completed: boolean;
    userSelection?: {
        selectedOption: number;
        isCorrect: boolean;
    };
    explanation?: string;
}
