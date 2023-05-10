import Grid from "@mui/material/Grid";
import { Provider } from "react-redux";
import { Router } from "./pages/Router/Router";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Grid
        container
        flexDirection="column"
        justifyContent="cenetr"
        alignItems="center"
        width="100%"
        height="100vh"
        style={{
          background:
            "linear-gradient(0deg, rgba(18, 2, 15, 1) 0%, rgba(197, 32, 149, 1) 100%) center center fixed",
        }}
      >
        <Router />
      </Grid>
    </Provider>
  );
};
