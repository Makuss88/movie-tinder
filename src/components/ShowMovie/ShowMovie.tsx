import { Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { mockMovieData } from "../../mockData";
import { actionCreators } from "../../store";
import { MOVIE_TYPE } from "../../store/movieAction/const";
import { putData } from "../../utils/function";
import { icons } from "../../utils/icons";
import { MainButton } from "../UI/Buttons/MainButton/MainButton";
import { MovieList } from "./MovieList/MovieList";
import { NoMovies } from "./NoMovies/NoMovies";

export const ShowMovie = () => {
  const [movieCounter, setMovieCounter] = useState<number>(0);

  const dispatch = useDispatch();
  const { acceptAction, rejectAction } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const putDataHandler = useCallback(
    (getInfo: string) => {
      switch (getInfo) {
        case MOVIE_TYPE.ACCEPT:
          acceptAction(mockMovieData[movieCounter].title);
          putData(mockMovieData, movieCounter, MOVIE_TYPE.ACCEPT);
          break;
        case MOVIE_TYPE.REJECT:
          rejectAction(mockMovieData[movieCounter].title);
          putData(mockMovieData, movieCounter, MOVIE_TYPE.REJECT);
          break;
        default:
      }
      setMovieCounter(movieCounter + 1);
    },
    [acceptAction, movieCounter, rejectAction]
  );

  return (
    <>
      {movieCounter !== mockMovieData.length ? (
        <>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <MovieList
              mockMovieData={mockMovieData}
              movieCounter={movieCounter}
            />
            <Grid container justifyContent="center" alignContent="cenetr">
              <Grid item>
                <MainButton
                  label={icons.rejectIcon}
                  onClick={() => putDataHandler(MOVIE_TYPE.REJECT)}
                />
              </Grid>
              <Grid item>
                <MainButton
                  label={icons.acceptIcon}
                  onClick={() => putDataHandler(MOVIE_TYPE.ACCEPT)}
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <NoMovies />
      )}
    </>
  );
};
