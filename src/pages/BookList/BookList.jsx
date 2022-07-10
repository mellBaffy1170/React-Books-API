import { useContext } from "react";

import BooksListContext from "context/BooksListContext";

const BookList = () => {
  const books = useContext(BooksListContext);
  return (
    <>
      {"BookList"}
      <br />
      {JSON.stringify(books)}
    </>
  );
};

export default BookList;
