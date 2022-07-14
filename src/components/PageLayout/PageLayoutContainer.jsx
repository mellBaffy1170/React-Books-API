import { useFormik } from "formik";
import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";

import { CATEGORIES } from "constants/categories";
import { SORT } from "constants/sort";
import { AUTO_HIDE_DURATION } from "constants/common";
import BooksListContext from "context/BooksListContext";
import useGetBooks from "api/getBooks";

import PageLayout from "./PageLayout";

const PageLayoutContainer = () => {
  const [defaultCategory] = CATEGORIES;
  const [defaultSort] = SORT;

  const [queryValues, setQueryValues] = useState({});
  const [isSnackOpened, setIsSnackOpened] = useState(false);

  const {
    data: booksPages,
    isFetching: isFetchingBooks,
    refetch,
    fetchNextPage: fetchMoreBooks,
    hasNextPage: hasMoreBooks,
  } = useGetBooks(queryValues);

  useEffect(() => {
    if (queryValues.search) {
      refetch();
    }
  }, [queryValues, refetch]);

  const handleCloseError = () => setIsSnackOpened(false);

  const handleSubmit = (values) => {
    if (!values.search) {
      setIsSnackOpened(true);
    } else {
      setQueryValues({
        ...values,
        category: values.category !== defaultCategory ? values.category : null,
      });
    }
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
    <BooksListContext.Provider
      value={{
        ...booksPages,
        fetchMore: fetchMoreBooks,
        hasMore: hasMoreBooks,
        isFetching: isFetchingBooks,
      }}
    >
      <PageLayout formik={formik} isFetching={isFetchingBooks} />
      <Snackbar
        open={isSnackOpened}
        onClose={handleCloseError}
        autoHideDuration={AUTO_HIDE_DURATION}
      >
        <Alert severity="error" onClose={handleCloseError}>
          {"Search should not be empty"}
        </Alert>
      </Snackbar>
    </BooksListContext.Provider>
  );
};

export default PageLayoutContainer;
