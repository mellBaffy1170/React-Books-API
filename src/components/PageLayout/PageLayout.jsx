import { Outlet } from "react-router-dom";

import { SearchBar } from "components/SearchBar";
import { CategorySelect } from "components/CategorySelect/index";
import { SortSelect } from "components/SortSelect/index";

import { HeadTitle, HeadWrapper, SelectWrapper } from "./styled";

const PageLayout = () => {
  return (
    <>
      <HeadWrapper>
        <HeadTitle>{"Book Search"}</HeadTitle>
        <SearchBar />
        <SelectWrapper>
          <CategorySelect />
          <SortSelect />
        </SelectWrapper>
      </HeadWrapper>
      <Outlet />
    </>
  );
};
// refactor { }

export default PageLayout;

// Outlet - то, что мы передаем в Route
