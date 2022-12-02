import { IsNumber, IsString } from 'class-validator'

export class CommentDto {
	videoId: number

	userId: number

	@IsString()
	message?: string
}
