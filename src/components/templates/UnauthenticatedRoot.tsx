import { Outlet } from "react-router-dom";

export function UnauthenticatedRoot() {
  return (
    <>
      {/** Hide side image small devices */}
      <aside className="hidden md:flex" />

      {/** Content */}
      <Outlet />
    </>
  );
}
