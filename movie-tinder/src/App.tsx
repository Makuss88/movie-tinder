import Grid from "@mui/material/Grid";
import { Provider } from "react-redux";
import { MainPage } from "./pages/MainPage/MainPage";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
