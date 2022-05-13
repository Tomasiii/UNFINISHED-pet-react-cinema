import { IMovie } from "@Types/movie.types";
import { Link } from "react-router-dom";

import { SERVER_URL } from "@api/interseptor";

import styles from "./searchList.module.scss";

interface IProps {
  movies: IMovie[];
}

const SearchList = ({ movies }: IProps) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link key={movie._id} to={`/movie/${movie.slug}`}>
            <img
              src={`${SERVER_URL}${movie.poster || ""}`}
              alt={movie.poster}
              draggable={false}
            />
            <span>{movie.title}</span>
          </Link>
        ))
      ) : (
        <div className="text-white text-center my-4">Movies not found!</div>
      )}
    </div>
  );
};

export default SearchList;
