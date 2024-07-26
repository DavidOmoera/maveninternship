import { watchedBills } from "constants/common";
import { Bill } from "./Bill";
import { Pill } from "components/molecules/Pill";
import filter from "assets/filter.svg";
import grid from "assets/grid.svg";

export function SimilarBills() {
  function onClickBill() {}

  return (
    <div>
      <div className="row justify-between my-9">
        <div className="row gap-2">
          <h4 className="text-neutral950">205</h4>
          <span className="text-neutral950 text-xl">Results found</span>
        </div>

        <div className="row items-center gap-6">
          <img src={grid} className="w-6 h-6" />
          <Pill
            icon={<img src={filter} />}
            text="Filter Result"
            containerClassName="row items-center rounded px-3 py-2 gap-1 bg-neutral50"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {watchedBills.map((bill) => (
          <Bill onClick={onClickBill} {...bill} />
        ))}
      </div>
    </div>
  );
}
