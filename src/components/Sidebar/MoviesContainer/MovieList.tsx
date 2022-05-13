import { FC } from "react";
import { Link } from "react-router-dom";

import MovieItem from "./MovieItem";
import styles from "./MovieList.module.scss";
import { IMovieList } from "./movie.types";

const MovieList: FC<{ list: IMovieList }> = ({
  list: { link, movies, title },
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.heading}>{title}</div>
      {movies.map((movie) => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
      <Link to={link}>
        <span className={styles.button}>See more</span>
      </Link>
    </div>
  );
};

export default MovieList;
