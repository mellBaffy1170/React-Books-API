import imageNotFound from "assets/images/image-not-found.jpg";

import {
  BookAuthorsContainer,
  BookCategoriesContainer,
  BookDescriptionContainer,
  BookDetailsWrapper,
  BookImageContainer,
  BookInfoWrapper,
  BookTitleContainer,
  CircularLoader,
} from "./styled";

const BookDetails = ({ isBookLoading, book }) => {
  const { title, description, image, authorsString, category } = book || {};

  return isBookLoading ? (
    <CircularLoader size="96px" />
  ) : (
    <BookDetailsWrapper>
      <BookImageContainer src={image || imageNotFound} />
      <BookInfoWrapper>
        <BookCategoriesContainer>{category}</BookCategoriesContainer>
        <BookTitleContainer>{title}</BookTitleContainer>
        <BookAuthorsContainer>{authorsString}</BookAuthorsContainer>
        <BookDescriptionContainer
          dangerouslySetInnerHTML={{ __html: description || "NO DESCRIPTION" }}
        />
      </BookInfoWrapper>
    </BookDetailsWrapper>
  );
};

export default BookDetails;
