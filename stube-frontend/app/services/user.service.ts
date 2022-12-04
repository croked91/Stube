import { IUser } from 'types/user.interface'

import { axiosClassic } from './../api/axios'

export const USER = 'user'

export const UserService = {
	async getAll() {
		return axiosClassic<IUser[]>(`${USER}`)
	},
	async getUser(id: number) {
		return axiosClassic<IUser>(`${USER}/by-id/${id}`)
	}
}
