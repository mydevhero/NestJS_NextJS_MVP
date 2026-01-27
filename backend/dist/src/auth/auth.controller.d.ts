import { AuthService } from './auth.service';
import { LoginRequestDTO } from './dto/login-request.dto';
import { LoginResponseDTO } from './dto/login-response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDTO: LoginRequestDTO): Promise<LoginResponseDTO>;
}
