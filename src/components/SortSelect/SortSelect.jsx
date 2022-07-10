import { MenuItem } from "@mui/material";

import { SORT } from "constants/sort";

import { StyledSelector } from "./styled";

const SortSelect = ({ name, onChange, value }) => {
  return (
    <StyledSelector variant="standard" name={name} onChange={onChange} value={value}>
      {SORT.map((sort, index) => (
        <MenuItem value={sort} key={index}>
          {sort}
        </MenuItem>
      ))}
    </StyledSelector>
  );
};

export default SortSelect;
