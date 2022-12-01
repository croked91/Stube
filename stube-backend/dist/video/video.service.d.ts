import { VideoEntity } from './video.entity';
import { Repository } from 'typeorm';
import { VideoDto } from './video.dto';
export declare class VideoService {
    private readonly videoRepository;
    constructor(videoRepository: Repository<VideoEntity>);
    byId(id: number, isPublic?: boolean): Promise<VideoEntity>;
    update(id: number, dto: VideoDto): Promise<{
        name: string;
        isPublic: boolean;
        description?: string;
        videoPath?: string;
        thumbnailPath?: string;
        views?: number;
        likes?: number;
        duration?: number;
        user: import("../user/user.entity").UserEntity;
        comments: import("../comment/comment.entity").CommentEntity[];
        id: number;
        createdAt: Date;
        updateAt: Date;
    } & VideoEntity>;
    getAll(searchTerm?: string): Promise<VideoEntity[]>;
    getMostPoppularByViews(): Promise<VideoEntity[]>;
    create(userId: number): Promise<number>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    updateCountViews(id: number): Promise<VideoEntity>;
    updateReactions(id: number): Promise<VideoEntity>;
}
