import { styled, TextField } from "@mui/material";

import theme from "themeSettings";

export const SearchInput = styled(TextField)({
  color: "#fff",
  input: {
    width: "512px",
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    padding: "4px 16px",
    fontSize: "20px",
    fontFamily: '"Noto Sans", sans-serif',
    fontWeight: "200",
    [theme.breakpoints.down("md")]: {
      width: "380px",
      fontSize: "16px",
      padding: "4px 8px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "218px",
      fontSize: "12px",
      padding: "4px 8px",
    },
  },
});
