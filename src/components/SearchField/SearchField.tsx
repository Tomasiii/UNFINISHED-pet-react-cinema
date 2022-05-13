import { ChangeEvent, FC } from "react";

import MaterialIcon from "@components/Icon/MaterialIcon";

import styles from "./searchField.module.scss";

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon icon="MdSearch" />
      <input placeholder="Search" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default SearchField;
