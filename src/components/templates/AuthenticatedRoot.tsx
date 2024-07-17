import { Outlet } from "react-router-dom";

export function AuthenticatedRoot() {
  return (
    <>
      <nav />
      <aside />
      <Outlet />
      <footer />
    </>
  );
}
