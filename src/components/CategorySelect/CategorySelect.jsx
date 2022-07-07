import { MenuItem } from "@mui/material";

import { CATEGORIES } from "constants/categories";

import { StyledSelector } from "./styled";

const CategorySelect = () => {
  const [defaultCategory] = CATEGORIES;

  return (
    <StyledSelector
      variant="standard"
      defaultValue={defaultCategory}
    >
      {CATEGORIES.map((category) => (
        <MenuItem value={category}>{category}</MenuItem>
      ))}
    </StyledSelector>
  );
};

export default CategorySelect;
