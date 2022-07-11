import axios from "axios";
import { useMutation } from "react-query";

// import { QUERY_KEYS } from "constants/queryKeys";
import { PAGE_SIZE } from "constants/common";
// import { CATEGORIES } from "constants/categories";

const useGetBooks = () => {
  return useMutation(async ({ search, category, sort }) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}${
        category ? `+subject:${category}` : ""
      }&orderBy=${sort}&maxResults=${PAGE_SIZE}`
    );
    return data;
  });
};

export default useGetBooks;
