import { MenuItem } from "@mui/material";

import { SORT } from "constants/sort";

import { StyledSelector } from "./styled";

const SortSelect = () => {
  const [defaultSort] = SORT;

  return (
    <StyledSelector variant="standard" defaultValue={defaultSort}>
      {SORT.map((sort) => (
        <MenuItem value={sort}>{sort}</MenuItem>
      ))}
    </StyledSelector>
  );
};

export default SortSelect;
