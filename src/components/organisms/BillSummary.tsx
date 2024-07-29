import copy from "assets/copy.svg";
import download2 from "assets/download2.svg";

export function BillSummary() {
  return (
    <div>
      <div className="row gap-4 my-9 justify-end">
        <div className="row items-center gap-1">
          <img src={copy} className="w-4 h-4" />
          <h6 className="text-primary text-sm">Copy to Clipboard</h6>
        </div>
        <div className="row items-center gap-1">
          <img src={download2} className="w-4 h-4" />
          <h6 className="text-primary text-sm">Download</h6>
        </div>
      </div>

      <article>
        <h2 className="text-black">
          Summary of “Secure the Border Act of 2023”
        </h2>
        <p className="text-neutral500 my-6">
          Donec sed tellus ut risus ultrices condimentum. Vestibulum at ipsum
          blandit, posuere enim at, pharetra ex. Aenean nec leo sapien.
          Vestibulum in mattis ipsum, ut condimentum turpis. Mauris lorem dolor,
          scelerisque a nisl in, malesuada sagittis risus. Duis mauris ex,
          malesuada id purus at, venenatis euismod libero. Praesent fringilla
          porta semper. Duis interdum dolor magna, tempus vulputate tortor
          pharetra sed. Cras non sem dolor.
        </p>

        <ol className="my-3 list-decimal pl-4">
          <li className="text-neutral500">
            Maecenas dapibus, arcu at fringillaornare
          </li>
          <li className="text-neutral500">
            <p>est libero viverra dui, quis imperdiet sem ex ac lectus</p>
          </li>
          <li className="text-neutral500">
            Suspendisse auctor interdum finibus. Nunc varius aliquam metus
          </li>
          <li className="text-neutral500">
            id tincidunt dolor ornare at. Donec ut massa ut
          </li>
          <li className="text-neutral500">libero congue consectetur.</li>
        </ol>

        <p className="text-neutral500">
          Sed id augue felis. Morbi nec ultrices dolor, a hendrerit tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat
          metus, vestibulum sit amet porttitor eget, suscipit rhoncus velit.
          Vestibulum semper tincidunt eleifend. Aliquam blandit ipsum leo,
          suscipit tincidunt erat volutpat eu. Integer ut porta est. Nam
          vestibulum condimentum justo, eu hendrerit justo pretium id. Duis
          eleifend felis quis nibh aliquam, ut hendrerit mi sagittis.
          Suspendisse potenti. Morbi vitae lorem leo. Curabitur orci ipsum,
          scelerisque a augue sit amet, laoreet eleifend metus. Ut sit amet
          turpis ac lorem aliquam sagittis ut a tellus.
        </p>
      </article>
    </div>
  );
}
