import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { PageLayout } from "components/PageLayout";
import { BookList } from "pages/BookList";
import { BookDetails} from "pages/BookDetails";
import { NotFound } from "pages/NotFound";
import { ROUTES } from "constants/routes";
import { queryClient } from "api/queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to={ROUTES.bookList} />} />
          <Route element={<PageLayout />}>
            <Route path={ROUTES.bookList} element={<BookList />} />
            <Route path={ROUTES.bookDetails} element={<BookDetails />} />
          </Route>
          <Route path={ROUTES.any} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
