import { useContext, useState, useEffect } from "react";

import BooksListContext from "context/BooksListContext";

import BookList from "./BookList";

const BookListContainer = () => {
  const books = useContext(BooksListContext);
  const [booksData, setBooksData] = useState([]);

  const { totalItems, items } = books || {};

  useEffect(() => {
    const mapVolumeData = (item) => {
      const { id, volumeInfo } = item;

      const { title, categories, authors, imageLinks } = volumeInfo;

      const [category] = categories || [];

      const { smallThumbnail: image } = imageLinks || {};

      const bookData = {
        id,
        title,
        authors,
        category,
        image,
      };

      return bookData;
    };

    const mappedData = items?.map(mapVolumeData) || [];

    setBooksData(mappedData);
  }, [items]);

  return <BookList books={booksData} resultsFound={totalItems} />;
};

export default BookListContainer;
