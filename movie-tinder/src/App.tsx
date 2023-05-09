import Grid from "@mui/material/Grid";
import { MainPage } from "./pages/MainPage/MainPage";

export const App = () => {
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
