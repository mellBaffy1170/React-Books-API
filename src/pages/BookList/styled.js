import { styled, Button, CircularProgress } from "@mui/material";

import theme from "themeSettings";

export const BookListContainer = styled("div")({
  backgroundColor: "#FAFAFA",
  margin: "0 120px",
  [theme.breakpoints.down("md")]: {
    margin: "0 80px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 40px",
  },
});

export const WelcomeWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "340px",
  justifyContent: "space-evenly",
  padding: "10px 0",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    minHeight: "240px",
  },
});

export const WelcomeTitleContainer = styled("div")({
  fontSize: "24px",
  fontWeight: "400",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    textAlign: "center",
  },
  
});

export const WelcomeTextContainer = styled("div")({
  fontSize: "16px",
  fontWeight: "300",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    textAlign: "center",
  },
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
  padding: "16px 0 12px 0",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
  },
});

export const BookItemsWrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
});

export const LoadMoreButton = styled(Button)({
  display: "block",
  margin: "10px auto 0",
  fontSize: "14px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
});

export const ButtonLoader = styled(CircularProgress)({
  margin: "0 auto",
  display: "block",
});
