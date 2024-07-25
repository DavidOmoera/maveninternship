import React from "react";
import { useNavigate } from "react-router-dom";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import message from "assets/message.svg";
import notification from "assets/notification.svg";
import profilePicture from "assets/profile_picture.png";
import aboutIcon from "assets/about_icon.svg"; // Add the necessary icons
import askAIIcon from "assets/ask_ai_icon.svg";
import summaryIcon from "assets/summary_icon.svg";
import similarBillsIcon from "assets/similar_bills_icon.svg";
import votingIcon from "assets/voting_icon.svg";
import sendIcon from "assets/send_icon.svg"; // Add the send icon
import chatboxicon from "assets/chatbox_icon.svg";
import senatemat from "assets/senate_mat.svg";
import { Button } from "components/atoms/Button";
import { ArrowRight } from "assets/ArrowRight";
import download from "assets/download.svg";

const DetailsOfBill: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="col h-full">
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

          {/* Introduction Section */}
          <div className="flex-1 p-9 bg-white rounded-xl mb-6 basis-3/4">
            {/* Navigation Bar */}
            <div className="flex mt-6 mb-6 space-x-4 text-neutral600">
              <div className="flex items-center cursor-pointer">
                <img src={aboutIcon} className="h-6 w-6 mr-2" alt="About" />
                <span className="font-semibold">About</span>
              </div>
              <div className="flex items-center cursor-pointer">
                <img src={askAIIcon} className="h-6 w-6 mr-2" alt="Ask AI" />
                <span className="font-semibold">Ask AI</span>
              </div>
              <div className="flex items-center cursor-pointer">
                <img src={summaryIcon} className="h-6 w-6 mr-2" alt="Summary" />
                <span className="font-semibold">Summary</span>
              </div>
              <div className="flex items-center cursor-pointer">
                <img
                  src={similarBillsIcon}
                  className="h-6 w-6 mr-2"
                  alt="Similar Bills"
                />
                <span className="font-semibold">Similar Bills</span>
              </div>
              <div className="flex items-center cursor-pointer">
                <img src={votingIcon} className="h-6 w-6 mr-2" alt="Voting" />
                <span className="font-semibold">Voting</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Introduction</h3>
              <Button
                variant="secondary"
                text="Download Bill"
                leftIcon={<img src={download} className="w-4 h-4" />}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique lectus non quam euismod cursus. Nam eleifend, urna in
              pretium posuere, massa dui sagittis nulla, molestie mollis mi leo
              vel neque. Nunc gravida tristique orci at hendrerit. Sed erat
              elit, egestas a nisl vel, gravida vehicula magna.
            </p>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-bold">Skip the Jargon!</h4>

                <p className="text-neutral600">
                  Read Coterie AI's Summary instead.
                </p>
              </div>
              <Button rightIcon={<ArrowRight />} text="View Summary" />
            </div>

            {/* Message Box */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfBill;
