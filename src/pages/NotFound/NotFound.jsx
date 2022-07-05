import { NotFoundImage } from "assets/vectors";

import {
  ErrorContentWrapper,
  ErrorMessage,
  ErrorTitle,
  NotFoundWrapper,
  ImageContainer,
  BackButton,
} from "./styled";

const NotFound = ({ navigateToSearch }) => {
  return (
    <NotFoundWrapper>
      <ErrorContentWrapper>
        <ErrorTitle>{"404 ERROR"}</ErrorTitle>
        <ErrorMessage>{"Page not found"}</ErrorMessage>
        <BackButton handleClick={navigateToSearch}>Go to Search</BackButton>
      </ErrorContentWrapper>
      <ImageContainer>
        <NotFoundImage />
      </ImageContainer>
    </NotFoundWrapper>
  );
};

export default NotFound;
