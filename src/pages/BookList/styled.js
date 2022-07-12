import { styled, Button, CircularProgress } from "@mui/material";

export const BookListContainer = styled("div")({
    backgroundColor: "#FAFAFA",
    margin: "0 120px",
    padding: "16px 0 30px 0",
});

export const BookListTitle = styled("p")({
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "300",
    paddingBottom: "5px",
});

export const BookItemsWrapper = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
});

export const LoadMoreButton = styled(Button)({});

export const ButtonLoader = styled(CircularProgress)({});