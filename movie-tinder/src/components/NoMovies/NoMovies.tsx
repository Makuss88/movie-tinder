import { Grid, Typography } from "@mui/material";
import React from "react";
import { icons } from "../../static/icons";
import { typography } from "../../static/theme";

export const NoMovies = () => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography style={{ ...typography.heading3 }}>
          OMG, You filter all movies...
        </Typography>
      </Grid>
      <Grid item marginTop={"40px"}>
        <img src={icons.noCameraIcon} alt="no_camera" width="400" />
      </Grid>
    </Grid>
  );
};
