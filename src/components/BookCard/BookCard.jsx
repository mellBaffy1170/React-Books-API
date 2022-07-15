import imageNotFound from "assets/images/image-not-found.jpg";

import {
  BookCardAuthors,
  BookCardCategory,
  BookCardImage,
  BookCardTitle,
  BookCardWrapper,
} from "./styled";

const BookCard = ({ title, category, authorsString, image, goToDetails }) => {
  return (
    <BookCardWrapper onClick={goToDetails}>
      <BookCardImage src={image || imageNotFound} />
      <BookCardCategory>{category || ""}</BookCardCategory>
      <BookCardTitle>{title || ""}</BookCardTitle>
      <BookCardAuthors>{authorsString || ""}</BookCardAuthors>
    </BookCardWrapper>
  );
};

export default BookCard;
