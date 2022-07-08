import { styled } from "@mui/material";

import layoutBackground from "assets/images/page-layout-background.jpg";

export const BookDetailsWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  padding: "70px 50px",
  margin: "0 150px",
  height: "490px",
  boxSizing: "border-box",
  background: "#f0f0f0", 
});

export const BookImageContainer = styled("div")({
  height: "330px",
  width: "250px",
  background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${layoutBackground}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxSizing: "border-box",
  border: "1px solid #000",
});

export const BookInfoWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  paddingLeft: "50px",
  height: "auto",
  width: "600px",
});

export const BookTitleContainer = styled("div")({
  fontSize: "36px",
  fontWeight: "300",
  margin: "15px 0",
});

export const BookAuthorsContainer = styled("div")({
  fontSize: "12px",
  margin: "0 0 10px 0",
  fontWeight: "300",
});

export const BookCategoriesContainer = styled("div")({
  fontWeight: "300",
  fontSize: "12px",
  margin: "5px 0",
  textDecoration: "underline",
});

export const BookDescriotionContainer = styled("div")({
  border: "1px solid #808080",
  margin: "10px 0",
  padding: "20px",
  height: "160px",
});
