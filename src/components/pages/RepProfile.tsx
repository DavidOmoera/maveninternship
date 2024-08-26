import { Pill } from "components/molecules/Pill";
import { Bill } from "components/organisms/Bill";
import { PageContainer } from "components/templates/PageContainer";
import { colors, REPRESENTATIVES, watchedBills } from "constants/common";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Routes } from "types/routes";
import filter from "assets/filter.svg";
import { ArrowRight } from "assets/ArrowRight";

type TBioDataProps = { title: string; description: string };

function BioData({ title, description }: TBioDataProps) {
  return (
    <article className="gap-2 max-w-44">
      <h6 className="text-neutral950 line-clamp-1">{title}</h6>
      <p className="text-neutral500 line-clamp-2">{description}</p>
    </article>
  );
}

export function RepProfile() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const location = useLocation();

  const {
    name,
    image,
    socials = [],
    biography,
    bioData,
    wiki,
    district,
    party,
  } = REPRESENTATIVES[Number(params.id)] ?? {};

  const pageType = location.state?.pageType || "House";

  function onClickBill() {
    navigate(Routes.DetailsOfBill);
  }

  function onClickWiki() {
    window.open(wiki, "_blank");
  }

  return (
    <PageContainer title="Profile">
      <div className="row bg-gray-100 px-9 gap-6">
        {/** Profile */}
        <section className="col basis-[65%] p-9 overflow-y-scroll bg-white">
          <div className="row justify-between">
            <div className="col">
              <img
                src={image}
                className="w-36 h-36 object-cover rounded mb-4"
                alt={`${name}'s profile`}
              />
              <h2 className="font-extrabold text-black mb-1">{name}</h2>
              <div className="row items-center gap-2">
                <Pill
                  text={pageType === "House" ? "Representative" : "Senator"}
                  containerClassName="rounded-full bg-[#e7f1ff] px-4 py-1"
                  textClass="text-[#1026C3] text-sm"
                />
                <div className="bg-accent800 rounded-full h-2 w-2" />
                <p className="text-accent800">{district}</p>
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
                text={party.name}
                icon={
                  <img
                    src={party.logo}
                    className="w-8 h-8"
                    alt={`${party.name} logo`}
                  />
                }
                containerClassName="row items-center rounded-[2.37rem] px-3 py-2 gap-1 bg-neutral50"
              />
            </div>
          </div>

          <hr className="my-6 bg-neutral100" />

          <article className="col gap-3">
            <h5 className="text-neutral950">Contact</h5>
            <div className="row gap-6 flex-wrap">
              {socials.map((social) => (
                <div key={social.handle} className="row items-center gap-2">
                  <img src={social.icon} alt={`${social.handle} icon`} />
                  <p className="text-neutral500">{social.handle}</p>
                </div>
              ))}
            </div>
          </article>

          <hr className="my-6 bg-neutral100" />

          <article className="col gap-3">
            <h5 className="text-neutral950">Biography</h5>
            <p className="text-neutral500 whitespace-pre-line">{biography}</p>
          </article>

          <hr className="my-6 bg-neutral100" />

          <div className="grid grid-cols-4 gap-6 w-full">
            {bioData.map((data) => (
              <BioData key={data.description + data.title} {...data} />
            ))}
          </div>
        </section>

        {/** Bills */}
        <section className="col basis-[35%] p-9 bg-white">
          <div className="row justify-between items-center w-full">
            <h3>Sponsored Bills</h3>
            <Pill
              icon={<img src={filter} className="mr-2" alt="Filter icon" />}
              text="Filter Result"
              containerClassName="row items-center rounded px-3 py-2 gap-1 bg-neutral50"
            />
          </div>

          <hr className="mt-3 mb-6 bg-neutral100" />

          <div className="overflow-y-scroll">
            {watchedBills.map((bill) => (
              <Bill
                key={bill.description + bill.year}
                onClick={onClickBill}
                {...bill}
              />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
