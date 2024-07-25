import notification from "assets/notification.svg";
import message from "assets/message.svg";
import profilePicture from "assets/profile_picture.png";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useState } from "react";
import login from "assets/login.svg";
import logout from "assets/logout.svg";
import minuscirlce from "assets/minus-cirlce.svg";
import addcircle from "assets/add-circle.svg";
import archiveminus from "assets/archive-minus.svg";
import archiveadd from "assets/archive-add.svg";
import useredit from "assets/user-edit.svg";


export function ActivityFeed() {
  const [activityFilter, setActivityFilter] = useState("All activity");

  const activities = [
    {
      time: "20 mins ago",
      type: "Removed",
      label: "bill",
      link: "Secure the Border Act of 2023",
      icon: archiveminus,
    },
    {
      time: "4 hrs ago",
      type: "Added",
      label: "bill",
      link: "Secure the Border Act of 2023",
      icon: archiveadd,
    },
    {
      time: "Yesterday, 5:34 pm",
      type: "Edited",
      label: "Profile",
      link: "",
      icon: useredit,
    },
    {
      time: "Yesterday, 2:45 pm",
      type: "Removed",
      label: "Legislature",
      link: "Texas",
      icon: minuscirlce,
    },
    {
      time: "22/04/2023, 8:22 am",
      type: "Added",
      label: "Legislature",
      link: "Alaska",
      icon: addcircle,
    },
    {
      time: "21/04/2023, 8:19 am",
      type: "Logged in",
      label: "account",
      link: "",
      icon: login,
    },
    {
      time: "20/04/2023, 7:32 am",
      type: "Logged out",
      label: "account",
      link: "",
      icon: logout,
    },
    {
      time: "4w ago",
      type: "Removed",
      label: "bill",
      link: "Secure the Border Act of 2023",
      icon: archiveminus,
    },
    {
      time: "5w ago",
      type: "Added",
      label: "bill",
      link: "Secure the Border Act of 2023",
      icon: archiveadd,
    },
    {
      time: "6w ago",
      type: "Edited",
      label: "Profile",
      link: "",
      icon: useredit,
    },
    {
      time: "7w ago",
      type: "Removed",
      label: "Legislature",
      link: "Texas",
      icon: minuscirlce,
    },
    {
      time: "2 months ago",
      type: "Added",
      label: "Legislature",
      link: "Alaska",
      icon: addcircle,
    },
    {
      time: "3 months ago",
      type: "Logged in",
      label: "account",
      link: "",
      icon: login,
    },
    {
      time: "4 months ago",
      type: "Logged out",
      label: "account",
      link: "",
      icon: logout,
    },
  ];

  


  

  return (
    <div className="w-full h-screen p-8 bg-gray-100">
      <div className="bg-white rounded-xl px-9 py-6 mb-4 mx-9 mt-9 flex items-center justify-between">
        <h1 className="text-neutral950 font-extrabold text-4xl">
          Activity Feed
        </h1>
        <div className="row gap-6">
          <div className="row gap-3">
            <img src={message} className="cursor-pointer" />
            <img src={notification} className="cursor-pointer" />
          </div>
          <div className="row gap-3 items-center">
            <img src={profilePicture} />
            <article className="col gap-1">
              <h6 className="text-neutral950 font-bold">Anita Lever</h6>
              <p>
                <span className="text-neutral600 text-sm font-medium">
                  Coterie
                </span>{" "}
                <span className="text-primary text-sm font-extrabold">Pro</span>
              </p>
            </article>
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>

      <div className="h-screen p-8 px-9 py-6 mb-4 mx-9 mt-9 bg-white rounded-xl">
        <div className="flex flex-row justify-between">
          <div className="flex gap-4">
            <select
              value={activityFilter}
              onChange={(e) => setActivityFilter(e.target.value)}
              className="border bg-white border-gray p-2 rounded"
            >
              <option>Last 180 days</option>
              <option>Last 30 days</option>
              <option>Last 7 days</option>
            </select>

            <select
              value={activityFilter}
              onChange={(e) => setActivityFilter(e.target.value)}
              className="border bg-white border-gray p-2 rounded"
            >
              <option>All Activity</option>
              <option>Added a bill</option>
              <option>Removed a bill</option>
              <option>Edited Profile</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search Activity"
            className="border bg-white border-gray-300 p-2 rounded w-64"
          />
        </div>

        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex item-start gap-2">
                <span className="text-gray-500 text-sm text-justify">{activity.time}</span>

                <div className="flex items-center gap-2">
                  <span
                    className={`bg-${
                      activity.type === "Removed"
                        ? "red"
                        : activity.type === "Added"
                        ? "blue"
                        : activity.type === "Edited"
                        ? "gray"
                        : "gray"
                    }-200 p-1 rounded-full text-justify`}
                  >
                    <img
                      src={activity.icon}
                      alt={activity.icon}
                      className="w-4 h-4 text-justify"
                    />
                  </span>

                  <span className="text-gray-700 text-justify">
                    You{" "}
                    <strong
                      className={`text-${
                        activity.type === "Removed"
                          ? "red"
                          : activity.type === "Added"
                          ? "green"
                          : activity.type === "Edited"
                          ? "blue"
                          : "gray"
                      }-500 text-justify`}
                    >
                      {activity.type}
                    </strong>{" "}
                    {activity.label}
                    {activity.link && (
                      <a href="#" className="text-blue-500 ml-1 border-bg-blue border-blue text-justify">
                        {activity.link}
                      </a>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
