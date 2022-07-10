import { useFormik } from "formik";
// import { useState } from "react";

import { CATEGORIES } from "constants/categories";
import { SORT } from "constants/sort";
import BooksListContext from "context/BooksListContext";
import useGetBooks from "api/getBooks";

import PageLayout from "./PageLayout";

const PageLayoutContainer = () => {
  const [defaultCategory] = CATEGORIES;
  const [defaultSort] = SORT;

  // const [queryValues, setQueryValues] = useState({});
  const { mutate: fetchBooks, data: books } = useGetBooks();

  const handleSubmit = (values) => {
    fetchBooks({
      ...values,
      category: values.category !== defaultCategory ? values.category : null,
    });
  };

  const formik = useFormik({
    initialValues: {
      search: "",
      category: defaultCategory,
      sort: defaultSort,
    },
    onSubmit: handleSubmit,
  });

  return (
    <BooksListContext.Provider value={books}>
      <PageLayout formik={formik} />
    </BooksListContext.Provider>
  );
};

export default PageLayoutContainer;
