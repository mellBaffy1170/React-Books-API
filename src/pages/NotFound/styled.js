import { styled } from "@mui/material";

import { ActionButton } from "components/ActionButton";

export const ErrorContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "0 48px 0 0",
});

export const ErrorTitle = styled("div")({
  fontSize: "40px",
  margin: "8px",
});

export const ErrorMessage = styled("div")({
  fontSize: "24px",
});

export const ImageContainer = styled("div")({
  width: "512px",
});

export const NotFoundWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "relative",
  transform: "translateY(50%)",
  justifyContent: "center",
});

export const BackButton = styled(ActionButton)({
  margin: "16px",
});
