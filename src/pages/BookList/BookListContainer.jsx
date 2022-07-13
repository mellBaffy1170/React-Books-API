import { useContext, useState, useEffect } from "react";

import BooksListContext from "context/BooksListContext";

import BookList from "./BookList";

const BookListContainer = () => {
  const booksPages = useContext(BooksListContext);
  const [booksData, setBooksData] = useState([]);
  const [booksFound, setBooksFound] = useState(undefined);

  const { fetchMore, hasMore } = booksPages;

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

    const items = booksPages?.pages?.reduce(
      (total, page) => total.concat(page.items || []),
      []
    );

    const mappedData = items?.map(mapVolumeData) || [];

    setBooksData(mappedData);
    if (booksPages.pages) {
      setBooksFound(booksPages.pages[0].totalItems);
    }
  }, [booksPages]);

  return (
    <BookList
      books={booksData}
      resultsFound={booksFound}
      fetchMore={fetchMore}
      hasMore={hasMore}
    />
  );
};

export default BookListContainer;
