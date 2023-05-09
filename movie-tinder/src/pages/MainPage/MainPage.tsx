import { Grid, useMediaQuery } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ShowMovie } from "../../components/ShowMovie/ShowMovie";
import { theme } from "../../static/theme";
import { MyProfile } from "../MyProfle/MyProfile";

export const MainPage = () => {
  const smMedia = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <BrowserRouter>
      <Grid item xs={smMedia ? 10 : 8} width="100%">
        <Header />
        <Routes>
          <Route path="/myProfile" Component={MyProfile} />
          <Route path="/" Component={ShowMovie} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
};
