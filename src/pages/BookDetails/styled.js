import { CircularProgress, styled } from "@mui/material";

import theme from "themeSettings";

export const BookDetailsWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  padding: "70px 50px",
  margin: "0 150px",
  boxSizing: "border-box",
  background: "#f0f0f0",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
    margin: "0 72px",
    padding: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
    margin: "0",
    padding: "20px",
  },
});

export const BookImageContainer = styled("img")({
  height: "330px",
  width: "250px",
  boxSizing: "border-box",
  boxShadow:
    "-4px 4px 8px rgba(191, 191, 191, 0.2), 4px -4px 8px rgba(191, 191, 191, 0.5), -4px -4px 8px rgba(255, 255, 255, 0.9), 4px 4px 10px rgba(191, 191, 191, 0.9)",
  [theme.breakpoints.down("md")]: {
    height: "170px",
    width: "125px",
    marginRight: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "120px",
    width: "88px",
  },
});

export const BookInfoWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  paddingLeft: "50px",
  height: "auto",
  flexBasis: "100%",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "10px",
  },
});

export const BookTitleContainer = styled("div")({
  fontSize: "36px",
  fontWeight: "300",
  margin: "15px 0",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    margin: "10px 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    margin: "10px 0",
  },
});

export const BookAuthorsContainer = styled("div")({
  fontSize: "12px",
  margin: "0 0 10px 0",
  fontWeight: "300",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    margin: "0 0 8px 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    margin: "0 0 8px 0",
  },
});

export const BookCategoriesContainer = styled("div")({
  fontWeight: "300",
  fontSize: "12px",
  margin: "5px 0",
  textDecoration: "underline",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    margin: "0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    margin: "0",
  },
});

export const BookDescriptionContainer = styled("div")({
  border: "1px solid #808080",
  margin: "10px 0",
  padding: "20px 40px",
  flexBasis: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
    margin: "5px 0",
    padding: "10px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    margin: "5px 0",
    padding: "10px 20px",
  },
});

export const CircularLoader = styled(CircularProgress)({
  margin: "0 auto",
  padding: "160px 0",
  borderSizing: "border-box",
  display: "block",
});
