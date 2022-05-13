import MoviesContainer from "@components/Sidebar/MoviesContainer/MoviesContainer";

import Search from "./Search/Search";

const Sidebar = () => {
  return (
    <div>
      <Search />
      <MoviesContainer />
    </div>
  );
};

export default Sidebar;
