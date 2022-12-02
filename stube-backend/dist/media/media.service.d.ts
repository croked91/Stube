/// <reference types="multer" />
export declare class MediaService {
    saveMedia(mediaFile: Express.Multer.File, folder?: string): Promise<IMediaResponse>;
}
