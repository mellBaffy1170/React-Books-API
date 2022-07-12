import { BookCard } from "components/BookCard";

import { BookItemsWrapper, BookListTitle } from "./styled";

const BookList = ({ books, resultsFound }) => {
  return (
    <>
      {resultsFound !== undefined && (
        <BookListTitle>{`Found ${resultsFound} results`}</BookListTitle>
      )}
      <BookItemsWrapper>
        {books.map((bookData) => (
          <BookCard {...bookData} key={bookData.id} />
        ))}
      </BookItemsWrapper>
    </>
  );
};

export default BookList;
