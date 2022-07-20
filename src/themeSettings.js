import { createTheme } from "@mui/material";

const themeOptions = {
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
  },
  breakpoints: {
    values: {
      sm: 320,
      md: 770,
    },
  },
};

const globalTheme = createTheme(themeOptions);

const theme = createTheme({}, globalTheme);

export default theme;
