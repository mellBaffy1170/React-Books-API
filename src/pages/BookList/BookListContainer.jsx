import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BooksListContext from "context/BooksListContext";
import { ROUTES } from "constants/routes";
import { transformRoute } from "utils/url/transformRoute";

import BookList from "./BookList";

const BookListContainer = () => {
  const booksPages = useContext(BooksListContext);
  const [booksData, setBooksData] = useState([]);
  const [booksFound, setBooksFound] = useState(undefined);

  const redirectTo = useNavigate();

  const { fetchMore, hasMore, isFetching } = booksPages;

  useEffect(() => {
    const mapVolumeData = (item) => {
      const { id, volumeInfo } = item;

      const { title, categories, authors, imageLinks } = volumeInfo;

      const [category] = categories || [];

      const { smallThumbnail: image } = imageLinks || {};

      const goToDetails = () =>
        redirectTo(transformRoute(ROUTES.bookDetails, id));

      const bookData = {
        title,
        authors,
        category,
        image,
        goToDetails,
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
  }, [booksPages, redirectTo]);

  return (
    <BookList
      books={booksData}
      resultsFound={booksFound}
      fetchMore={fetchMore}
      hasMore={hasMore}
      isFetching={isFetching}
    />
  );
};

export default BookListContainer;
