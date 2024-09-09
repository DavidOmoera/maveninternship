import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { PageContainer } from "components/templates/PageContainer";
import { Tabs } from "components/molecules/Tabs";
import { Home2 } from "assets/Home2";
import { Chat } from "assets/Chat";
import tagIcon from "assets/tag.svg";
import { Activity } from "assets/Activity";
import { Clipboard } from "assets/Clipboard";
import { TickSquare } from "assets/TickSquare";
import { getTabSVGColor } from "utils/helpers";
import { BILL_ID_PREFIX, colors } from "constants/common";
import { Routes } from "types/routes";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { TBill, TBillVotesResponse } from "types/common";
import defaultAvatar from "assets/profile_picture.jpg";
import dayjs from "dayjs";
import { getBillVotesRequest } from "api/billsApi";
const AboutBill = lazy(() =>
  import("components/organisms/AboutBill").then((module) => ({
    default: module.AboutBill,
  }))
);

const AskAi = lazy(() =>
  import("components/organisms/AskAi").then((module) => ({
    default: module.ASK_AI,
  }))
);

const BillDetailsMessageBox = lazy(() =>
  import("components/organisms/BillDetailsMessageBox").then((module) => ({
    default: module.BillDetailsMessageBox,
  }))
);

const VotingSummary = lazy(() =>
  import("components/organisms/VotingSummary").then((module) => ({
    default: module.VotingSummary,
  }))
);

const Voting = lazy(() =>
  import("components/organisms/Voting").then((module) => ({
    default: module.Voting,
  }))
);

const SimilarBills = lazy(() =>
  import("components/organisms/SimilarBills").then((module) => ({
    default: module.SimilarBills,
  }))
);

const BillSummary = lazy(() =>
  import("components/organisms/BillSummary").then((module) => ({
    default: module.BillSummary,
  }))
);

enum BILL_TAB {
  ABOUT = "About",
  ASK_AI = "Ask AI",
  SUMMARY = "Summary",
  SIMILAR_BILLS = "Similar Bills",
  VOTING = "Voting",
}

const TAGS = ["Security", "Borders", "Immigration"];

enum VOTE_CATEGORIES {
  "AGAINST" = "AGAINST",
  "ABSTAINED" = "ABSTAINED",
  "FOR" = "FOR",
}

const VOTES_SUMMARY = [
  { key: "Votes for", type: VOTE_CATEGORIES.FOR, iconColor: colors.success },
  {
    key: "Votes against",
    type: VOTE_CATEGORIES.AGAINST,
    iconColor: colors.error,
  },
  {
    key: "Abstained",
    type: VOTE_CATEGORIES.ABSTAINED,
    iconColor: colors.orange,
  },
];

function getVoteCountByType(votes: TBillVotesResponse, type: VOTE_CATEGORIES) {
  switch (type) {
    case VOTE_CATEGORIES.FOR:
      return votes.votes_for;
    case VOTE_CATEGORIES.AGAINST:
      return votes.votes_against;
    default:
      return votes.abstained;
  }
}

