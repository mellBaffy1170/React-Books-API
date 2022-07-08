import {
  BookAuthorsContainer,
  BookCategoriesContainer,
  BookDescriotionContainer,
  BookDetailsWrapper,
  BookImageContainer,
  BookInfoWrapper,
  BookTitleContainer,
} from "./styled";

const BookDetails = () => {
  return (
    <BookDetailsWrapper>
      <BookImageContainer></BookImageContainer>
      <BookInfoWrapper>
        <BookCategoriesContainer>{"Art"}</BookCategoriesContainer>
        <BookTitleContainer>{"Node.js"}</BookTitleContainer>
        <BookAuthorsContainer>{"Kirill Syhov"}</BookAuthorsContainer>
        <BookDescriotionContainer>
          {
            "About the Book Based on the bestselling first edition, Node.js in Action, Second Edition is a completely new book. Packed with practical examples, it teaches you how to create high-performance web servers using JavaScript and Node."
          }
        </BookDescriotionContainer>
      </BookInfoWrapper>
    </BookDetailsWrapper>
  );
};

export default BookDetails;
