import { styled } from "@mui/material/styles";
import { colors } from "../../../../utils/theme";

export const Button = styled("button")({
  padding: 8,
  background: colors.normal.black,
  border: "2px solid black",
  borderRadius: 8,
  cursor: "pointer",
  transition: "all 200ms linear",
  "&:hover": {
    background: colors.hover.black,
  },
});
