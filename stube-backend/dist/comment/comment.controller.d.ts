import { CommentDto } from './comment.dto';
import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(id: string, dto: CommentDto): Promise<import("./comment.entity").CommentEntity>;
}
