import { Grid, Typography } from "@mui/material";
import { icons } from "../../utils/icons";
import { typography } from "../../utils/theme";

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
      <Grid item marginTop="40px">
        <img src={icons.noCameraIcon} alt="no_camera" width="400px" />
      </Grid>
    </Grid>
  );
};
