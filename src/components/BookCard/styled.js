import { styled } from "@mui/material";

import theme from "themeSettings";

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
  [theme.breakpoints.down("md")]: {
    width: "72px",
    padding: "8px",
    margin: "5px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "72px",
    padding: "8px",
    margin: "5px 8px",
  },
});

export const BookCardImage = styled("img")({
  width: "140px",
  height: "190px",
  boxSizing: "border-box",
  margin: "0 auto",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    width: "56px",
    height: "80px",
    marginBottom: "3px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "56px",
    height: "80px",
    marginBottom: "3px",
  },
});

export const BookCardCategory = styled("p")({
  fontWeight: "300",
  textDecoration: "underline",
  fontSize: "14px",
  lineHeight: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
    lineHeight: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
    lineHeight: "10px",
  },
});

export const BookCardTitle = styled("p")({
  fontWeight: "500",
  lineHeight: "20px",
  fontSize: "18px",
  margin: "10px 0",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
    lineHeight: "10px",
    margin: "3px 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
    lineHeight: "10px",
    margin: "3px 0",
  },
});

export const BookCardAuthors = styled("p")({
  fontWeight: "300",
  fontSize: "14px",
  lineHeight: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "6px",
    lineHeight: "8px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "6px",
    lineHeight: "8px",
  },
});
