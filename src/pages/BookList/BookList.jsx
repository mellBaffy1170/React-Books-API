import { BookCard } from "components/BookCard";

import { BookItemsWrapper, BookListContainer, BookListTitle, ButtonLoader, LoadMoreButton } from "./styled";

const BookList = ({ books, resultsFound }) => {
  return (
    <BookListContainer>
      {resultsFound !== undefined && (
        <BookListTitle>{`Found ${resultsFound} results`}</BookListTitle>
      )}
      <BookItemsWrapper>
        {books.map((bookData) => (
          <BookCard {...bookData} key={bookData.id} />
        ))}
      </BookItemsWrapper>
      {/* <ButtonLoader> */}
        <LoadMoreButton>{"Load more"}</LoadMoreButton>
      {/* </ButtonLoader> */}
    </BookListContainer>
  );
};

export default BookList;
