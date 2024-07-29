import { TickCircle } from "assets/TickCircle";
import { TickSquare } from "assets/TickSquare";
import {
  ABSTAINED_VOTERS,
  colors,
  NO_VOTERS,
  TOTAL_VOTERS_COUNT,
  YES_VOTERS,
} from "constants/common";

export function VotingSummary() {
  return (
    <div className="row mt-12 gap-9">
      <div className="col items-start rounded-xl py-6 px-5 bg-neutral50">
        <div className="gap-1 row items-center">
          <h6 className="font-medium text-primary">Total Votes</h6>
          <TickSquare width={16} height={16} />
        </div>
        <h1 className="text-5xl text-primary">{TOTAL_VOTERS_COUNT}</h1>
      </div>
      <div className="bg-neutral100 h-full w-[1px]" />
      <div className="col">
        <h5>Votes</h5>
        <hr className="bg-neutral-50 w-full my-4" />

        <div className="col gap-2">
          <div className="row gap-3 items-center">
            <h4>Voted Yes</h4>
            <div className="row justify-end items-center px-3 py-2 gap-1 rounded-3xl w-52 bg-success">
              <h5 className="text-white">{YES_VOTERS.length} votes</h5>
              <TickCircle color={colors.white} />
            </div>
          </div>
          <div className="row gap-3 items-center">
            <h4>Voted No</h4>
            <div className="row justify-end px-3 py-2 rounded-3xl w-28 bg-error">
              <h5 className="text-white">{NO_VOTERS.length} votes</h5>
            </div>
          </div>
          <div className="row gap-3 items-center">
            <h4>Abstained</h4>
            <div className="row justify-end px-3 py-2 rounded-3xl w-22 bg-warning">
              <h5 className="text-white">{ABSTAINED_VOTERS.length} votes</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
