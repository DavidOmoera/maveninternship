import { useState } from "react";
import { Tabs } from "components/molecules/Tabs";
import {
  ABSTAINED_VOTERS,
  colors,
  NO_VOTERS,
  YES_VOTERS,
} from "constants/common";
import classNames from "classnames";
import { ArrowRight } from "assets/ArrowRight";
import { Inbox } from "assets/Inbox";
import { Like } from "assets/Like";
import { Dislike } from "assets/Dislike";
import { LikeDislike } from "assets/LikeDislike";
import { getTabSVGColor } from "utils/helpers";

enum ETabs {
  ALL = "all",
  YES = "yes",
  NO = "no",
  ABSTAINED = "abstained",
}

type TVotingSectionProps = {
  title: string;
  voters: {
    name: string;
    designation: string;
    dateVoted: string;
    profilePicture: string;
  }[];
  className?: string;
};

function VotingSection({ title, voters, className }: TVotingSectionProps) {
  return (
    <div className={classNames("col gap-3 bg-white", className)}>
      <h4 className="text-neutral950">{title}</h4>
      <div className="row flex-wrap gap-3">
        {voters.map((voter) => (
          <div className="row justify-between items-center p-3 rounded-lg bg-grey">
            <div className="gap-2 row items-center">
              <img src={voter.profilePicture} className="w-8 h-8" />
              <div className="col text-start">
                <h6 className="text-sm">{voter.name}</h6>
                <p className="text-neutral400">
                  {voter.designation} &#183; {voter.dateVoted}
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

export function Voting() {
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
      title: `Voted Yes (${YES_VOTERS.length})`,
      voters: YES_VOTERS,
    },
    {
      title: `Voted No (${NO_VOTERS.length})`,
      voters: NO_VOTERS,
    },
    {
      title: `Abstained (${ABSTAINED_VOTERS.length})`,
      voters: ABSTAINED_VOTERS,
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
            <>
              <VotingSection
                title={votingSection.title}
                voters={votingSection.voters}
              />
              {index !== VOTING_SECTIONS.length - 1 ? (
                <hr className="bg-neutral100 my-6" />
              ) : null}
            </>
          ))}
        </div>
      ) : null}
      {activeTab === ETabs.YES ? (
        <VotingSection
          title={`Voted Yes (${YES_VOTERS.length})`}
          voters={YES_VOTERS}
          className="py-6"
        />
      ) : null}
      {activeTab === ETabs.NO ? (
        <VotingSection
          title={`Voted No (${NO_VOTERS.length})`}
          voters={NO_VOTERS}
          className="py-6"
        />
      ) : null}
      {activeTab === ETabs.ABSTAINED ? (
        <VotingSection
          title={`Abstained (${ABSTAINED_VOTERS.length})`}
          voters={ABSTAINED_VOTERS}
          className="py-6"
        />
      ) : null}
    </div>
  );
}
