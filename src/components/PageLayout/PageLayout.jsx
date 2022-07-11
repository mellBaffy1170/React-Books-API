import { Outlet } from "react-router-dom";

import { SearchBar } from "components/SearchBar";
import { CategorySelect } from "components/CategorySelect/index";
import { SortSelect } from "components/SortSelect/index";

import {
  ButtonLoader,
  HeadTitle,
  HeadWrapper,
  SelectWrapper,
  SubmitButton,
} from "./styled";

const PageLayout = ({ formik, isFetching }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <HeadWrapper>
          <HeadTitle>{"Book Search"}</HeadTitle>
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
          {isFetching ? (
            <ButtonLoader />
          ) : (
            <SubmitButton
              variant="contained"
              type="submit"
              disabled={isFetching}
            >
              {"Search"}
            </SubmitButton>
          )}
        </HeadWrapper>
      </form>
      <Outlet />
    </>
  );
};
// refactor { }

export default PageLayout;

// Outlet - то, что мы передаем в Route