const HIDE = true;
const DetailsOfBill: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BILL_TAB>(BILL_TAB.ABOUT);
  const location = useLocation();
  const currentBill = location.state?.bill as TBill;
  const bill_id = currentBill?.id.replace(BILL_ID_PREFIX, "");
  const billAuthor = currentBill?.contributors.find?.(
    (contributor) => contributor.classification === "author"
  );

  const [authorAvatar, setAuthorAvatar] = useState<string>(
    billAuthor?.image as string
  );
  const [votesSummary, setVotesSummary] = useState<TBillVotesResponse>();

  const totalVoteCount = useMemo(() => {
    if (
      votesSummary?.abstained &&
      votesSummary.votes_against &&
      votesSummary.votes_for
    ) {
      return (
        votesSummary.abstained +
        votesSummary.votes_against +
        votesSummary.votes_for
      );
    }
    return 0;
  }, [
    votesSummary?.abstained,
    votesSummary?.votes_against,
    votesSummary?.votes_for,
  ]);

  const details = useMemo(
    () => [
      { key: "Legislative Type", value: "Joint Resolution", link: "" },
      { key: "Bill Status", value: currentBill.status, link: "" },
      // { key: "Current Status", value: "House Passage Report", link: "" },
      { key: "Amendments", value: "2 Views", link: Routes.DetailsOfBill },
    ],
    [currentBill.status]
  );

  function onChangeTab(value: string) {
    setActiveTab(value as BILL_TAB);
  }

  const BILL_TABS = [
    {
      value: BILL_TAB.ABOUT,
      label: "About",
      leftIcon: <Home2 color={getTabSVGColor(activeTab === BILL_TAB.ABOUT)} />,
    },
    {
      value: BILL_TAB.ASK_AI,
      label: "Ask AI",
      leftIcon: <Chat color={getTabSVGColor(activeTab === BILL_TAB.ASK_AI)} />,
    },
    {
      value: BILL_TAB.SUMMARY,
      label: "Summary",
      leftIcon: (
        <Activity color={getTabSVGColor(activeTab === BILL_TAB.SUMMARY)} />
      ),
    },
    {
      value: BILL_TAB.SIMILAR_BILLS,
      label: "Similar Bills",
      leftIcon: (
        <Clipboard
          color={getTabSVGColor(activeTab === BILL_TAB.SIMILAR_BILLS)}
        />
      ),
    },
    {
      value: BILL_TAB.VOTING,
      label: "Voting",
      leftIcon: (
        <TickSquare color={getTabSVGColor(activeTab === BILL_TAB.VOTING)} />
      ),
    },
  ];

  function showBillSummary() {
    setActiveTab(BILL_TAB.SUMMARY);
  }

  useEffect(() => {
    if (bill_id) {
      getBillVotesRequest({ bill_id }).then((res) => {
        setVotesSummary(res.data);
      });
    }
  }, [bill_id]);

  return (
    <PageContainer title={currentBill?.title} className="col h-full">
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-9">
        <div className="w-full flex flex-wrap gap-4">
          {/* Bill Details Section */}
          <div className="flex-1 p-6 bg-white rounded-xl mb-6 min-w-[320px]">
            <h2 className="text-neutral950 font-extrabold pb-6 line-clamp-1">
              {currentBill?.title}
            </h2>
            <p className="text-sm text-neutral950">
              {dayjs(currentBill.latest_action_date).format("MMMM DD, YYYY")}
            </p>
            {HIDE ? null : (
              <div className="row items-center gap-3 flex-wrap mt-2">
                {TAGS.map((tag) => (
                  <div key={tag} className="row gap-1 items-center">
                    <img src={tagIcon} className="w-4 h-4" />
                    <p className="text-xs text-neutral500">{tag}</p>
                  </div>
                ))}
              </div>
            )}

            <hr className="bg-neutral500 my-6" />

            <div>
              <h6 className="underline mb-3">Details</h6>
              <div className="col gap-2 ">
                {details.map((detail) => (
                  <div
                    key={detail.key}
                    className="row justify-between w-full flex-wrap"
                  >
                    <p className="text-sm text-neutral500">{detail.key}</p>
                    <h6
                      className={classNames("text-sm text-neutral950", {
                        "underline text-accent800 cursor-pointer":
                          !!detail.link,
                      })}
                      onClick={() => {}}
                    >
                      {detail.value}
                    </h6>
                  </div>
                ))}
              </div>
            </div>

            <hr className="bg-neutral500 my-6" />

            {/** Votes Summary */}
            <div className="bg-gray-50 p-6 rounded-xl">
              {votesSummary && (
                <>
                  <p className="text-5xl font-extrabold">{totalVoteCount}</p>
                  <h6 className="text-sm text-neutral400 mt-1">
                    Votes for bill:
                  </h6>
                  <div className="col gap-2 mt-5 mb-6">
                    {VOTES_SUMMARY.map((vote) => (
                      <div
                        key={vote.key}
                        className="row w-full justify-between items-center flex-wrap"
                      >
                        <div className="row gap-2 items-center flex-wrap">
                          <div
                            className="h-3 w-3 rounded-full border-2"
                            style={{ borderColor: vote.iconColor }}
                          />
                          <p className="text-sm text-neutral950">{vote.key}</p>
                        </div>
                        <h6 className="text-sm text-neutral950">
                          {getVoteCountByType(votesSummary, vote.type)}
                        </h6>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div>
                <strong>Author:</strong>
                <div className="flex items-center mt-3 py-2 bg-white">
                  <img
                    src={authorAvatar}
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-3"
                    onError={() => {
                      setAuthorAvatar(defaultAvatar);
                    }}
                  />
                  <div>
                    <p className="font-bold">{billAuthor?.name}</p>
                    <p className="text-neutral600">{billAuthor?.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Tabs */}
          <div className="flex-1 gap-6 basis-2/3 ">
            <div className="flex-1 py-9 px-5 lg:px-9 bg-white rounded-xl">
              {/* Navigation Bar */}
              <Tabs
                tabs={BILL_TABS}
                activeTab={activeTab}
                setActiveTab={onChangeTab}
                className="w-full mb-9"
              />

              {activeTab === BILL_TAB.ABOUT ? (
                <Suspense fallback={null}>
                  <AboutBill showBillSummary={showBillSummary} />
                </Suspense>
              ) : null}
              {activeTab === BILL_TAB.ASK_AI ? (
                <Suspense fallback={null}>
                  <AskAi />
                </Suspense>
              ) : null}
              {activeTab === BILL_TAB.SUMMARY ? (
                <Suspense fallback={null}>
                  <BillSummary billId={bill_id} title={currentBill.title} />
                </Suspense>
              ) : null}
              {activeTab === BILL_TAB.SIMILAR_BILLS ? (
                <Suspense fallback={null}>
                  <SimilarBills />
                </Suspense>
              ) : null}
              {activeTab === BILL_TAB.VOTING ? (
                <Suspense fallback={null}>
                  <VotingSummary />
                </Suspense>
              ) : null}
            </div>

            {/* Message Box */}
            {activeTab === BILL_TAB.ABOUT ? (
              <Suspense fallback={null}>
                <BillDetailsMessageBox />
              </Suspense>
            ) : null}
            {activeTab === BILL_TAB.VOTING ? (
              <Suspense fallback={null}>
                <Voting />
              </Suspense>
            ) : null}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DetailsOfBill;
