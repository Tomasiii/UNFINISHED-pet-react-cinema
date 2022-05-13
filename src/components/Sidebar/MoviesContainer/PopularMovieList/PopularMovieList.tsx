import { useQuery } from "react-query";

import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

import { MovieService } from "@services/movie.service";

import MovieList from "../MovieList";

const PopularMovieList = () => {
  const { isLoading, data: popularMovies } = useQuery(
    "Most popular movie in sidebar",
    () => MovieService.getMostPopularMovies(),
    {
      select: (data) => data.slice(0, 3),
    }
  );

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MovieList
      list={{
        link: "/trending",
        movies: popularMovies || [],
        title: "Popular movies",
      }}
    />
  );
};

export default PopularMovieList;
