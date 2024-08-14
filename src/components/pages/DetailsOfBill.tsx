import React, { lazy, Suspense, useState } from "react";
import senatemat from "assets/senate_mat.svg";
import { PageContainer } from "components/templates/PageContainer";
import { Tabs } from "components/molecules/Tabs";
import { Home2 } from "assets/Home2";
import { Chat } from "assets/Chat";
import tagIcon from "assets/tag.svg";
import { Activity } from "assets/Activity";
import { Clipboard } from "assets/Clipboard";
import { TickSquare } from "assets/TickSquare";
import { getTabSVGColor } from "utils/helpers";
import {
  ABSTAINED_VOTERS,
  colors,
  NO_VOTERS,
  TOTAL_VOTERS_COUNT,
  YES_VOTERS,
} from "constants/common";
import { Routes } from "types/routes";
import classNames from "classnames";
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
const DETAILS = [
  { key: "Legislative Type", value: "Joint Resolution", link: "" },
  { key: "Bill Status", value: "Passed", link: "" },
  { key: "Current Status", value: "House Passage Report", link: "" },
  { key: "Amendments", value: "2 Views", link: Routes.DetailsOfBill },
];
const VOTES_SUMMARY = [
  { key: "Votes for", value: YES_VOTERS.length, iconColor: colors.success },
  { key: "Votes against", value: NO_VOTERS.length, iconColor: colors.error },
  {
    key: "Abstained",
    value: ABSTAINED_VOTERS.length,
    iconColor: colors.orange,
  },
];

const DetailsOfBill: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BILL_TAB>(BILL_TAB.ABOUT);

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

  return (
    <PageContainer title="H.RES.964" className="col h-full">
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-9 flex">
        <div className="w-full flex gap-4">
          {/* Bill Details Section */}
          <div className="flex-1 p-9 bg-white rounded-xl mb-6 basis-1/3">
            <h2 className="text-neutral950 font-extrabold pb-6">
              Secure the Border Act of 2023
            </h2>
            <p className="text-sm text-neutral950">May 29, 2023</p>

            <div className="row items-center gap-3 flex-wrap mt-2">
              {TAGS.map((tag) => (
                <div key={tag} className="row gap-1 items-center">
                  <img src={tagIcon} className="w-4 h-4" />
                  <p className="text-xs text-neutral500">{tag}</p>
                </div>
              ))}
            </div>

            <hr className="bg-neutral500 my-6" />

            <div>
              <h6 className="underline mb-3">Details</h6>
              <div className="col gap-2">
                {DETAILS.map((detail) => (
                  <div key={detail.key} className="row justify-between w-full">
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
              <p className="text-5xl font-extrabold">{TOTAL_VOTERS_COUNT}</p>
              <h6 className="text-sm text-neutral400 mt-1">Votes for bill:</h6>
              <div className="col gap-2 mt-5 mb-6">
                {VOTES_SUMMARY.map((vote) => (
                  <div
                    key={vote.key}
                    className="row w-full justify-between items-center"
                  >
                    <div className="row gap-2 items-center">
                      <div
                        className="h-3 w-3 rounded-full border-2"
                        style={{ borderColor: vote.iconColor }}
                      />
                      <p className="text-sm text-neutral950">{vote.key}</p>
                    </div>
                    <h6 className="text-sm text-neutral950">{vote.value}</h6>
                  </div>
                ))}
              </div>

              <div>
                <strong>Author:</strong>
                <div className="flex items-center mt-3 py-2 px-3 bg-white">
                  <img
                    src={senatemat}
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-bold">Sen. Mat Adams</p>
                    <p className="text-neutral600">Senator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Tabs */}
          <div className="flex-1 gap-6 basis-2/3">
            <div className="flex-1 p-9 bg-white rounded-xl">
              {/* Navigation Bar */}
              <Tabs
                tabs={BILL_TABS}
                activeTab={activeTab}
                setActiveTab={onChangeTab}
                className="w-full mb-9"
              />

              {activeTab === BILL_TAB.ABOUT ? (
                <Suspense fallback={null}>
                  <AboutBill />
                </Suspense>
              ) : null}
              {activeTab === BILL_TAB.ASK_AI ? (
                <Suspense fallback={null}>
                  <AskAi />
                </Suspense>
              ) : null}
              {activeTab === BILL_TAB.SUMMARY ? (
                <Suspense fallback={null}>
                  <BillSummary />
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
