import ActionButton from "./ActionButton";

const ActionButtonContainer = ({
  variant,
  children,
  handleClick,
  ...others
}) => {
  return (
    <ActionButton
      content={children}
      variant={variant}
      handleClick={handleClick}
      {...others}
    />
  );
};

export default ActionButtonContainer;
