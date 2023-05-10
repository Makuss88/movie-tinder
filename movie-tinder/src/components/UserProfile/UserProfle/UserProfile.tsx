import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../../store";
import { MovieList } from "../MovieList/MovieList";
import { NoMovieList } from "../NoMovieList/NoMovieList";
import { useIsSmSize } from "../../../hooks/useMediaQuery";
import { typography } from "../../../utils/theme";

export const UserProfile = () => {
  const state = useSelector((state: State) => state.movie);
  const movieList = state.map((item) => (    <li>{item}</li>  ));

  const smMedia = useIsSmSize();

  return (
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
            smMedia ? { ...typography.heading4 } : { ...typography.heading2 }
          }
        >
          MY PROFILE
        </Typography>
        {movieList.length !== 0 ? (          <MovieList />        ) : (          <NoMovieList />        )}
      </Grid>
    </Grid>
  );
};
