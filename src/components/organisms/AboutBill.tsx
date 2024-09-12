import { ArrowRight } from "assets/ArrowRight";
import { Button } from "components/atoms/Button";
import download from "assets/download.svg";

type TAboutBillProps = {
  title: string;
  author: string;
  description: string;
  legislativeType: string;
  status: string;
  amendmentsCount: number;
  showBillSummary: () => void;
  votesFor: number;
  votesAgainst: number;
  votesAbstained: number;
};

export function AboutBill({
  title,
  description,
  author,
  legislativeType,
  status,
  amendmentsCount,
  votesFor,
  votesAgainst,
  votesAbstained,
  showBillSummary,
}: TAboutBillProps) {
  function onClickDownload() {
    const downloadButton = document.getElementById("download-bill");
    const billText = `
    ${title}

    Author: ${author}
    Legislative type: ${legislativeType}
    Bill Status: ${status}
    Amendments: ${amendmentsCount} view${amendmentsCount > 1 ? "s" : ""}

    Voting
    Votes for: ${votesFor}
    Votes against: ${votesAgainst}
    Abstained: ${votesAbstained}

    ${description}
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
          download={`${title}.txt`}
          onClick={onClickDownload}
        >
          <img src={download} className="w-4 h-4" />
          Download Bill
        </a>
      </div>
      <p>{description}</p>
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
