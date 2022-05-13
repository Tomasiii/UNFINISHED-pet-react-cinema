
import { getUsersUrl } from '@configs/api.config'
import {instance} from "@api/interseptor";

export const AdminService = {
	async getCountUsers() {
		return instance.get<number>(getUsersUrl('/count'))
	},
}
