import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useIsSmSize } from "../../hooks/useMediaQuery";
import { icons } from "../../utils/icons";
import { typography } from "../../utils/theme";
import { HeaderButton } from "../UI/Buttons/HeaderButton/HeaderButton";

export const Header = () => {
  const smMedia = useIsSmSize();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      paddingY={smMedia ? "20px" : "40px"}
    >
      <Link to="/movie-tinder">
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
