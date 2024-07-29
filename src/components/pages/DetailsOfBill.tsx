import React, { lazy, Suspense, useState } from "react";
import senatemat from "assets/senate_mat.svg";
import { PageContainer } from "components/templates/PageContainer";
import { Tabs } from "components/molecules/Tabs";
import { Home2 } from "assets/Home2";
import { Chat } from "assets/Chat";
import { Activity } from "assets/Activity";
import { Clipboard } from "assets/Clipboard";
import { TickSquare } from "assets/TickSquare";
import { getTabSVGColor } from "utils/helpers";
import {
  ABSTAINED_VOTERS,
  NO_VOTERS,
  TOTAL_VOTERS_COUNT,
  YES_VOTERS,
} from "constants/common";
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
          <div className="flex-1 p-9 bg-white rounded-xl mb-6 basis-1/4">
            <h2
              style={{
                fontFamily: "Mulish",
                fontSize: "32px",
                fontWeight: 800,
                lineHeight: "38.4px",
                letterSpacing: "0.0025em",
                textAlign: "left",
                color: "#000000",
              }}
            >
              Secure the Border Act of 2023
            </h2>
            <p className="text-sm text-neutral600 mb-6">May 29, 2023</p>
            <p className="text-sm text-neutral600 mb-6">
              Security, Immigration, Borders
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Details</h3>
              <p>
                <strong>Legislative Type:</strong> Joint Resolution
              </p>
              <p>
                <strong>Bill Status:</strong> Passed
              </p>
              <p>
                <strong>Current Status:</strong> House Passage Report
              </p>
              <p>
                <strong>Amendments:</strong>
                <a href="#" className="text-primary">
                  2 Views
                </a>
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-extrabold">{TOTAL_VOTERS_COUNT}</p>
              <p className="text-lg text-neutral600">Votes for bill:</p>
              <div className="flex items-center mt-2">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block mr-2"></span>
                <p className="text-green-600">Votes for: {YES_VOTERS.length}</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-2"></span>
                <p className="text-red-600">
                  Votes against: {NO_VOTERS.length}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block mr-2"></span>
                <p className="text-yellow-600">
                  Abstained: {ABSTAINED_VOTERS.length}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <strong>Author:</strong>
              <div className="flex items-center mt-2">
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

          {/* Main Tabs */}
          <div className="flex-1 gap-6 basis-3/4">
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

            {activeTab === BILL_TAB.ASK_AI ? (
              <Suspense fallback={null}>
                <AskAi />
              </Suspense>
            ) : null}

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
