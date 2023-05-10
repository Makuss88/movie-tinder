import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useIsSmSize } from "../../hooks/useMediaQuery";
import { mockMovieData } from "../../mockData";
import { actionCreators } from "../../store";
import { MOVIE_TYPE } from "../../store/movieAction/const";
import { putData } from "../../utils/function";
import { icons } from "../../utils/icons";
import { typography } from "../../utils/theme";
import { NoMovies } from "../NoMovies/NoMovies";
import { MainButton } from "../UI/Buttons/MainButton/MainButton";

export const ShowMovie = () => {
  const [movieCounter, setMovieCounter] = useState<number>(0);

  const smMedia = useIsSmSize();

  const dispatch = useDispatch();
  const { acceptAction, rejectAction } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const putDataHandler = (getInfo: string): void => {
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
        return;
    }
    setMovieCounter(movieCounter + 1);
  };

  return (
    <>
      {movieCounter === mockMovieData.length - 1 ? (
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            textAlign="center"
          >
            <Typography
              style={
                smMedia
                  ? { ...typography.heading4 }
                  : { ...typography.heading2 }
              }
            >
              {mockMovieData[movieCounter].title} (
              {mockMovieData[movieCounter].rating} / 10)
            </Typography>
          </Grid>
          <Grid item marginY="16px">
            <img
              src={mockMovieData[movieCounter].imageURL}
              alt="img"
              style={smMedia ? { height: 200 } : { height: 400 }}
            />
          </Grid>
          <Grid container justifyContent="center" alignContent="cenetr">
            <Grid item>
              <MainButton
                label={icons.rejectIcon}
                onClick={() => putDataHandler("reject")}
              />
            </Grid>
            <Grid item>
              <MainButton
                label={icons.acceptIcon}
                onClick={() => putDataHandler("accept")}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <NoMovies />
      )}
    </>
  );
};
