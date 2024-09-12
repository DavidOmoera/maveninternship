import { useState } from "react";
import { Pill } from "components/molecules/Pill";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkRemoveOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { Tooltip } from "@mui/material";
import defaultAvatar from "assets/profile_picture.jpg";
import { trackBill, untrackBill } from "store/slices/bill/thunks";
import { useAppDispatch } from "utils/helpers";

type TBillProps = {
  onClick: () => void;
  isListView: boolean;
  billType: string;
  chamber: string;
  year: number;
  isWatched: boolean;
  id: string;
  state: string;
  relativeTime: string;
  title: string;
  status: string;
  description: string;
  name: string;
  image: string;
  coAuthor1: string;
  coAuthor2: string;
  coAuthor3: string;
  supporter1: string;
  supporter2: string;
  supporter3: string;
  count1: string;
  count2: string;
};

function ContributorAvatar({
  imageUrl,
  alt,
}: {
  imageUrl?: string;
  alt?: string;
}) {
  const [avatar, setAvatar] = useState<string>(imageUrl as string);

  return (
    <img
      src={avatar}
      alt={alt}
      className="w-6 h-6 hidden lg:block"
      onError={() => {
        setAvatar(defaultAvatar);
      }}
    />
  );
}

function AuthorAvatar({ imageUrl, alt }: { imageUrl?: string; alt?: string }) {
  const [avatar, setAvatar] = useState<string>(imageUrl as string);

  return (
    <img
      src={avatar}
      alt={alt}
      className="w-12 h-12 rounded-xl"
      onError={() => {
        setAvatar(defaultAvatar);
      }}
    />
  );
}

