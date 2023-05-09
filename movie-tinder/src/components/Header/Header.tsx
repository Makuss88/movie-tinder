import { Grid, Typography } from "@mui/material";
import { icons } from "../../static/icons";
import { HeaderButton } from "../Buttons/HeaderButton/HeaderButton";
import { typography } from "../../static/theme";

interface IHeader {
  onClickHeader: () => void;
}

export const Header: React.FC<IHeader> = ({ onClickHeader }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      paddingY="40px"
    >
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <img src={icons.headerIcon} alt="header_logo" />
          </Grid>
          <Grid item>
            <Typography style={{ ...typography.heading4 }}>
              MovieTinder
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <HeaderButton onClick={onClickHeader} />
      </Grid>
    </Grid>
  );
};
