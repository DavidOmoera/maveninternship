import { ArrowRight } from "assets/ArrowRight";
import { Button } from "components/atoms/Button";
import download from "assets/download.svg";

const billTitle = "Secure the Border Act of 2023";

type TAboutBillProps = { showBillSummary: () => void };

export function AboutBill({ showBillSummary }: TAboutBillProps) {
  function onClickDownload() {
    const downloadButton = document.getElementById("download-bill");
    const billText = `
    ${billTitle}

    Author: Senator Mat Adams
    Legislative type: Joint Resolution
    Bill Status: Passed
    Current Status: House Passage Report
    Amendments: 2 views

    Voting
    Votes for: 18
    Votes against: 9
    Abstained: 2

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique lectus non quam euismod cursus. Nam eleifend, urna in pretium posuere, massa dui sagittis nulla, molestie mollis mi leo vel neque. Nunc gravida tristique orci at hendrerit. Sed erat elit, egestas a nisl vel, gravida vehicula magna.
    `;

    downloadButton?.setAttribute(
      "href",
      "data:text/plain;charset=utf-11," + encodeURIComponent(billText)
    );
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Introduction</h3>
        <a
          id="download-bill"
          className="btn btn-secondary gap-2 cursor-pointer"
          href=""
          download={`${billTitle}.txt`}
          onClick={onClickDownload}
        >
          <img src={download} className="w-4 h-4" />
          Download Bill
        </a>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
        lectus non quam euismod cursus. Nam eleifend, urna in pretium posuere,
        massa dui sagittis nulla, molestie mollis mi leo vel neque. Nunc gravida
        tristique orci at hendrerit. Sed erat elit, egestas a nisl vel, gravida
        vehicula magna.
      </p>
      <div className="mt-9 p-6 bg-neutral50 rounded-lg flex justify-between items-center flex-wrap gap-4">
        <div>
          <h5 className="font-bold">Skip the Jargon!</h5>
          <p className="text-neutral500 text-sm">
            Read Coterie AI's Summary instead.
          </p>
        </div>
        <Button
          rightIcon={<ArrowRight />}
          text="View Summary"
          onClick={showBillSummary}
        />
      </div>
    </div>
  );
}
