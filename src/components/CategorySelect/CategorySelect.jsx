import { MenuItem } from "@mui/material";

import { CATEGORIES } from "constants/categories";

import { StyledSelector } from "./styled";

const CategorySelect = ({ name, onChange, value }) => {
  return (
    <StyledSelector
      variant="standard"
      name={name}
      onChange={onChange}
      value={value}
    >
      {CATEGORIES.map((category, index) => (
        <MenuItem value={category} key={index}>
          {category}
        </MenuItem>
      ))}
    </StyledSelector>
  );
};

export default CategorySelect;
