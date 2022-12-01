import { AuthDto } from './auth.dto';
import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
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
    validdateUser(dto: AuthDto): Promise<UserEntity>;
    issueAccesToken(userId: number): Promise<string>;
    returnUserFields(user: UserEntity): {
        id: number;
        email: string;
    };
}
