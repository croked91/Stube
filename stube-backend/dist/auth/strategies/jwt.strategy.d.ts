import { UserEntity } from './../../-user/user.entity';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userRepository;
    constructor(configService: ConfigService, userRepository: Repository<UserEntity>);
    validate({ id }: Pick<UserEntity, 'id'>): Promise<UserEntity[]>;
}
export {};
