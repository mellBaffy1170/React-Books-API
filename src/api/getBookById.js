import axios from "axios";
import { useMutation } from "react-query";

const useGetBookById = () => {
  const fetchBookById = async (id) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    const { data } = response;

    return data;
  };

  return useMutation(fetchBookById);
};

export default useGetBookById;
