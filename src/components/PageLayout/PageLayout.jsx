import { Outlet } from "react-router-dom";

import { SearchBar } from "components/SearchBar";
import { CategorySelect } from "components/CategorySelect/index";
import { SortSelect } from "components/SortSelect/index";

import { HeadTitle, HeadWrapper, SelectWrapper } from "./styled";

const PageLayout = ({ formik }) => {
  return (
    <>
      <HeadWrapper>
        <HeadTitle>{"Book Search"}</HeadTitle>
        <form onSubmit={formik.handleSubmit}>
          <SearchBar
            name={"search"}
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <SelectWrapper>
            <CategorySelect
              name={"category"}
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            <SortSelect
              name={"sort"}
              onChange={formik.handleChange}
              value={formik.values.sort}
            />
          </SelectWrapper>
          <button type="submit">Search</button>
        </form>
      </HeadWrapper>
      <Outlet />
    </>
  );
};
// refactor { }

export default PageLayout;

// Outlet - то, что мы передаем в Route
