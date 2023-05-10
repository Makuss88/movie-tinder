import Typography from "@mui/material/Typography";
import { useIsSmSize } from "../../../hooks/useMediaQuery";
import { typography } from "../../../utils/theme";

export const NoMovieList = () => {
  const smMedia = useIsSmSize();

  return (
    <Typography
      style={smMedia ? { ...typography.heading6 } : { ...typography.heading4 }}
    >
      ON NO! You didn't accept any movies....
    </Typography>
  );
};
