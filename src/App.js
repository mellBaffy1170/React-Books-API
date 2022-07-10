import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { PageLayout } from "components/PageLayout";
import BookList from "pages/BookList/BookList";
import BookDetails from "pages/BookDetails/BookDetails";
import { NotFound } from "pages/NotFound";
import { ROUTES } from "constants/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to={ROUTES.bookList} />} />
        <Route element={<PageLayout  />}>
          <Route path={ROUTES.bookList} element={<BookList />} />
          <Route path={ROUTES.bookDetails} element={<BookDetails />} />
        </Route>
        <Route path={ROUTES.any} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
