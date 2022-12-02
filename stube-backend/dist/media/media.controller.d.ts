/// <reference types="multer" />
import { MediaService } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadMediaFile(media: Express.Multer.File, folder?: string): Promise<IMediaResponse>;
}
