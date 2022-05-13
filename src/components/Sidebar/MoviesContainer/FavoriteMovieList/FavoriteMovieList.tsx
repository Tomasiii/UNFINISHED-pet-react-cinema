import { useQuery } from "react-query";

import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

import { MovieService } from "@services/movie.service";

import isAuth from "@utils/isAuth";

import MovieList from "../MovieList";

import NotAuthFavorites from "./NotAuthFavorites";

const FavoriteMovieList = () => {
  const { isLoading, data: favoritesMovies } = useQuery(
    "get favorite movies list (5849)",
    () => MovieService.getMostPopularMovies(),
    {
      select: (data) => data.slice(0, 3),
    }
  );
  const user = isAuth();

  if (!user) return <NotAuthFavorites />;

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MovieList
      list={{
        link: "/favorites",
        movies: favoritesMovies?.slice(0, 3) || [],
        title: "Favorites",
      }}
    />
  );
};

export default FavoriteMovieList;
