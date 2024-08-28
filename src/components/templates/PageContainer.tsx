import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import notification from "assets/notification.svg";
import profilePicture from "assets/rep18.svg";
import { Routes } from "types/routes";
import classNames from "classnames";
import { ArrowRight } from "assets/ArrowRight";
import { colors } from "constants/common";
import { Notifications } from "components/organisms/Notifications";
import { NotificationSettings } from "components/organisms/NotificationSettings";
import { CoterieBot } from "assets/CoterieBot";
import { Modal } from "components/molecules/ChatModal";
import { Tooltip } from "@mui/material";
import { userDataSelector } from "store/slices/auth/selectors";
import { useAppSelector } from "utils/helpers";

type TPageContainerProps = {
  title: string;
  previousPageTitle?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export function PageContainer({
  title,
  previousPageTitle,
  children,
  ...props
}: TPageContainerProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = useAppSelector(userDataSelector);
  const isBackButtonHidden = location.pathname === Routes.Dashboard;

  // Chat with Bot modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    previousPageTitle ? navigate(-1) : navigate(Routes.Dashboard);
  }

  function goToProfile() {
    navigate(Routes.Profile);
  }

  return (
    <div {...props}>
      <div className="bg-white rounded-xl px-9 py-6 mb-4 mx-9 mt-9 flex items-center justify-between">
        <div
          className={classNames("row items-center ml-8 md:ml-0", {
            "gap-3": !isBackButtonHidden,
          })}
        >
          {!isBackButtonHidden ? (
            <ArrowRight
              width={24}
              height={24}
              color={colors.neutral950}
              className="hidden rotate-180 cursor-pointer md:flex"
              onClick={onClickBack}
            />
          ) : null}
          <div className="row gap-2">
            <h1 className="text-base text-neutral950 font-extrabold md:text-2xl lg:text-4xl">
              {title}
            </h1>
            {previousPageTitle ? (
              <>
                <h1 className="text-neutral500 font-bold text-4xl">/</h1>
                <h1 className="text-neutral500 font-medium text-4xl">
                  {previousPageTitle}
                </h1>
              </>
            ) : null}
          </div>
        </div>
        <div className="row gap-6">
          <div className="row gap-3 items-center -mr-7 lg:mr-0 pr-2 lg:pr-0">
            <Tooltip title="Chat with Bot" placement="bottom">
              <div>
                <CoterieBot
                  className="w-4 -mr-2 cursor-pointer lg:w-6 lg:mr-2"
                  color="blue"
                  onClick={handleOpenModal}
                />
              </div>
            </Tooltip>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
            <Tooltip title="Notifications" placement="bottom">
              <img
                src={notification}
                onClick={handleOpenNotificationStatusDialog}
                className="cursor-pointer w-8 lg:w-12"
                alt="Notification"
              />
            </Tooltip>
          </div>
          <div
            className="row gap-3 items-center cursor-pointer"
            onClick={goToProfile}
          >
            <img
              src={userData?.avatar ?? profilePicture}
              alt="Profile"
              className="w-8 h-8 object-cover rounded md:w-12 md:h-12"
            />
            <article className="col gap-1">
              <h6 className="text-neutral950 font-bold text-sm lg:text-base">
                {userData?.first_name ?? "Seth"}{" "}
                {userData?.last_name ?? "Rogan"}
              </h6>
              <p>
                <span className="text-primary text-sm font-extrabold pl-1">
                  {userData?.subscription_plan ?? "Pro"}
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
