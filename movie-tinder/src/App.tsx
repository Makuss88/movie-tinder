import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { URL_WEBSITE } from "./static/const";

export const App = () => {
  const [movieData, setMovieData] = useState<Object>([]);

  useEffect(() => {
    axios
      .get(URL_WEBSITE)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error: Error) => alert(error));
  }, []);

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="cenetr"
      alignItems="center"
      height="100vh"
      width="100%"
      style={{
        background:
          "linear-gradient(0deg, rgba(18, 2, 15, 1) 0%, rgba(197, 32, 149, 1) 100%) center center fixed",
      }}
    >
      <MainPage />
    </Grid>
  );
};
