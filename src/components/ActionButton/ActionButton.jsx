import { Button } from "@mui/material";

const ActionButton = ({ variant, content, handleClick, ...others }) => {
  return (
    <Button variant={variant || "contained"} onClick={handleClick} {...others}>
      {content}
    </Button>
  );
};

export default ActionButton;
