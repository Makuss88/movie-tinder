import { styled } from "@mui/material/styles";

export const Button = styled("button")({
  background: "transparent",
  border: "transparent",
  marginInline: 24,
  cursor: "grab",
  transition: "all 250ms ease",
  opacity: 0.8,
  "&:hover": {
    opacity: 1.5,
    transform: "scale(1.1)",
  },
});
