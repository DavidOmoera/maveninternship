import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

type TDashboardExploreProps = {
  icon?: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export function DashboardExplore({
  title,
  description,
  onClick,
  icon,
}: TDashboardExploreProps) {
  return (
    <button
      className="row items-center gap-6 bg-white py-7 px-9 max-w-[441px]"
      onClick={onClick}
    >
      {icon ? (
        <div className="w-36 h-20 col rounded-full justify-center items-center bg-accent50">
          <img src={icon} className="w-14" />
        </div>
      ) : null}
      <article className="col gap-2 text-left">
        <h3 className="text-neutral950 text-2xl font-extrabold">{title}</h3>
        <p className="text-neutral500 font-normal line-clamp-2">
          {description}
        </p>
      </article>
      <ChevronRightOutlinedIcon />
    </button>
  );
}
