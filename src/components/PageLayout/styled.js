import { styled } from "@mui/material";

import layoutBackground from "assets/images/page-layout-background.jpg";

export const HeadWrapper = styled("div")({
  background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${layoutBackground}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const HeadTitle = styled("p")({
  fontSize: "64px",
  color: "#fff",
  textAlign: "center",
  margin: "0 0 32px",
  fontWeight: "200",
});

export const SelectWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  width: "512px",
  margin: "20px 0",
});