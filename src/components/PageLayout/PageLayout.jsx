import { Outlet } from "react-router-dom";

import { SearchBar } from "components/SearchBar";
import { CategorySelect } from "components/CategorySelect/index";
import { SortSelect } from "components/SortSelect/index";

import {
  ButtonLoader,
  FooterWrapper,
  HeadTitle,
  HeadWrapper,
  PageLayoutWrapper,
  SelectWrapper,
  SubmitButton,
} from "./styled";

const PageLayout = ({ formik, isFetching }) => {
  return (
    <PageLayoutWrapper>
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
            <SubmitButton variant="contained" type="submit">
              {"Search"}
            </SubmitButton>
          )}
        </HeadWrapper>
      </form>
      <Outlet />
      <FooterWrapper></FooterWrapper>
    </PageLayoutWrapper>
  );
};
// refactor { }

export default PageLayout;

// Outlet - то, что мы передаем в Route
