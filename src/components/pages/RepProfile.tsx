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
import republican from "assets/republican.svg";
import profilePicture from "assets/profile_picture_large.png";
import { ArrowRight } from "assets/ArrowRight";

type TBioDataProps = { title: string; description: string };

const BIO_DATA = [
  { title: "Gender", description: "Female" },
  { title: "Date of Birth", description: "April 15 1978" },
  { title: "Date of Death", description: "N/A" },
  { title: "Chamber", description: "Upper" },
  { title: "Current District", description: "Texas" },
  {
    title: "District Address",
    description: "206 Protective Lane, Sherborne, EC28 6EC",
  },
  { title: "District Voice", description: "-" },
  { title: "District Fax", description: "907288" },
  {
    title: "Capitol Address",
    description: "255 Voyage Avenue, Swaffham, HU76 5BH",
  },
  { title: "Capitol Fax", description: "907288" },
  { title: "Capitol Voice", description: "-" },
  { title: "Status", description: "Retired - 12/31/2023" },
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
  { icon: envelope, handle: "Clara.OConner@yahoo.com" },
  { icon: twitter, handle: "@Clara65" },
  { icon: youtube, handle: "Senator Clara O'Conner" },
  { icon: instagram, handle: "SenConner" },
  { icon: facebook, handle: "Senator Clara O'Conner" },
];

export function RepProfile() {
  const navigate = useNavigate();
  function onClickBill() {
    navigate(Routes.DetailsOfBill);
  }

  function onClickWiki() {
    window.open("https://wikipedia.com", "_blank");
  }

  return (
    <PageContainer title="Profile">
      <div className="row bg-gray-100 px-9 gap-6">
        {/** Profile */}
        <section className="col basis-[65%] p-9 max-h-screen overflow-y-scroll bg-white">
          <div className="row justify-between">
            <div className="col">
              <img src={profilePicture} className="w-36 h-36 mb-4" />
              <h2 className="font-extrabold text-black mb-1">
                Sen. Clara O'Conner
              </h2>
              <div className="row items-center gap-2">
                <Pill text="Senator" />
                <div className="bg-accent800 rounded-full h-2 w-2" />
                <p className="text-accent800">District 45, Texas</p>
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
                text="Republican Party"
                icon={<img src={republican} className="w-8 h-8" />}
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
              Dictum malesuada feugiat fermentum est massa facilisi amet diam.
              Senectus quis mauris suspendisse morbi nisi. Risus cras odio at
              adipiscing aenean vitae sed. Quis in eu urna ridiculus netus in.
              Facilisi amet vestibulum adipiscing quis sollicitudin nibh tortor
              morbi aliquam. Risus sagittis ullamcorper nisl ipsum aliquet sit
              eu. Convallis sed nunc libero lobortis maecenas interdum
              ullamcorper commodo. Odio a mauris volutpat ipsum sit plac ...Read
              more
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
