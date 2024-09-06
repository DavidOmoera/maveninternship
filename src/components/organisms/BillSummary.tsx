import { Tooltip } from "@mui/material";
import { getBillSummaryRequest } from "api/billsApi";
import copy from "assets/copy.svg";
import download2 from "assets/download2.svg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { handleError } from "utils/helpers";

export function BillSummary({
  billId,
  title,
}: {
  billId: string;
  title: string;
}) {
  const [summary, setSummary] = useState<string>();
  const copyTooltipTimeoutRef = useRef<number>();
  const [showCopyTooltip, setShowCopyTooltip] = useState<boolean>(false);

  function showCopyFeedback() {
    setShowCopyTooltip(true); // Show tooltip
  }

  function onClickCopy() {
    const summaryElement = document.getElementById("bill-summary");

    if (summaryElement) {
      const summaryText = summaryElement.innerText;
      navigator.clipboard.writeText(summaryText); // Copy text to clipboard
      showCopyFeedback();
    }
  }

  function onClickDownload() {
    const downloadButton = document.getElementById("download-bill-summary");
    const summaryElement = document.getElementById("bill-summary");
    const summaryText = summaryElement?.innerText;

    if (summaryText) {
      downloadButton?.setAttribute(
        "href",
        "data:text/plain;charset=utf-11," + encodeURIComponent(summaryText)
      );
    }
  }

  useLayoutEffect(() => {
    if (billId) {
      getBillSummaryRequest({
        bill_id: billId,
        version: "1",
        state: "Texas",
      })
        .then((res) => {
          setSummary(res.data.summary);
        })
        .catch(handleError);
    }
  }, [billId]);

  useEffect(() => {
    if (showCopyTooltip)
      copyTooltipTimeoutRef.current = setTimeout(() => {
        setShowCopyTooltip(false);
        clearTimeout(copyTooltipTimeoutRef.current);
      }, 1000); // Hide tooltip after 2 seconds
    // Clear timeout if user leaves component before tooltip clears
    return () => clearTimeout(copyTooltipTimeoutRef.current);
  }, [showCopyTooltip]);

  return (
    <div>
      <div className="row gap-4 my-9 justify-end">
        {showCopyTooltip ? (
          <Tooltip title="Copied" placement="bottom">
            <div
              className="row items-center gap-1 cursor-pointer"
              onClick={onClickCopy}
            >
              <img src={copy} className="w-4 h-4" />
              <h6 className="text-primary text-sm">Copy to Clipboard</h6>
            </div>
          </Tooltip>
        ) : (
          <div
            className="row items-center gap-1 cursor-pointer"
            onClick={onClickCopy}
          >
            <img src={copy} className="w-4 h-4" />
            <h6 className="text-primary text-sm">Copy to Clipboard</h6>
          </div>
        )}
        <a
          id="download-bill-summary"
          className="row items-center gap-1 cursor-pointer"
          href=""
          download={`${title} summary.txt`}
          onClick={onClickDownload}
        >
          <img src={download2} className="w-4 h-4" />
          <h6 className="text-primary text-sm">Download</h6>
        </a>
      </div>

      <article>
        <h2 className="text-black">{title}</h2>
        <p
          id="bill-summary"
          className="text-neutral500 my-6 whitespace-pre-line"
        >
          {summary}
        </p>
      </article>
    </div>
  );
}
