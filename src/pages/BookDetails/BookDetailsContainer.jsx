import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useGetBookById from "api/getBookById";

import BookDetails from "./BookDetails";

const BookDetailsContainer = () => {
  const [bookToDisplay, setBookToDisplay] = useState(undefined);

  const { id: bookId } = useParams();

  const {
    data: bookResponse,
    mutate: fetchBook,
    isLoading: isBookLoading,
  } = useGetBookById();

  useEffect(() => {
    fetchBook(bookId);
  }, [fetchBook, bookId]);

  useEffect(() => {
    if (bookResponse) {
      const { volumeInfo } = bookResponse || {};
      const { title, description, authors, categories, imageLinks } =
        volumeInfo || {};
      const [category] = categories || [];
      const { thumbnail: image } = imageLinks || {};

      const authorsString =
        authors?.reduce((total, author) => total + `, ${author}`) || "";

      const bookData = {
        title,
        authorsString,
        category,
        image,
        description,
      };

      setBookToDisplay(bookData);
    }
  }, [bookResponse]);

  return <BookDetails isBookLoading={isBookLoading} book={bookToDisplay} />;
};

export default BookDetailsContainer;
