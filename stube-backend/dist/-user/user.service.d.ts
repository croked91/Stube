import { SubscriptionEntity } from './subscription.entity';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';
export declare class UserService {
    private readonly userRepository;
    private readonly subscriptionRepository;
    constructor(userRepository: Repository<UserEntity>, subscriptionRepository: Repository<SubscriptionEntity>);
    byId(id: number): Promise<UserEntity>;
    updateProfile(id: number, dto: UserDto): Promise<UserEntity>;
    subscribe(channelId: number, id: number): Promise<boolean>;
    getAll(): Promise<UserEntity[]>;
}
