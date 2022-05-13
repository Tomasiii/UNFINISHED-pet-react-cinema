import { Link } from "react-router-dom";

import MaterialIcon from "@components/Icon/MaterialIcon";

import { getGenresListEach } from "@utils/movie/getGenresList";

import { getGenreUrl, getMovieUrl } from "@configs/url.config";

import styles from "./MovieList.module.scss";
import { IWidgetMovie } from "./movie.types";

const MovieItem = ({ movie }: { movie: IWidgetMovie }) => {
  return (
    <div className={styles.item}>
      <Link to={getMovieUrl(movie.slug)}>
        <img
          alt={movie.title}
          width={65}
          height={97}
          src={movie.poster}
          draggable={false}
        />
      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genres}>
            {movie.genres.map(({ slug, name, _id }, idx) => (
              <Link key={_id} to={getGenreUrl(slug)}>
                <a>{getGenresListEach(idx, movie.genres.length, name)}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rating}>
          <MaterialIcon icon="MdStarRate" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
