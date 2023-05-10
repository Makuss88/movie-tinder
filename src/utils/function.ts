import axios from "axios";
import { IMockMovieData } from "../mockData";
import { URL_WEBSITE } from "./const";

export const putData = async (
  // TODO, now we have error, because we don't have our DB
  movieData: IMockMovieData[],
  counter: number,
  recommendationsPath: string
): Promise<void> => {
  const idData: string = movieData[counter].id;
  axios
    .put(URL_WEBSITE + `recommendations/${idData}/${recommendationsPath}}`, {
      movieData,
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.error(err));
};
