import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { icons } from "../../../../utils/icons";
import { Button } from "./style";

export const HeaderButton = () => {
  
  return (
    <Link to="/myProfile">
      <Button>
        <Grid container alignItems="center">
          <Grid item>
            <Typography>My profile</Typography>
          </Grid>
          <Grid item marginLeft={"8px"}>
            <img src={icons.myProfileIcon} alt="my_profile" width={60} />
          </Grid>
        </Grid>
      </Button>
    </Link>
  );
};
