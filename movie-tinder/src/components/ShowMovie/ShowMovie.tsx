import { Grid, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { mockMovieData } from "../../mockData";
import { PUT_DATA_OPTION, URL_WEBSITE } from "../../static/const";
import { icons } from "../../static/icons";
import { theme, typography } from "../../static/theme";
import { actionCreators } from "../../store";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { NoMovies } from "../NoMovies/NoMovies";


export const ShowMovie = () => {
  const [movieCounter, setMovieCounter] = useState<number>(0);
  const [isNotMovie, setIsNotMovie] = useState<boolean>(false);

  const [movieList, setMovieList] = useState([]);

  const ax = axios.create({
    baseURL: "http://localhost:3000/recommendations",
  });

  ax.get("db.json")
    .then((res) => res.data)
    .then((data) => {
      setMovieList(data);
      console.log(data);
    });

  const smMedia = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  const { acceptAction, rejectAction } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const putData = async (
    // TODO, now we have error, because we don't have our DB
    counter: number,
    recommendationsPath: string
  ): Promise<void> => {
    const idData: string = mockMovieData[counter].id;
    axios
      .put(URL_WEBSITE + `recommendations/${idData}/${recommendationsPath}}`, {
        mockMovieData,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  };

  const clickHandler = (getInfo: string): void => {
    if (movieCounter === mockMovieData.length - 1) {
      setIsNotMovie(true);
    } else {
      switch (getInfo) {
        case PUT_DATA_OPTION.REJECT:
          rejectAction(mockMovieData[movieCounter].title);
          putData(movieCounter, PUT_DATA_OPTION.REJECT);
          setMovieCounter(movieCounter + 1);
          break;
        case PUT_DATA_OPTION.ACCEPT:
          acceptAction(mockMovieData[movieCounter].title);
          putData(movieCounter, PUT_DATA_OPTION.ACCEPT);
          setMovieCounter(movieCounter + 1);
          break;
        default:
          return;
      }
    }
  };

  return (
    <>
      {!isNotMovie ? (
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
                onClick={() => clickHandler("reject")}
              />
            </Grid>
            <Grid item>
              <MainButton
                label={icons.acceptIcon}
                onClick={() => clickHandler("accept")}
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
