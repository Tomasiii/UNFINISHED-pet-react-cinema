import { useQuery } from "react-query";

import { IMenuItem } from "@components/Navigation/Menu/menu.type";

import { GenreService } from "@services/genre.service";

import { getGenresUrl } from "@configs/api.config";

export const usePopularGenres = () => {
  return useQuery("popular genres movie", () => GenreService.getAll(), {
    select: ({ data }) =>
      data.slice(0, 4).map(
        (genre) =>
          ({
            icon: genre.icon,
            link: getGenresUrl(genre.slug),
            title: genre.name,
          } as IMenuItem)
      ),
  });
};
