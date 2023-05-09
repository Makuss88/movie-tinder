import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { Header } from "../../components/Header/Header";
import { ShowMovie } from "../../components/ShowMovie/ShowMovie";
import { theme } from "../../static/theme";

export const MainPage = () => {
  const smMedia = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={smMedia ? 10 : 8} width="100%">
      <Header />
      <ShowMovie />
    </Grid>
  );
};
