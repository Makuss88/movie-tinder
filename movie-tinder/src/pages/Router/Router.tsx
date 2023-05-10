import { Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ShowMovie } from "../../components/ShowMovie/ShowMovie";
import { useIsSmSize } from "../../hooks/useMediaQuery";
import { UserProfile } from "../../components/UserProfile/UserProfle/UserProfile";

export const Router = () => {
  const smMedia = useIsSmSize();

  return (
    <BrowserRouter>
      <Grid item xs={smMedia ? 10 : 8} width="100%">
        <Header />
        <Routes>
          <Route path="/myProfile" Component={UserProfile} />
          <Route path="/" Component={ShowMovie} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
};
