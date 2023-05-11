import { Grid, Typography } from "@mui/material";
import React from "react";
import { useIsSmSize } from "../../../hooks/useMediaQuery";
import { typography } from "../../../utils/theme";

interface IMovieList {
  mockMovieData: any;
  movieCounter: number;
}

export const MovieList: React.FC<IMovieList> = ({
  mockMovieData,
  movieCounter,
}) => {
  const smMedia = useIsSmSize();

  return (
    <>
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
          {mockMovieData[movieCounter].title} (
          {mockMovieData[movieCounter].rating} / 10)
        </Typography>
      </Grid>
      <Grid item marginY="16px">
        <img
          src={mockMovieData[movieCounter].imageURL}
          alt="img"
          style={smMedia ? { height: 100 } : { height: 300 }}
        />
      </Grid>
    </>
  );
};
