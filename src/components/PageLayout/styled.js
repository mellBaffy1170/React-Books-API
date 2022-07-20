import { styled, Button, CircularProgress } from "@mui/material";

import layoutBackground from "assets/images/page-layout-background.jpg";
import theme from "themeSettings";

export const PageLayoutWrapper = styled("div")({});

export const HeadWrapper = styled("div")({
  background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${layoutBackground}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
    padding: "16px 32px",
    //justifyContent: "space-around",
  },
});

export const HeadTitle = styled("p")({
  fontSize: "64px",
  color: "#fff",
  textAlign: "center",
  margin: "0 0 32px",
  fontWeight: "200",
  [theme.breakpoints.down("md")]: {
    fontSize: "44px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    margin: "0 0 12px",
  },
});

export const SelectWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  width: "512px",
  margin: "20px 0",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    width: "218px",
  },
});

export const SubmitButton = styled(Button)({
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
  },
});

export const ButtonLoader = styled(CircularProgress)({});

export const FooterWrapper = styled("div")({
  background: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url('${layoutBackground}')`,
  backgroundSize: "cover",
  height: "100px",
});
