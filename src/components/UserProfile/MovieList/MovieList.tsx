import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useIsSmSize } from "../../../hooks/useMediaQuery";
import { State } from "../../../store";
import { typography } from "../../../utils/theme";

export const MovieList = () => {
  const state = useSelector((state: State) => state.movie);
  const stateSet = new Set(state);
  const movieList = Array.from(stateSet).map((item) => <li>{item}</li>);

  const smMedia = useIsSmSize();

  return (
    <>
      <Typography
        style={
          smMedia ? { ...typography.heading6 } : { ...typography.heading4 }
        }
      >
        My accepted movie:
      </Typography>
      <ol>{movieList}</ol>
    </>
  );
};
