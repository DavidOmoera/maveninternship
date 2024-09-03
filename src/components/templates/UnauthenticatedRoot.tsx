import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "types/routes";
import sideImage from "assets/side_image.svg";
import BrowserStorageService from "utils/browserStorage";
import { BrowserStorageKeys } from "types/common";

export function UnauthenticatedRoot() {
  const token = BrowserStorageService.get(BrowserStorageKeys.AccessToken);

  if (token) {
    return <Navigate to={Routes.Dashboard} replace />;
  }

  return (
    <main className="md:flex md:flex-row w-full overflow-hidden">
      {/** On small devices, hide side image  */}
      <aside className="hidden md:flex md:basis-[33.3%] bg-accent500 h-screen">
        <img
          src={sideImage}
          alt="Side decoration"
          className="object-cover w-full h-full"
        />
      </aside>

      {/** Content */}
      <div className="md:basis-[66.7%] md:-mt-8">
        <Outlet />
      </div>
    </main>
  );
}
