import { styled, Select } from "@mui/material";

export const StyledSelector = styled(Select)({
  "& .MuiInputBase-input": {
    width: "104px",
    color: "#fff",
    padding: "4px 16px",
    fontSize: "20px",
    fontFamily: '"Noto Sans", sans-serif',
    fontWeight: "200",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
});
