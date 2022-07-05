import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import BookList from "pages/BookList/BookList";
import BookDetails from "pages/BookDetails/BookDetails";
import NotFound from "pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/book-list" />} />
        <Route path={"/book-list"} element={<BookList />} />
        <Route path={"/book-details"} element={<BookDetails />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
