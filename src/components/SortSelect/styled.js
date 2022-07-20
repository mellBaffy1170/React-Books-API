import { styled, Select } from "@mui/material";

import theme from "themeSettings";

export const StyledSelector = styled(Select)({
    "& .MuiInputBase-input": {
      width: "104px",
      color: "#fff",
      padding: "4px 16px",
      fontSize: "20px",
      fontFamily: '"Noto Sans", sans-serif',
      fontWeight: "200",
      [theme.breakpoints.down("md")]: {
        width: "96px",
        fontSize: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "72px",
        fontSize: "12px",
      },
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
  });