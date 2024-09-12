import { TickCircle } from "assets/TickCircle";
import { TickSquare } from "assets/TickSquare";
import { colors } from "constants/common";
import { useMemo } from "react";

type TVotingSummaryProps = {
  totalVotes: number;
  yesVotes: number;
  noVotes: number;
  abstained: number;
};

enum EVoteType {
  YES = "YES",
  NO = "NO",
  ABSTAINED = "ABSTAINED",
}

export function VotingSummary({
  totalVotes,
  yesVotes,
  noVotes,
  abstained,
}: TVotingSummaryProps) {
  const mostVotes = useMemo(() => {
    let tempGreatest;

    if (yesVotes > noVotes && yesVotes > abstained)
      tempGreatest = EVoteType.YES;
    if (noVotes > yesVotes && noVotes > abstained) tempGreatest = EVoteType.NO;
    if (abstained > yesVotes && abstained > noVotes)
      tempGreatest = EVoteType.ABSTAINED;
    return tempGreatest;
  }, [abstained, noVotes, yesVotes]);

  return (
    <div className="row mt-12 gap-9">
      <div className="col items-start rounded-xl py-6 px-5 bg-neutral50">
        <div className="gap-1 row items-center">
          <h6 className="font-medium text-primary">Total Votes</h6>
          <TickSquare width={16} height={16} />
        </div>
        <h1 className="text-5xl text-primary">{totalVotes}</h1>
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
                  {yesVotes} votes
                </h5>
                {mostVotes === EVoteType.YES ? (
                  <TickCircle color={colors.white} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row items-center flex-wrap">
            <h4 className="w-28">Voted No</h4>
            <div className="w-2/3 lg:w-64">
              <div className="row justify-end px-3 py-2 rounded-3xl wit-full lg:w-44 bg-error">
                <h5 className="text-white text-sm lg:text-base">
                  {noVotes} votes
                </h5>
                {mostVotes === EVoteType.NO ? (
                  <TickCircle color={colors.white} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row items-center flex-wrap">
            <h4 className="w-28">Abstained</h4>
            <div className="w-fit lg:w-64">
              <div className="row justify-end px-3 py-2 rounded-3xl w-fit bg-warning">
                <h5 className="text-white text-sm lg:text-base">
                  {abstained} votes
                </h5>
                {mostVotes === EVoteType.ABSTAINED ? (
                  <TickCircle color={colors.white} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
