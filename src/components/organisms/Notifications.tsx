import { Dialog } from "@mui/material";
import CloseIcon from "assets/start.svg";
import SettingsIcon from "assets/setting-notif.svg";
import SenMat from "assets/senate_mat.svg";

interface NotificationItems {
  title: string;
  status: string;
  time: string;
}

const notifications: NotificationItems[] = [
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "default",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has been Rejected",
    status: "rejected",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Signing",
    status: "signing",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced been Passed",
    status: "passed",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 2",
    status: "level2",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "default",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "default",
    time: "2w ago",
  },
  {
    title: "Secure the Border Act of 2023 has commenced to Level 1",
    status: "default",
    time: "2w ago",
  },
];

type TNotificationsProps = { open: boolean };
export function Notifications({ open }: TNotificationsProps) {
  return (
    <Dialog open={open}>
      <div className="w-full max-w-sm p-4 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <div className="flex items-center">
            <img
              src={SettingsIcon}
              alt="setting icon"
              className="cursor-pointer"
            />
            <CloseIcon />
          </div>
        </div>

        <ul>
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="flex items-start py-2 border-b border-gray-200"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
              <img
                src={SenMat}
                alt="mat-photo"
                className="w-8 h-8 rounded-full mr-4"
              />
              <div className="flex-1">
                <p className="{`text-sm ${notification.status === 'rejected' ? 'text-red-500' : notification.status === 'passed' ? 'text-green-500' : notification.status === 'signing' ? 'text-blue-500' : ''}`}">
                  {notification.title}
                  <span className="block text-gray-600 text-xs">
                    Sen. Mat Adams
                  </span>
                </p>
              </div>
              <span className="text-gray-500 text-xs">{notification.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </Dialog>
  );
}
