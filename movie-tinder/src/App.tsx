import Grid from "@mui/material/Grid";
import { useLayoutEffect } from "react";
import { MainPage } from "./pages/MainPage/MainPage";
// import { URL_WEBSITE } from "./static/const";

export const App = () => {
  const getMovieData = async () => {
    // const response = await fetch(URL_WEBSITE + "/recommendations");
    // const data = await response.json();
    // console.log(data);
    // TODO: in future GET Data from DataBase
  };

  useLayoutEffect(() => {
    getMovieData();
  }, []);

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="cenetr"
      alignItems="center"
      height="100vh"
      style={{
        background:
          "linear-gradient(0deg, rgba(18, 2, 15, 1) 0%, rgba(197, 32, 149, 1) 100%)",
      }}
    >
      <MainPage />
    </Grid>
  );
};
