import { createTheme } from "@mui/system";

export const colors = {
  normal: {
    black: "#555555",
    white: "#F7F7F7",
    greyText: "#707A8D",
    red: "#D25858",
    green: "#31ce56",
  },
  hover: {
    red: "#c43535",
    green: "#83b20c",
    black: "#707A8D",
  },
};

export const typography = {
  heading1: {
    fontSize: 88,
    lineHeight: "66px",
    fontWeight: 700,
  },
  heading2: {
    fontSize: 60,
    lineHeight: "60px",
    fontWeight: 500,
  },
  heading3: {
    fontSize: 40,
    lineHeight: "42px",
    fontWeight: 500,
  },
  heading4: {
    fontSize: 32,
    lineHeight: "36px",
    fontWeight: 300,
  },
  heading5: {
    fontSize: 20,
    lineHeight: "45px",
    fontWeight: 500,
  },
  heading6: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 300,
  },
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
