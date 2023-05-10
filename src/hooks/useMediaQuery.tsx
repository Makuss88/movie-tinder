import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "../utils/theme";

export const useIsSmSize = () => {
  return useMediaQuery(theme.breakpoints.down("sm"));
};
