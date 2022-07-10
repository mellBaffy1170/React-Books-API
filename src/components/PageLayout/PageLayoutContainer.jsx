import { useFormik } from "formik";
import { useState } from "react";

import { CATEGORIES } from "constants/categories";
import { SORT } from "constants/sort";
import BooksListContext from "context/BooksListContext";

import PageLayout from "./PageLayout";

const PageLayoutContainer = () => {
  const [defaultCategory] = CATEGORIES;
  const [defaultSort] = SORT;

  const [queryValues, setQueryValues] = useState({});

  const handleSubmit = (values) => {
    setQueryValues(values);
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
    <BooksListContext.Provider value={queryValues}>
      <PageLayout formik={formik} />
    </BooksListContext.Provider>
  );
};

export default PageLayoutContainer;
