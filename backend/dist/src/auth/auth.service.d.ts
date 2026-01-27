export declare class AuthService {
    login(nickname: string): Promise<{
        id: number;
        email: string;
        nickname: string;
    }>;
}