export function GridCard({
  id,
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
  coAuthor1,
  coAuthor2,
  coAuthor3,
  supporter1,
  supporter2,
  supporter3,
  isWatched,
}: TBillProps) {
  const dispatch = useAppDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasCoauthors = !!coAuthor1 || !!coAuthor2 || !!coAuthor3;
  const hasSupporters = !!supporter1 || !!supporter2 || !!supporter3;

  const handleToggleWatch = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isWatched) {
      dispatch(untrackBill(id));
    } else {
      dispatch(trackBill(id));
    }
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      key={id}
      className="w-full lg:max-w-[474px] h-auto cursor-pointer mb-6 mt-10 rounded-xl bg-gray-100 shadow-4xl relative"
      style={{ boxShadow: "1px 1px 10px 0px #7979791A" }}
    >
      <div className="row justify-between items-center pt-3 px-3 bg-white">
        <Pill text={state} textClass="font-semibold text-blue-600 text-sm" />
        <p className="text-neutral500 text-xs capitalize">{relativeTime}</p>
      </div>

      <div className="px-4 bg-white pb-1 h-52">
        <h4 className="py-2 font-bold text-xl truncate" onClick={onClick}>
          {title}
        </h4>
        <h6 className="text-blue-600 text-sm font-semibold mb-2 -mt-1">
          {status}
        </h6>
        <p className="text-sm text-neutral500 h-16" onClick={onClick}>
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

      <div className="flex justify-between p-3 h-16">
        {name && (
          <Tooltip title="Author">
            <div className="flex items-center">
              <AuthorAvatar imageUrl={image} alt={name} />
              <div className="ml-3">
                <h4 className="text-sm font-bold">{name}</h4>
              </div>
            </div>
          </Tooltip>
        )}
        {hasCoauthors ||
          (hasSupporters && (
            <div className="flex space-x-2 rounded-b-3xl">
              {hasCoauthors && (
                <Tooltip title="Co-authors">
                  <div className="flex items-center">
                    {coAuthor1 && (
                      <ContributorAvatar imageUrl={coAuthor1} alt="Co-Author" />
                    )}
                    {coAuthor2 && (
                      <ContributorAvatar imageUrl={coAuthor2} alt="Co-Author" />
                    )}
                    {coAuthor3 && (
                      <ContributorAvatar imageUrl={coAuthor3} alt="Co-Author" />
                    )}
                    <p className="text-xs font-bold">{count1}</p>
                  </div>
                </Tooltip>
              )}
              {hasSupporters && (
                <>
                  <span className="bg-gray-200 h-full w-1 border rounded-full"></span>
                  <Tooltip title="Supporters">
                    <div className="flex items-center">
                      {supporter1 && (
                        <ContributorAvatar
                          imageUrl={supporter1}
                          alt="Supporter"
                        />
                      )}
                      {supporter2 && (
                        <ContributorAvatar
                          imageUrl={supporter2}
                          alt="Supporter"
                        />
                      )}
                      {supporter3 && (
                        <ContributorAvatar
                          imageUrl={supporter3}
                          alt="Supporter"
                        />
                      )}
                      <p className="ml-1 text-xs font-bold">{count2}</p>
                    </div>
                  </Tooltip>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export function ListCard({
  id,
  title,
  description,
  state,
  onClick,
  name,
  image,
  count1,
  count2,
  coAuthor1,
  coAuthor2,
  coAuthor3,
  supporter1,
  supporter2,
  supporter3,
  isWatched,
}: TBillProps) {
  const dispatch = useAppDispatch();
  const handleToggleWatch = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isWatched) {
      dispatch(untrackBill(id));
    } else {
      dispatch(trackBill(id));
    }
  };

  return (
    <div
      className="w-full mb-6 mt-2 p-4 rounded-xl bg-gray-100 shadow-lg grid gap-6 items-center sm:flex sm:flex-col xl:grid xl:grid-cols-12"
      style={{ boxShadow: "1px 1px 10px 0px #7979791A" }}
    >
      <div className="flex items-center xl:col-span-2">
        <AuthorAvatar imageUrl={image} alt={name} />
        <div className="ml-3">
          <h4 className="text-sm font-bold">{name}</h4>
        </div>
      </div>

      <div className="xl:col-span-6 xl:pr-2">
        <h4 className="text-xl font-bold mb-1" onClick={onClick}>
          {title}
        </h4>
        <Pill text={state} textClass="font-semibold text-blue-600 text-sm" />
        <p className="text-sm text-neutral500" onClick={onClick}>
          {description}
        </p>
      </div>

      <div className="flex flex-col items-start gap-2 xl:col-span-4 xl:pl-2">
        <div className="flex items-center gap-2">
          {coAuthor1 && (
            <ContributorAvatar imageUrl={coAuthor1} alt="Co-Author" />
          )}
          {coAuthor2 && (
            <ContributorAvatar imageUrl={coAuthor2} alt="Co-Author" />
          )}
          {coAuthor3 && (
            <ContributorAvatar imageUrl={coAuthor3} alt="Co-Author" />
          )}
          <p className="text-xs font-bold">{count1}</p>
        </div>
        <div className="flex items-center gap-2">
          {supporter1 && (
            <ContributorAvatar imageUrl={supporter1} alt="Supporter" />
          )}
          {supporter2 && (
            <ContributorAvatar imageUrl={supporter2} alt="Supporter" />
          )}
          {supporter3 && (
            <ContributorAvatar imageUrl={supporter3} alt="Supporter" />
          )}
          <p className="ml-1 text-xs font-bold">{count2}</p>
        </div>
        <button
          onClick={handleToggleWatch}
          className={`text-sm py-2 px-1 font-semibold ${
            isWatched ? "text-red-600" : "text-blue-600"
          } bg-transparent focus:outline-none focus:ring-0`}
        >
          {isWatched ? "Remove from watched bills" : "Add to my watched bills"}
        </button>
      </div>
    </div>
  );
}

export function BillCard(props: TBillProps) {
  return props.isListView ? <ListCard {...props} /> : <GridCard {...props} />;
}
