import { IsString, IsEmail } from 'class-validator'

export class VideoDto {
	@IsString()
	name?: string

	isPublic?: boolean

	@IsString()
	description?: string

	@IsString()
	videoPath?: string

	@IsString()
	thumbnailPath?: string
}
