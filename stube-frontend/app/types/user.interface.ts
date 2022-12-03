import { IBase } from './base.interface'
import { IVideo } from './video.interface'

export interface IUser extends IBase {
	email: string
	name: string
	isVerified: boolean
	subscribersCount: number
	description: string
	subscriptions: ISubscription[]
	avatarPath: string
	videos: IVideo[]
}

export interface ISubscription extends IBase {
	toChannel: IUser
}
