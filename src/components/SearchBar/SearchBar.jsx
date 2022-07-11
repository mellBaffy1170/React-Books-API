import { SearchInput } from "./styled";

const SearchBar = ({ name, onChange, value }) => {
  return (
    <SearchInput
      variant="standard"
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchBar;
