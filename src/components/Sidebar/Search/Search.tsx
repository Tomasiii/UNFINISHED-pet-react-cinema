import { ChangeEvent, FC, useState } from "react";
import { useQuery } from "react-query";

import SearchField from "@components/SearchField/SearchField";

import { MovieService } from "@services/movie.service";

import { useDebounce } from "@hooks/useDebounce";

import SearchList from "./SearchList/SearchList";
import styles from "./search.module.scss";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { isSuccess, data: popularMovies } = useQuery(
    ["search movie list", debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: ({ data }) => data,
      enabled: !!debouncedSearch,
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {isSuccess && <SearchList movies={popularMovies || []} />}
    </div>
  );
};

export default Search;
