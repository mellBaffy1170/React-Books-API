import {
  BookAuthorsContainer,
  BookCategoriesContainer,
  BookDescriptionContainer,
  BookDetailsWrapper,
  BookImageContainer,
  BookInfoWrapper,
  BookTitleContainer,
} from "./styled";

const BookDetails = () => {
  return (
    <BookDetailsWrapper>
      <BookImageContainer
        src={
          "http://books.google.com/books/content?id=yzgzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
      />
      <BookInfoWrapper>
        <BookCategoriesContainer>{"Art"}</BookCategoriesContainer>
        <BookTitleContainer>{"Node.js"}</BookTitleContainer>
        <BookAuthorsContainer>{"Kirill Syhov"}</BookAuthorsContainer>
        <BookDescriptionContainer>
          {
            "About the Book Based on the bestselling first edition, Node.js in Action, Second Edition is a completely new book. Packed with practical examples, it teaches you how to create high-performance web servers using JavaScript and Node."
          }
        </BookDescriptionContainer>
      </BookInfoWrapper>
    </BookDetailsWrapper>
  );
};

export default BookDetails;
