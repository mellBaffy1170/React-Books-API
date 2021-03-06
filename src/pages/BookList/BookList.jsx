import { WelcomeImage } from "assets/vectors";
import { BooksNotFoundImage } from "assets/vectors";
import { BookCard } from "components/BookCard";

import {
  BookItemsWrapper,
  BookListContainer,
  BookListTitle,
  BooksNotFoundContainer,
  ButtonLoader,
  LoadMoreButton,
  WelcomeImageContainer,
  WelcomeTextContainer,
  WelcomeTitleContainer,
  WelcomeWrapper,
} from "./styled";

const BookList = ({ books, resultsFound, fetchMore, hasMore, isFetching }) => {
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
        {books.map((bookData, index) => {
          return <BookCard {...bookData} key={index} />;
        })}
      </BookItemsWrapper>
      {books.length ? (
        isFetching ? (
          <ButtonLoader />
        ) : (
          <LoadMoreButton onClick={fetchMore} disabled={!hasMore}>
            {"Load more"}
          </LoadMoreButton>
        )
      ) : null}
    </BookListContainer>
  );
};

export default BookList;
