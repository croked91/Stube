import { CommentEntity } from './../comment/comment.entity';
import { UserEntity } from '../user/user.entity';
import { Base } from '../utils/base';
export declare class VideoEntity extends Base {
    name: string;
    isPublic: boolean;
    views?: number;
    likes?: number;
    description?: string;
    duration?: number;
    videoPath?: string;
    thumbnailPath?: string;
    user: UserEntity;
    comments: CommentEntity[];
}
