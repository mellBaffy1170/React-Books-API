import BookCard from "./BookCard";

const BookCardContainer = ({ authors, ...rest }) => {
  const authorsString =
    authors?.reduce((total, author) => total + `, ${author}`) ||
    "";

  return <BookCard authorsString={authorsString} {...rest} />;
};

export default BookCardContainer;
