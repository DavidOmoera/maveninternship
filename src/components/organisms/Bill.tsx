import { Pill } from "components/molecules/Pill";
import { watchedBills } from "constants/common";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

type TBillProps = { onClick: () => void } & (typeof watchedBills)[0];

export function Bill({
  title,
  description,
  state,
  status,
  relativeTime,
  onClick,
}: TBillProps) {
  return (
    <div
      key={state}
      className="max-w-[349px] h-[245px] px-4 pt-5 cursor-pointer"
      onClick={onClick}
      style={{ boxShadow: "0px 0px 10px 0px #7979791A" }}
    >
      <div className="row justify-between items-center">
        <Pill text={state} textClass="font-semibold text-primary text-sm" />
        <MoreHorizOutlinedIcon />
      </div>

      <h4 className="line-clamp-2 py-2">{title}</h4>
      <div className="row justify-between items-center pb-3">
        <h6 className="text-primary text-sm font-semibold">{status}</h6>
        <p className="text-neutral500 text-xs line-clamp-3">{relativeTime}</p>
      </div>

      <p className="text-sm text-neutral500">{description}</p>
    </div>
  );
}
