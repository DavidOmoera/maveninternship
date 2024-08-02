import { Pill } from "components/molecules/Pill";
import { Bill } from "components/organisms/Bill";
import { PageContainer } from "components/templates/PageContainer";
import { colors, watchedBills } from "constants/common";
import { useNavigate } from "react-router-dom";
import { Routes } from "types/routes";
import filter from "assets/filter.svg";
import envelope from "assets/envelope.svg";
import twitter from "assets/twitter.svg";
import youtube from "assets/youtube.svg";
import instagram from "assets/instagram.svg";
import facebook from "assets/facebook.svg";
import democrat from "assets/democrat.webp";
import profilePicture from "assets/profile_picture.webp";
import { ArrowRight } from "assets/ArrowRight";

type TBioDataProps = { title: string; description: string };

const BIO_DATA = [
  { title: "Gender", description: "Female" },
  { title: "Date of Birth", description: "March 29 1981" },
  { title: "Date of Death", description: "N/A" },
  { title: "Chamber", description: "Upper" },
  { title: "Current District", description: "TX-30, Texas" },
  {
    title: "District Address",
    description: "1825 Market Center Blvd.Suite 440 Dallas, TX  75207",
  },
  { title: "District Voice", description: "-" },
  { title: "District Phone", description: "(214) 922-8885" },
  {
    title: "Capitol Address",
    description: "1616 Longworth House Office Building 15 Independence Ave",
  },
  { title: "Capitol Phone", description: "(202) 225-8885" },
  { title: "Capitol Voice", description: "-" },
  { title: "Status", description: "-" },
];

function BioData({ title, description }: TBioDataProps) {
  return (
    <article className="gap-2 max-w-44">
      <h6 className="text-neutral950 line-clamp-1">{title}</h6>
      <p className="text-neutral500 line-clamp-2">{description}</p>
    </article>
  );
}

const SOCIALS = [
  { icon: envelope, handle: "JasmineCrockett@uscongress.com" },
  { icon: twitter, handle: "@RepJasmine" },
  { icon: youtube, handle: "Congresswoman Jasmine Crockett" },
  { icon: instagram, handle: "jasmineforus" },
  { icon: facebook, handle: "Congresswoman Jasmine Crockett" },
];

