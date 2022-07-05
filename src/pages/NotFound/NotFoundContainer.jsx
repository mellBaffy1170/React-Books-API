import { useNavigate } from "react-router";

import { ROUTES } from "constants/routes";

import NotFound from "./NotFound";

const NotFoundContainer = () => {
  const redirectTo = useNavigate();

  const navigateToSearch = () => redirectTo(ROUTES.bookList);

  return <NotFound navigateToSearch={navigateToSearch} />;
};

export default NotFoundContainer;
