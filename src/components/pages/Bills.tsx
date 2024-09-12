import React, { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "components/atoms/Button";
import { ControlledInput } from "components/organisms/ControlledInput";
import { ControlledSelect } from "components/organisms/ControlledSelect";
import { PageContainer } from "components/templates/PageContainer";
import SearchIcon from "@mui/icons-material/Search";
import { Pill } from "components/molecules/Pill";
import { BILL_ID_PREFIX, BILL_TYPES, BILL_YEARS } from "constants/common";
import { BillCard } from "components/organisms/BillCard";
import gridIcon from "assets/grid.svg";
import listIcon from "assets/listView.svg";
import { useNavigate } from "react-router-dom";
import { Routes } from "types/routes";
import { handleError, useAppDispatch, useAppSelector } from "utils/helpers";
import { billsSelector } from "store/slices/bill/selectors";
import { getBills } from "store/slices/bill/thunks";
import dayjs from "dayjs";
import { searchBillsRequest } from "api/billsApi";
import { TBill, TBillChamber, TBillStatus, TBillType } from "types/common";

interface TBillSearchForm {
  searchValue: string;
  chamber: string;
  billType: string;
  billStatus: string;
  year: string;
}

const pills = [
  { firstText: "Social Housing", secondText: "(27)" },
  { firstText: "Health", secondText: "(15)" },
  { firstText: "Security", secondText: "(12)" },
  { firstText: "Transportation", secondText: "(32)" },
  { firstText: "Education", secondText: "(25)" },
  { firstText: "Immigration", secondText: "(3)" },
];

const jurisdiction = "Texas";

export const Bills: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bills, trackedBills } = useAppSelector(billsSelector);
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<TBillSearchForm>();
  const navigate = useNavigate();
  const searchValue = watch("searchValue");
  const [searchResults, setSearchResults] = useState<TBill[]>();

  const [isGridView, setIsGridView] = useState(true);

  const billsToView = useMemo(
    () => (searchValue && searchResults ? searchResults ?? [] : bills),
    [bills, searchResults, searchValue]
  );

  const onSearchBill: SubmitHandler<TBillSearchForm> = (formData) => {
    const { searchValue, chamber, billStatus, billType } = formData;
    if (isValid) {
      searchBillsRequest({
        search_term: searchValue,
        chamber: chamber as TBillChamber,
        status: [billStatus as TBillStatus],
        bill_type: billType as TBillType,
        jurisdiction: [jurisdiction],
      })
        .then((res) => {
          setSearchResults(res.data.items);
        })
        .catch((e) => {
          setSearchResults([]);
          handleError(e);
        });
    }
  };

  const handleOpenBillStatusDialog = () => {
    console.log("Open Bill Status Dialog");
  };

  function onClickBill(bill: TBill) {
    navigate(Routes.DetailsOfBill, { state: { bill } });
  }

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  useEffect(() => {
    // If user clears search, clear their search results
    if (!searchValue) setSearchResults(undefined);
  }, [searchValue]);

  useEffect(() => {
    dispatch(getBills({ page: 1, size: 50 }));
  }, [dispatch]);

  return (
    <PageContainer title="Bills">
      <div className="p-9 bg-white rounded-xl mx-9">
        {searchValue ? (
          <>
            <h3 className="text-primary font-normal text-2xl pb-2">
              Search for:&nbsp;
              <span className="text-blue-700 font-extrabold">
                {searchValue}
              </span>
            </h3>
            <p className="pb-6 font-normal">
              in <span className="font-bold">{jurisdiction}</span>
            </p>
          </>
        ) : (
          <h3 className="text-primary font-extrabold text-xl pb-6">
            All Bills
          </h3>
        )}
        <div className="flex flex-col lg:flex-row item-center w-full gap-3">
          <ControlledInput
            required
            control={control}
            name="searchValue"
            placeholder="Search by keyword, bill # or legislator name"
            leftIcon={<SearchIcon />}
          />
          <div className="h-0.5 lg:h-12 w-full lg:w-[1px] bg-neutral200" />
          <div className="basis-full gap-3 md:gap-1 grid sm:grid-cols-2 w-full lg:flex">
            <ControlledSelect
              control={control}
              name="chamber"
              label="Chamber"
              defaultValue=""
              options={BILL_TYPES}
            />
            <ControlledSelect
              control={control}
              name="billType"
              label="Bill Type"
              defaultValue=""
              options={BILL_TYPES}
            />
            <ControlledSelect
              control={control}
              name="billStatus"
              label="Bill Status"
              options={[]}
              defaultValue=""
              onClick={handleOpenBillStatusDialog}
            />
            <ControlledSelect
              control={control}
              name="year"
              label="Year"
              defaultValue=""
              options={BILL_YEARS}
            />
          </div>
        </div>
        <Button
          text="Search Bill"
          className="mt-4"
          onClick={handleSubmit(onSearchBill)}
        />
      </div>
      <div className="p-9 bg-white rounded-xl mt-3 mx-9">
        <div className="flex flex-col space-y-4">
          {/* Search results */}
          <div className="row justify-between my-9">
            {searchResults && searchValue ? (
              <div className="lg:flex gap-2 block">
                <h4 className="text-neutral950">{searchResults.length}</h4>
                <span className="text-neutral950 text-xl">Results found</span>
              </div>
            ) : (
              <div className="row gap-2 flex-wrap">
                {pills.map((pill) => (
                  <Pill
                    key={pill.secondText}
                    text={pill.firstText}
                    secondText={pill.secondText}
                    textClass="text-blue-600 font-semibold"
                    secondTextClass="text-blue-600 font-bold"
                  />
                ))}
              </div>
            )}

            <div className="row items-center gap-6">
              <img
                src={isGridView ? listIcon : gridIcon}
                className="w-6 h-6 cursor-pointer"
                onClick={toggleView}
                alt="toggle view"
              />
            </div>
          </div>

          {/** Pills */}
          {searchResults && searchValue && (
            <div className="row gap-2 flex-wrap">
              {pills.map((pill) => (
                <Pill
                  key={pill.secondText}
                  text={pill.firstText}
                  secondText={pill.secondText}
                  textClass="text-blue-600 font-semibold"
                  secondTextClass="text-blue-600 font-bold"
                />
              ))}
            </div>
          )}

          {/* ListView Title */}
          {!isGridView && (
            <div className="hidden xl:grid grid-cols-12 gap-6 p-4 bg-gray-100 rounded-lg shadow-md mt-8 text-xs font-bold">
              <p className="col-span-2">Bill Name</p>
              <p className="col-span-2">Author</p>
              <p className="col-span-2">Co-Authors</p>
              <p className="col-span-1">State</p>
              <p className="col-span-1">Bill Status</p>
              <p className="col-span-1">Supported by</p>
              <p className="col-span-1">Date Created</p>
              <p className="col-span-2">Watched Bills</p>
            </div>
          )}

          {/* BillCard */}
          <div className={`${isGridView ? "row gap-5 flex-wrap mt-8" : "col"}`}>
            {billsToView.map((bill) => {
              const lastActionDate = bill.latest_action_date as string;

              // First part of the date is year
              const year =
                lastActionDate?.split("-")?.[0] ?? new Date().getFullYear();
              const author = bill.contributors.find(
                (contributor) => contributor.classification === "author"
              );
              const coAuthors = bill.contributors.filter(
                (contributor) => contributor.classification === "coauthor"
              );
              const sponsors = bill.contributors.filter(
                (contributor) => contributor.classification === "sponsor"
              );
              const coAuthorImages = coAuthors.map(
                (contributor) => contributor.image
              );
              const coAuthorsCount = coAuthors.length;
              const supportersCount = sponsors.length;
              const relativeTime = dayjs(bill.latest_action_date).fromNow();
              const isWatched = !!trackedBills.find(
                (trackedBill) => trackedBill.id === bill.id
              );

              return (
                <BillCard
                  key={bill.id}
                  id={bill.id.replace(BILL_ID_PREFIX, "")}
                  onClick={() => onClickBill(bill)}
                  isListView={false}
                  title={bill.title}
                  description={bill.summary}
                  billType="All"
                  chamber="House"
                  year={Number(year)}
                  relativeTime={relativeTime}
                  name={author?.name as string}
                  image={author?.image as string}
                  coAuthor1={coAuthorImages[1]}
                  coAuthor2={coAuthorImages[2]}
                  coAuthor3={coAuthorImages[3]}
                  count1={coAuthorsCount > 0 ? `+${coAuthorsCount}` : ""}
                  count2={supportersCount > 0 ? `+${supportersCount}` : ""}
                  state={bill.state}
                  status={bill.status}
                  supporter1=""
                  supporter2=""
                  supporter3=""
                  isWatched={isWatched}
                />
              );
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
