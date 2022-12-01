import { VideoDto } from './video.dto';
import { VideoService } from './video.service';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    getVideoPrivate(id: string): Promise<import("./video.entity").VideoEntity>;
    getAll(searchTerm?: string): Promise<import("./video.entity").VideoEntity[]>;
    getMostPoppularByViews(): Promise<import("./video.entity").VideoEntity[]>;
    getVideo(id: string): Promise<import("./video.entity").VideoEntity>;
    createVideo(id: number): Promise<number>;
    updateVideo(id: string, dto: VideoDto): Promise<{
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
    } & import("./video.entity").VideoEntity>;
    deleteVideo(id: string): Promise<number>;
    updateViews(videoId: string): Promise<import("./video.entity").VideoEntity>;
}
