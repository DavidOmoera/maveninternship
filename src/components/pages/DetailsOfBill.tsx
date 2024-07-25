import React, { lazy, Suspense, useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import message from "assets/message.svg";
import notification from "assets/notification.svg";
import profilePicture from "assets/profile_picture.png";
import sendIcon from "assets/send_icon.svg";
import chatboxicon from "assets/chatbox_icon.svg";
import senatemat from "assets/senate_mat.svg";
import { PageContainer } from "components/templates/PageContainer";
import { Tabs } from "components/molecules/Tabs";
import { colors } from "constants/common";
import { Home2 } from "assets/Home2";
import { Chat } from "assets/Chat";
import { Activity } from "assets/Activity";
import { Clipboard } from "assets/Clipboard";
import { TickSquare } from "assets/TickSquare";
const AboutBill = lazy(() =>
  import("components/organisms/AboutBill").then((module) => ({
    default: module.AboutBill,
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

  function getSVGColor(tab: string) {
    return tab === activeTab ? colors.primary : colors.neutral500;
  }

  const BILL_TABS = [
    {
      value: BILL_TAB.ABOUT,
      label: "About",
      leftIcon: <Home2 color={getSVGColor(BILL_TAB.ABOUT)} />,
    },
    {
      value: BILL_TAB.ASK_AI,
      label: "Ask AI",
      leftIcon: <Chat color={getSVGColor(BILL_TAB.ASK_AI)} />,
    },
    {
      value: BILL_TAB.SUMMARY,
      label: "Summary",
      leftIcon: <Activity color={getSVGColor(BILL_TAB.SUMMARY)} />,
    },
    {
      value: BILL_TAB.SIMILAR_BILLS,
      label: "Similar Bills",
      leftIcon: <Clipboard color={getSVGColor(BILL_TAB.SIMILAR_BILLS)} />,
    },
    {
      value: BILL_TAB.VOTING,
      label: "Voting",
      leftIcon: <TickSquare color={getSVGColor(BILL_TAB.VOTING)} />,
    },
  ];

  return (
    <PageContainer className="col h-full">
      {/* Header */}
      <div className="bg-white rounded-xl px-9 py-6 mb-4 mx-9 mt-9 flex items-center justify-between">
        <h1 className="text-neutral950 font-extrabold text-4xl">H.RES.964</h1>
        <div className="row gap-6">
          <div className="row gap-3">
            <img src={message} className="cursor-pointer" alt="Message" />
            <img
              src={notification}
              className="cursor-pointer"
              alt="Notification"
            />
          </div>
          <div className="row gap-3 items-center">
            <img src={profilePicture} alt="Profile" />
            <article className="col gap-1">
              <h6 className="text-neutral950 font-bold">Anita Lever</h6>
              <p>
                <span className="text-neutral600 text-sm font-medium">
                  Coterie
                </span>
                <span className="text-primary text-sm font-extrabold">Pro</span>
              </p>
            </article>
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>

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
              <p className="text-4xl font-extrabold">34</p>
              <p className="text-lg text-neutral600">Votes for bill:</p>
              <div className="flex items-center mt-2">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block mr-2"></span>
                <p className="text-green-600">Votes for: 25</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-2"></span>
                <p className="text-red-600">Votes against: 9</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block mr-2"></span>
                <p className="text-yellow-600">Abstained: 2</p>
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
            </div>

            {/* Message Box */}
            {activeTab === BILL_TAB.ABOUT ? (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center">
                <img
                  src={chatboxicon}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <input
                  type="text"
                  placeholder="Message Coterie"
                  className="flex-1 p-2 bg-white border rounded-lg outline-none"
                  style={{ paddingRight: "3rem" }}
                />
                <button className="absolute right-3">
                  <img src={sendIcon} alt="Send" className="h-6 w-6" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DetailsOfBill;
