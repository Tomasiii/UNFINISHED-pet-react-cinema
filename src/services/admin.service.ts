import { instance } from "@api/interseptor";

import { getUsersUrl } from "@configs/api.config";

export const AdminService = {
  async getCountUsers() {
    return instance.get<number>(getUsersUrl("/count"));
  },
};
