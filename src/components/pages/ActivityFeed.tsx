import notification from "assets/notification.svg";
import message from "assets/message.svg";
import profilePicture from "assets/profile_picture.png";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export function ActivityFeed() {
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
    </div>
  );
}
