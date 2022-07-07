import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          height: "150px",
        }}
      >
        {"HEADER"}
      </div>
      <Outlet />
    </>
  );
};
// refactor { }

export default PageLayout;

// Outlet - то, что мы передаем в Route
