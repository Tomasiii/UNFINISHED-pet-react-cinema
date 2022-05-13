import { IGenre } from "@Types/movie.types";

import { instance } from "@api/interseptor";

export const GenreService = {
  async getAll() {
    return instance.get<IGenre[]>("genres");
  },
};
