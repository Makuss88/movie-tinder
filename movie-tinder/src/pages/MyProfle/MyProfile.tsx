import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../store";

export const MyProfile = () => {
  const state = useSelector((state: State) => state.movie);

  const listItems = state.map((item) => <li>{item}</li>);
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        textAlign="center"
      >
        <Typography>MY PROFILE</Typography>
        <Typography>My accepted movie:</Typography>
        <ol>{listItems}</ol>
      </Grid>
    </Grid>
  );
};
