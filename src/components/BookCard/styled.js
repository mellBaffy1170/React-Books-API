import { styled } from "@mui/material";

export const BookCardWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  width: "210px",
  backgroundColor: "#FCFCFC",
  boxShadow:
    "-4px 4px 8px rgba(191, 191, 191, 0.2), 4px -4px 8px rgba(191, 191, 191, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.9), 4px 4px 10px rgba(191, 191, 191, 0.9)",
  padding: "20px",
  margin: "20px 30px",

  transition: "transform .2s",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "all .2s",
    boxShadow: "-7px 7px 14px rgba(211, 211, 211, 0.2), 7px -7px 14px rgba(211, 211, 211, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(211, 211, 211, 0.9)",
  },
});

export const BookCardImage = styled("img")({
  width: "140px",
  height: "190px",
  boxSizing: "border-box",
  margin: "0 auto",
  marginBottom: "10px",
});

export const BookCardCategory = styled("p")({
  fontWeight: "300",
  textDecoration: "underline",
  fontSize: "14px",
  lineHeight: "20px",
});

export const BookCardTitle = styled("p")({
  fontWeight: "500",
  lineHeight: "20px",
  fontSize: "18px",
  margin: "10px 0",
});

export const BookCardAuthors = styled("p")({
  fontWeight: "300",
  fontSize: "14px",
  lineHeight: "16px",
});
