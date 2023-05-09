import React from "react";
import { Button } from "./style";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { icons } from "../../../static/icons";

interface IHeaderButton {
  onClick: () => void; 
}

export const HeaderButton: React.FC<IHeaderButton> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Grid container alignItems="center">
        <Grid item>
          <Typography>My profile</Typography>
        </Grid>
        <Grid item marginLeft={"8px"}>
          <img src={icons.myProfileIcon} alt="my_profile" width={60} />
        </Grid>
      </Grid>
    </Button>
  );
};
