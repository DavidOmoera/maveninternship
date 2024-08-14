import { useState } from "react";
import { Pill } from "components/molecules/Pill";
import { allBills } from "constants/common";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkRemoveOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

type TBillProps = { onClick: () => void } & (typeof allBills)[0];

export function BillCard({
  title,
  description,
  state,
  status,
  relativeTime,
  onClick,
  name,
  image,
  count1,
  count2,
  supporter1,
  supporter2,
  supporter3,
  supporter4,
  supporter5,
  supporter6,
}: TBillProps) {
  const [isWatched, setIsWatched] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleWatch = () => {
    setIsWatched(!isWatched);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      key={state}
      className="max-w-[474px] h-auto cursor-pointer mb-6 mt-10 rounded-xl bg-gray-100 shadow-4xl relative"
      onClick={onClick}
      style={{ boxShadow: "1px 1px 10px 0px #7979791A" }}
    >
      <div className="row justify-between items-center px-3 bg-white">
        <Pill text={state} textClass="font-semibold text-blue-600 text-sm" />
        <p className="text-neutral500 text-xs">{relativeTime}</p>
      </div>

      <div className="px-4 bg-white pb-1">
        <h4 className="line-clamp-2 py-2 font-bold text-xl">{title}</h4>
        <h6 className="text-blue-600 text-sm font-semibold mb-2 -mt-1">
          {status}
        </h6>
        <p className="text-sm text-neutral500 ">
          {isExpanded ? description : `${description.slice(0, 200)}`}
          {description.length > 200 && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={handleToggleExpand}
            >
              {isExpanded ? "..show less" : "...show more"}
            </span>
          )}
        </p>
        <div className="flex justify-end mt-2">
          <div className="flex items-center gap-2 hover:bg-blue-50 rounded-lg p-1">
            {isWatched ? (
              <BookmarkRemoveOutlinedIcon
                sx={{ color: "red", marginRight: "-10px" }}
              />
            ) : (
              <BookmarkAddOutlinedIcon
                sx={{ color: "#0C0853", marginRight: "-10px" }}
              />
            )}
            <button
              onClick={handleToggleWatch}
              className={`text-sm py-2 px-1 font-semibold ${
                isWatched ? "text-red-600" : "text-blue-600"
              } bg-transparent focus:outline-none focus:ring-0 hover:border-none`}
            >
              {isWatched
                ? "Remove from watched bills"
                : "Add to my watched bills"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-3">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-12 h-12 rounded-xl" />
          <div className="ml-3">
            <h4 className="text-sm font-bold">{name}</h4>
          </div>
        </div>
        <div className="flex space-x-2 rounded-b-3xl">
          <div className="flex items-center">
            <img src={supporter1} alt="supporter" className="w-6 h-6 " />
            <img
              src={supporter2}
              alt="supporter"
              className="w-6 h-6 hidden lg:block"
            />
            <img
              src={supporter3}
              alt="supporter"
              className="w-6 h-6 hidden lg:block"
            />
            <p className=" text-xs font-bold">{count1}</p>
          </div>
          <span className="bg-gray-200 h-full w-1 border rounded-full"></span>
          <div className="flex items-center">
            <img src={supporter4} alt="supporter" className="w-6 h-6 " />
            <img
              src={supporter5}
              alt="supporter"
              className="w-6 h-6 hidden lg:block"
            />
            <img
              src={supporter6}
              alt="supporter"
              className="w-6 h-6 hidden lg:block"
            />
            <p className="ml-1 text-xs font-bold">{count2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
