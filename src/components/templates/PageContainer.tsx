import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import notification from "assets/notification.svg";
import profilePicture from "assets/rep18.svg";
import { Routes } from "types/routes";
import classNames from "classnames";
import { ArrowRight } from "assets/ArrowRight";
import { colors } from "constants/common";
import { Notifications } from "components/organisms/Notifications";
import { NotificationSettings } from "components/organisms/NotificationSettings";


type TPageContainerProps = { title: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export function PageContainer({
  title,
  children,
  ...props
}: TPageContainerProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isBackButtonHidden = location.pathname === Routes.Dashboard;
  const [OpenNotificationStatusDialog, setOpenNotificationStatusDialog] =
    useState(false);
  const handleOpenNotificationStatusDialog = () =>
    setOpenNotificationStatusDialog(true);
  const handleCloseNotificationStatusDialog = () =>
    setOpenNotificationStatusDialog(false);

  const [OpenNotificationSettingsDialog, setOpenNotificationSettingsDialog] =
    useState(false);
  const handleOpenNotificationSettingsDialog = () => {
    setOpenNotificationSettingsDialog(true);
    handleCloseNotificationStatusDialog();
  };
  const handleCloseNotificationSettingsDialog = () => {
    setOpenNotificationSettingsDialog(false);
    handleOpenNotificationStatusDialog();
  };

  function onClickBack() {
    navigate(Routes.Dashboard);
  }

  function goToProfile() {
    navigate(Routes.Profile);
  }

  useEffect(() => {
    if (location.pathname) window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div {...props}>
      <div className="bg-white rounded-xl px-9 py-6 mb-4 mx-9 mt-9 flex items-center justify-between">
        <div
          className={classNames("row items-center", {
            "gap-3": !isBackButtonHidden,
          })}
        >
          {!isBackButtonHidden ? (
            <ArrowRight
              width={24}
              height={24}
              color={colors.neutral950}
              className="rotate-180 cursor-pointer"
              onClick={onClickBack}
            />
          ) : null}
          <h1 className="text-neutral950 font-extrabold text-4xl">{title}</h1>
        </div>
        <div className="row gap-6">
          <div className="row gap-3">
            <img
              src={notification}
              onClick={handleOpenNotificationStatusDialog}
              className="cursor-pointer"
              alt="Notification"
            />
          </div>
          <div
            className="row gap-3 items-center cursor-pointer"
            onClick={goToProfile}
          >
            <img
              src={profilePicture}
              alt="Profile"
              className="w-12 h-12 object-cover rounded"
            />
            <article className="col gap-1">
              <h6 className="text-neutral950 font-bold">Seth Rogan</h6>
              <p>
                <span className="text-neutral600 text-sm font-medium">
                  Coterie
                </span>
                <span className="text-primary text-sm font-extrabold pl-1">
                  Pro
                </span>
              </p>
            </article>
          </div>
        </div>
      </div>
      {children}
      <Notifications
        open={OpenNotificationStatusDialog}
        onClose={handleCloseNotificationStatusDialog}
        onClickSettings={handleOpenNotificationSettingsDialog}
      />
      <NotificationSettings
        open={OpenNotificationSettingsDialog}
        onClose={handleCloseNotificationSettingsDialog}
      />
    </div>
  );
}
