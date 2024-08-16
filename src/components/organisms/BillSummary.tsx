import { Tooltip } from "@mui/material";
import copy from "assets/copy.svg";
import download2 from "assets/download2.svg";
import { useEffect, useRef, useState } from "react";

const billTitle = "Summary of “Secure the Border Act of 2023”";

export function BillSummary() {
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
          download={`${billTitle} summary.txt`}
          onClick={onClickDownload}
        >
          <img src={download2} className="w-4 h-4" />
          <h6 className="text-primary text-sm">Download</h6>
        </a>
      </div>

      <article>
        <h2 className="text-black">{billTitle}</h2>
        <p
          id="bill-summary"
          className="text-neutral500 my-6 whitespace-pre-line"
        >
          Donec sed tellus ut risus ultrices condimentum. Vestibulum at ipsum
          blandit, posuere enim at, pharetra ex. Aenean nec leo sapien.
          Vestibulum in mattis ipsum, ut condimentum turpis. Mauris lorem dolor,
          scelerisque a nisl in, malesuada sagittis risus. Duis mauris ex,
          malesuada id purus at, venenatis euismod libero. Praesent fringilla
          porta semper. Duis interdum dolor magna, tempus vulputate tortor
          pharetra sed. Cras non sem dolor.&#10;&#13;&#10;&#13; 1. Maecenas
          dapibus, arcu at fringillaornare&#10;&#13; 2. est libero viverra dui,
          quis imperdiet sem ex ac lectus&#10;&#13; 3. Suspendisse auctor
          interdum finibus. Nunc varius aliquam metus&#10;&#13; 4. id tincidunt
          dolor ornare at. Donec ut massa ut&#10;&#13; 5. libero congue
          consectetur&#10;&#13;&#10;&#13; Sed id augue felis. Morbi nec ultrices
          dolor, a hendrerit tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla erat metus, vestibulum sit amet porttitor eget,
          suscipit rhoncus velit. Vestibulum semper tincidunt eleifend. Aliquam
          blandit ipsum leo, suscipit tincidunt erat volutpat eu. Integer ut
          porta est. Nam vestibulum condimentum justo, eu hendrerit justo
          pretium id. Duis eleifend felis quis nibh aliquam, ut hendrerit mi
          sagittis. Suspendisse potenti. Morbi vitae lorem leo. Curabitur orci
          ipsum, scelerisque a augue sit amet, laoreet eleifend metus. Ut sit
          amet turpis ac lorem aliquam sagittis ut a tellus.
        </p>
      </article>
    </div>
  );
}
