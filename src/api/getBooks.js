import axios from "axios";
import { useInfiniteQuery } from "react-query";

import { QUERY_KEYS } from "constants/queryKeys";
import { PAGE_SIZE } from "constants/common";
// import { CATEGORIES } from "constants/categories";

const useGetBooks = (filters) => {
  const { search, category, sort } = filters;

  const fetchBooksPage = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}${
        category ? `+subject:${category}` : ""
      }&orderBy=${sort}&maxResults=${PAGE_SIZE}&startIndex=${
        pageParam * PAGE_SIZE
      }`
    );
    return { ...data, page: pageParam };
  };

  return useInfiniteQuery([QUERY_KEYS.books, filters], fetchBooksPage, {
    enabled: false,
    getNextPageParam: (lastPage) =>
      !(lastPage.items?.length < PAGE_SIZE) ? lastPage.page + 1 : undefined,
  });
};

export default useGetBooks;
