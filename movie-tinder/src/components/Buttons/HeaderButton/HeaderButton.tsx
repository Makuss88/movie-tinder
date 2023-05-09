import React from "react";
import { Button } from "./style";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { icons } from "../../../static/icons";
import { Link } from "react-router-dom";

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
