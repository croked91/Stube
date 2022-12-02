import { VideoEntity } from './../video/video.entity';
import { UserEntity } from '../user/user.entity';
import { Base } from '../utils/base';
export declare class CommentEntity extends Base {
    message: string;
    user: UserEntity;
    video: VideoEntity;
}
