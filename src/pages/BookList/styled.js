import { styled, Button, CircularProgress } from "@mui/material";

export const BookListContainer = styled("div")({
  backgroundColor: "#FAFAFA",
  margin: "0 120px",
  paddingBottom: "30px",
});

export const WelcomeWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "340px",
  justifyContent: "space-evenly",
  padding: "10px 0",
  boxSizing: "border-box",
});

export const WelcomeTitleContainer = styled("div")({
  fontSize: "24px",
  fontWeight: "400",
});

export const WelcomeTextContainer = styled("div")({
  fontSize: "16px",
  fontWeight: "300",
});

export const WelcomeImageContainer = styled("div")({
  width: "96px",
  margin: "0 auto",
});

export const BooksNotFoundContainer = styled("div")({
  width: "152px",
  margin: "0 auto",
});

export const BookListTitle = styled("p")({
  fontSize: "16px",
  textAlign: "center",
  fontWeight: "300",
  paddingBottom: "5px",
  padding: "16px 0 0 0",
});

export const BookItemsWrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  //minHeight: "330px",
});

export const LoadMoreButton = styled(Button)({
  display: "block",
  margin: "10px auto 0",
});

export const ButtonLoader = styled(CircularProgress)({
  margin: "0 auto",
  display: "block",
});
