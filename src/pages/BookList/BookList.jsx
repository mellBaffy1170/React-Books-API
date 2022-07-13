import { WelcomeImage } from "assets/vectors";
import { BooksNotFoundImage } from "assets/vectors";
import { BookCard } from "components/BookCard";

import {
  BookItemsWrapper,
  BookListContainer,
  BookListTitle,
  BooksNotFoundContainer,
  LoadMoreButton,
  WelcomeImageContainer,
  WelcomeTextContainer,
  WelcomeTitleContainer,
  WelcomeWrapper,
} from "./styled";

const BookList = ({ books, resultsFound, fetchMore, hasMore }) => {
  return (
    <BookListContainer>
      {resultsFound !== undefined ? (
        <>
          <BookListTitle>{`Found ${resultsFound} results`}</BookListTitle>
          {resultsFound === 0 && (
            <WelcomeWrapper>
              <BooksNotFoundContainer>
                <BooksNotFoundImage />
              </BooksNotFoundContainer>
            </WelcomeWrapper>
          )}
        </>
      ) : (
        <WelcomeWrapper>
          <WelcomeImageContainer>
            <WelcomeImage />
          </WelcomeImageContainer>
          <WelcomeTitleContainer>
            {"Welcome to the Book Search App;)"}
          </WelcomeTitleContainer>
          <WelcomeTextContainer>
            {"Fill the fields above and click 'Search'"}
          </WelcomeTextContainer>
        </WelcomeWrapper>
      )}
      <BookItemsWrapper>
        {books.map((bookData, index) => (
          <BookCard {...bookData} key={index} />
        ))}
      </BookItemsWrapper>
      {books.length ? (
        <LoadMoreButton onClick={fetchMore} disabled={!hasMore}>
          {"Load more"}
        </LoadMoreButton>
      ) : null}
    </BookListContainer>
  );
};

export default BookList;
