import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "types/routes";

export function UnauthenticatedRoot() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === Routes.Home) navigate(Routes.Login);
  }, [location.pathname, navigate]);

  return (
    <main className="md:flex md:flex-row h-full w-full">
      {/** On small devices, hide side image  */}
      <aside className="hidden md:flex md:basis-[33.3%] bg-accent500" />

      {/** Content */}
      <div className="md:basis-[66.7%]">
        <Outlet />
      </div>
    </main>
  );
}
