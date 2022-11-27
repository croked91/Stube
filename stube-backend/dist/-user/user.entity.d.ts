import { SubscriptionEntity } from './subscription.entity';
import { VideoEntity } from "../video/video.entity";
import { Base } from "../utils/base";
export declare class UserEntity extends Base {
    email: string;
    password: string;
    name: string;
    isVerified: boolean;
    subscribersCount: number;
    description: string;
    subscriptions: SubscriptionEntity[];
    subscribers: SubscriptionEntity[];
    avatarPath: string;
    videos: VideoEntity[];
}
