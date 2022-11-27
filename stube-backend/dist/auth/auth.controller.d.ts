import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
    register(dto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
}
