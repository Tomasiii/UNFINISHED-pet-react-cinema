import { usePopularGenres } from "@components/Navigation/GenreMenu/usePopularGenres";
import Menu from "@components/Navigation/Menu/Menu";
import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

const GenreMenu = () => {
  const { isLoading, data } = usePopularGenres();

  return isLoading ? (
    <SkeletonLoader count={4} style={{ marginTop: 7, height: "1.75rem" }} />
  ) : (
    <Menu data={{ title: "Popular genres", items: data || [] }} />
  );
};

export default GenreMenu;
