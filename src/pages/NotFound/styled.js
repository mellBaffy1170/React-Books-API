import { styled } from "@mui/material";

import { ActionButton } from "components/ActionButton";
import theme from "themeSettings";

export const ErrorContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "0 48px 0 0",
  [theme.breakpoints.down("md")]: {
    margin: "0",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0",
  },
});

export const ErrorTitle = styled("div")({
  fontSize: "40px",
  margin: "8px",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
});

export const ErrorMessage = styled("div")({
  fontSize: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});

export const ImageContainer = styled("div")({
  width: "512px",
  [theme.breakpoints.down("md")]: {
    width: "320px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
  },
});

export const NotFoundWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "relative",
  transform: "translateY(50%)",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
});

export const BackButton = styled(ActionButton)({
  margin: "16px",
  [theme.breakpoints.down("md")]: {
    margin: "10px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "8px",
    fontSize: "12px",
  },
});
