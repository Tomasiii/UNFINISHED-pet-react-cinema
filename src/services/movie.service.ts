import { IMovie } from "@Types/movie.types";

import { instance } from "@api/interseptor";

import { getMoviesUrl } from "@configs/api.config";

export const MovieService = {
  async getAll(searchTerm?: string) {
    return instance.get<IMovie[]>(getMoviesUrl(""), {
      params: { searchTerm },
    });
  },
  async getMostPopularMovies() {
    const { data: movies } = await instance.get<IMovie[]>(
      getMoviesUrl("/most-popular")
    );
    return movies;
  },
};
