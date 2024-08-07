import { Dialog } from "@mui/material";
import CloseIcon from "assets/start.svg";
import SettingsIcon from "assets/setting-notif.svg";
import SenMat from "assets/sen-adams.svg";
import { Pill } from "components/molecules/Pill";

interface NotificationItems {
  title: string;
  status: string;
  time: string;
}
 
const notifications: NotificationItems[] = [
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "Level 1",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has been Rejected",
    status: "Rejected",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Signing",
    status: "Signing",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced been Passed",
    status: "Passed",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 2",
    status: "Level 2",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "Level 1",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "Level 1",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "Level 1",
    time: "2w ago",
  },
];

type TNotificationsProps = {
  open: boolean;
  onClose: () => void;
  onClickSettings: () => void;
};
export function Notifications({
  open,
  onClose,
  onClickSettings,
}: TNotificationsProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
        <div className="row justify-end">
          <Pill
            text="Close"
            rightIcon={
              <img src={CloseIcon} alt="Close Icon" className="mr-2" />
            }
            containerClassName="row items-center rounded-[2.37rem] px-3 py-2 gap-1 bg-neutral50 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <div className="flex items-center">
            <img
              src={SettingsIcon}
              alt="setting icon"
              className="cursor-pointer p-3"
              onClick={onClickSettings}
            />
          </div>
        </div>
        <hr className="mb-4" />
        <ul>
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="flex items-center py-4 border-b border-gray-200"
            >
              <div className="w-2 h-2 bg-blue-800 rounded-full mr-4"></div>
              <div className="flex-1">
                <p
                  className={`text-sm ${
                    notification.status === "Rejected"
                      ? "text-red-500"
                      : notification.status === "Passed"
                      ? "text-green-500"
                      : notification.status === "Signing"
                      ? "text-blue-800"
                      : ""
                  }`}
                >
                  <span className="font-bold text-blue-800">
                    Secure the Border Act of 2023
                  </span>{" "}
                  <span className="text-neutral950">
                    {notification.status === "Rejected" ||
                    notification.status === "Passed"
                      ? "has been"
                      : "has commenced to"}
                  </span>
                  <span
                    className={`font-bold ${
                      notification.status === "Rejected"
                        ? "text-red-500"
                        : notification.status === "Passed"
                        ? "text-green-500"
                        : notification.status === "Signing"
                        ? "text-blue-800"
                        : "text-blue-800"
                    }`}
                  >
                    {" "}
                    {notification.status}
                  </span>
                </p>
                <div className="flex items-center">
                  <img src={SenMat} alt="mat-photo" className="w-8 h-8 mr-2" />
                  <span className="text-gray-600 text-xs">Sen. Mat Adams</span>
                </div>
              </div>
              <span className="text-gray-500 text-xs">{notification.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </Dialog>
  );
}
