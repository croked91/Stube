import { axiosClassic } from 'api/axios'

import { IVideo } from './../types/video.interface'

export const VIDEO = 'video'

export const VideoService = {
	async getAll() {
		return axiosClassic<IVideo[]>(`${VIDEO}`)
	},
	async getMostPopular() {
		return axiosClassic<IVideo>(`${VIDEO}/most-popular`)
	}
}
