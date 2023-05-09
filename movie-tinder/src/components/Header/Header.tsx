import { Grid, Typography, useMediaQuery } from "@mui/material";
import { icons } from "../../static/icons";
import { HeaderButton } from "../Buttons/HeaderButton/HeaderButton";
import { typography, theme } from "../../static/theme";
import { Link } from "react-router-dom";

export const Header = () => {
  const smMedia = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      paddingY={smMedia ? "20px" : "40px"}
    >
      <Link to="/">
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <img src={icons.headerIcon} alt="header_logo" />
            </Grid>
            <Grid item>
              <Typography
                style={
                  smMedia
                    ? { ...typography.heading6 }
                    : { ...typography.heading4 }
                }
              >
                MovieTinder
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Link>
      <Grid item>
        <HeaderButton />
      </Grid>
    </Grid>
  );
};
