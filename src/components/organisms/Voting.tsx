import { useState } from "react";
import { Tabs } from "components/molecules/Tabs";
import { colors } from "constants/common";
import classNames from "classnames";
import { ArrowRight } from "assets/ArrowRight";
import { Inbox } from "assets/Inbox";
import { Like } from "assets/Like";
import { Dislike } from "assets/Dislike";
import { LikeDislike } from "assets/LikeDislike";
import { getTabSVGColor } from "utils/helpers";
import { TBillVotesResponse, TVote } from "types/common";

enum ETabs {
  ALL = "all",
  YES = "yes",
  NO = "no",
  ABSTAINED = "abstained",
}

type TVotingSectionProps = {
  title: string;
  voters: TVote[];
  className?: string;
};

function VotingSection({ title, voters, className }: TVotingSectionProps) {
  return (
    <div className={classNames("col gap-3 bg-white", className)}>
      <h4 className="text-neutral950">{title}</h4>
      <div className="row flex-wrap gap-3">
        {voters?.map((voter) => (
          <div
            key={voter.voter_name}
            className="row justify-between items-center p-3 rounded-lg bg-grey flex-wrap"
          >
            <div className="gap-2 row items-center ">
              <img src={voter.image} className="w-8 h-8" />
              <div className="col text-start">
                <h6 className="text-sm">{voter.voter_name}</h6>
                <p className="text-neutral400">
                  {voter.role} &#183; {voter.date}
                </p>
              </div>
            </div>
            <ArrowRight
              width={12}
              height={12}
              className="rotate-[-45deg]"
              color={colors.neutral950}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Voting(props: TBillVotesResponse) {
  const {
    voters,
    votes_against = 0,
    votes_for = 0,
    abstained = 0,
  } = props ?? {};

  const [activeTab, setActiveTab] = useState<ETabs>(ETabs.ALL);

  function onChangeTab(value: string) {
    setActiveTab(value as ETabs);
  }

  const VOTING_TABS = [
    {
      value: ETabs.ALL,
      label: "All",
      leftIcon: <Inbox color={getTabSVGColor(activeTab === ETabs.ALL)} />,
    },
    {
      value: ETabs.YES,
      label: "Yes",
      leftIcon: <Like color={getTabSVGColor(activeTab === ETabs.YES)} />,
    },
    {
      value: ETabs.NO,
      label: "No",
      leftIcon: <Dislike color={getTabSVGColor(activeTab === ETabs.NO)} />,
    },
    {
      value: ETabs.ABSTAINED,
      label: "Abstained",
      leftIcon: (
        <LikeDislike color={getTabSVGColor(activeTab === ETabs.ABSTAINED)} />
      ),
    },
  ];

  const VOTING_SECTIONS = [
    {
      title: `Voted Yes (${votes_for})`,
      voters: voters?.voted_yes,
    },
    {
      title: `Voted No (${votes_against})`,
      voters: voters?.voted_no,
    },
    {
      title: `Abstained (${abstained})`,
      voters: voters?.abstained,
    },
  ];

  return (
    <div className="p-9 mt-6 bg-white">
      <h2 className="pb-6">How they Voted</h2>

      <Tabs
        tabs={VOTING_TABS}
        activeTab={activeTab}
        setActiveTab={onChangeTab}
        className="w-full"
      />
      {activeTab === ETabs.ALL ? (
        <div className="py-6">
          {VOTING_SECTIONS.map((votingSection, index) => (
            <div key={votingSection.title}>
              <VotingSection
                title={votingSection.title}
                voters={votingSection.voters}
              />
              {index !== VOTING_SECTIONS.length - 1 ? (
                <hr className="bg-neutral100 my-6" />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
      {activeTab === ETabs.YES ? (
        <VotingSection
          title={`Voted Yes (${votes_for})`}
          voters={voters?.voted_yes}
          className="py-6"
        />
      ) : null}
      {activeTab === ETabs.NO ? (
        <VotingSection
          title={`Voted No (${votes_against})`}
          voters={voters?.voted_no}
          className="py-6"
        />
      ) : null}
      {activeTab === ETabs.ABSTAINED ? (
        <VotingSection
          title={`Abstained (${abstained})`}
          voters={voters?.abstained}
          className="py-6"
        />
      ) : null}
    </div>
  );
}