export function RepProfile() {
  const navigate = useNavigate();
  function onClickBill() {
    navigate(Routes.DetailsOfBill);
  }

  function onClickWiki() {
    window.open("https://en.wikipedia.org/wiki/Jasmine_Crockett", "_blank");
  }

  return (
    <PageContainer title="Profile">
      <div className="row bg-gray-100 px-9 gap-6">
        {/** Profile */}
        <section className="col basis-[65%] p-9 max-h-screen overflow-y-scroll bg-white">
          <div className="row justify-between">
            <div className="col">
              <img
                src={profilePicture}
                className="w-36 h-36 object-cover rounded mb-4"
              />
              <h2 className="font-extrabold text-black mb-1">
                Congresswoman Jasmine Crockett
              </h2>
              <div className="row items-center gap-2">
                <Pill text="Congresswoman" />
                <div className="bg-accent800 rounded-full h-2 w-2" />
                <p className="text-accent800">TX-30, Texas</p>
              </div>
              <div className="row items-center gap-1 mt-3">
                <p
                  className="cursor-pointer text-primary"
                  onClick={onClickWiki}
                >
                  Wikipedia
                </p>
                <ArrowRight color={colors.primary} className="-rotate-45" />
              </div>
            </div>
            <div>
              <Pill
                text="Democratic Party"
                icon={<img src={democrat} className="w-8 h-8" />}
                containerClassName="row items-center rounded-[2.37rem] px-3 py-2 gap-1 bg-neutral50"
              />
            </div>
          </div>

          <hr className="my-6 bg-neutral100" />

          <article className="col gap-3">
            <h5 className="text-neutral950">Contact</h5>
            <div className="row gap-6 flex-wrap">
              {SOCIALS.map((social) => (
                <div key={social.handle} className="row items-center gap-2">
                  <img src={social.icon} />
                  <p className="text-neutral500">{social.handle}</p>
                </div>
              ))}
            </div>
          </article>

          <hr className="my-6 bg-neutral100" />

          <article className="col gap-3">
            <h5 className="text-neutral950">Biography</h5>
            <p className="text-neutral500">
              Congresswoman Jasmine Crockett has purposefully made every
              decision with one goal in mind: protecting the civil liberties of
              those in underrepresented communities. As a public defender, civil
              rights attorney, State Representative, and United States
              Congresswoman, Jasmine Crockett dedicates her life to public
              service, with the goal of serving justice and ensuring equality
              for all.
            </p>
            <p className="text-neutral500">
              In the midst of political turmoil, economic distress, and racial
              inequality, Congresswoman Crockett laced up her shoes to march for
              justice and run for the Texas House of Representatives. The sole
              Black freshman and youngest Black lawmaker in Texas during the
              87th Legislative Session, Congresswoman Crockett navigated what
              has been marked as the most conservative session in Texas history.
              Despite the uphill climb, Congresswoman Crockett filed more bills
              than any other freshman, assembled a wide coalition to pass
              landmark criminal justice reforms in the House, and brought more
              accessibility and accountability to her office than before. She
              was a founding member of both the Texas Progressive Caucus as well
              as the Texas Caucus on Climate, Energy, and the Environment. As
              State Representative, she fought for economic opportunity as a
              member of the Business & Industry Committee, and advocated for
              reform on the Criminal Jurisprudence Committee. Congresswoman
              Crockett was one of the lead architects of the 2021 Texas House
              Quorum Break, which brought attention to the draconian and
              restrictive voting measures being proposed in the legislature.
            </p>
            <p className="text-neutral500">
              Her passion for justice and the protection of peoples’ rights led
              her to pursue a career as a public defender, and civil rights and
              criminal defense attorney. She focused on defending our most
              vulnerable among us from exploitation in the criminal justice
              system. As she began her career in the Bowie County Public
              Defender's Office, Congresswoman Crockett worked tirelessly to
              keep children safe and out of jail. Her time there serves as a
              reminder that criminal justice is an intersectional issue.
            </p>
            <p className="text-neutral500">
              Following her service in the Texas Legislature, Congresswoman
              Crockett accepted the call, and won the election for retiring
              Chairwoman Eddie Bernice Johnson's congressional seat in Texas’
              30th District. Following her election, she hit the ground running
              and won a seat at the Leadership table as Freshman Leadership
              Representative, a position she will use to advocate for all
              Texans. As Freshman Leadership Representative, she is one of a few
              Black women ever elected to Democratic House Leadership. In
              Congress, Congresswoman Crockett hopes to continue to build on the
              legacy of Chairwoman Johnson, and will fight to expand access to
              healthcare, voting rights, economic opportunity, and dignity for
              all. She will fight to protect Medicare, Social Security, and
              expand critical social safety net programs. She will continue to
              be a tireless advocate for civil liberties, immigrant rights, and
              economic equity for women and the diverse communities across the
              State of Texas.
            </p>
            <p className="text-neutral500">
              Congresswoman Crockett earned her B.A. in Business Administration
              from Rhodes College and her J.D. from the University of Houston.
              She is licensed to practice law in Texas, Arkansas, and Federal
              Courts. Crockett is the past Bowie County Democratic Party Chair,
              held various leadership positions within the legal community, is a
              former board member of the Dallas County Metrocare Services, and
              is a proud member of Delta Sigma Theta Sorority, Incorporated.
            </p>
            <p className="text-neutral500">
              As a Congresswoman for all Texans, she's looking forward to
              continuing our fight and ushering in the next generation of
              servant leadership in the halls of Congress and Washington, D.C.
            </p>
          </article>

          <hr className="my-6 bg-neutral100" />

          <div className="grid grid-cols-4 gap-6 w-full">
            {BIO_DATA.map((data) => (
              <BioData key={data.description} {...data} />
            ))}
          </div>
        </section>

        {/** Bills */}
        <section className="col basis-[35%] p-9 max-h-screen bg-white">
          <div className="row justify-between items-center w-full">
            <h3>Sponsored Bills</h3>
            <Pill
              icon={<img src={filter} className="mr-2" />}
              text="Filter Result"
              containerClassName="row items-center rounded px-3 py-2 gap-1 bg-neutral50"
            />
          </div>

          <hr className="mt-3 mb-6 bg-neutral100" />

          <div className="overflow-y-scroll">
            {watchedBills.map((bill) => (
              <Bill key={bill.description} onClick={onClickBill} {...bill} />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
