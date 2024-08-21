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
          <div className="row items-center flex-wrap">
            <h4 className="w-28">Voted Yes</h4>
            <div className="w-full lg:w-64">
              <div className="row justify-end items-center px-3 py-2 gap-1 rounded-3xl w-full lg:w-64 bg-success">
                <h5 className="text-white text-sm lg:text-base">
                  {YES_VOTERS.length} votes
                </h5>
                <TickCircle color={colors.white} />
              </div>
            </div>
          </div>
          <div className="row items-center flex-wrap">
            <h4 className="w-28">Voted No</h4>
            <div className="w-2/3 lg:w-64">
              <div className="row justify-end px-3 py-2 rounded-3xl wit-full lg:w-44 bg-error">
                <h5 className="text-white text-sm lg:text-base">
                  {NO_VOTERS.length} votes
                </h5>
              </div>
            </div>
          </div>
          <div className="row items-center flex-wrap">
            <h4 className="w-28">Abstained</h4>
            <div className="w-fit lg:w-64">
              <div className="row justify-end px-3 py-2 rounded-3xl w-fit bg-warning">
                <h5 className="text-white text-sm lg:text-base">
                  {ABSTAINED_VOTERS.length} votes
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
