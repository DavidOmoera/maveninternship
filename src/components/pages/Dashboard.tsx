import React, { useEffect, useMemo, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  Divider,
  Tooltip,
} from "@mui/material";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "components/atoms/Button";
import { useLocation, useNavigate } from "react-router-dom";
import edited from "assets/edited.svg";
import closed from "assets/closed.svg";
import done from "assets/done.svg";
import { Pill } from "components/molecules/Pill";

import {
  BILL_ID_PREFIX,
  BILL_STATUSES,
  BILL_TYPES,
  BILL_YEARS,
  topRepresentatives,
} from "constants/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { billSearchSchema } from "constants/schemas";
import { ControlledInput } from "components/organisms/ControlledInput";
import { ControlledSelect } from "components/organisms/ControlledSelect";
import CustomTextField from "components/molecules/CustomTextField";
import { Routes } from "types/routes";
import { PageContainer } from "components/templates/PageContainer";
import { BillCard } from "components/organisms/BillCard.tsx";
import { handleError, useAppDispatch, useAppSelector } from "utils/helpers";
import { billsSelector } from "store/slices/bill/selectors";
import { getBills, getTrackedBills } from "store/slices/bill/thunks";
import dayjs from "dayjs";
import classNames from "classnames";
import { TBill, TBillChamber, TBillStatus, TBillType } from "types/common";
import { searchBillsRequest } from "api/billsApi";

const stages = [
  "Filed",
  "Enrolled",
  "Reading-1",
  "Passed",
  "Introduced",
  "Reading-2",
  "Referred to committee",
  "Amendment-failure",
  "Executive-receipt",
  "Amendment-introduction",
  "Amendment-passage",
  "Amendment-withdrawal",
];

type TBillSearchForm = {
  searchValue: string;
} & Partial<{
  chamber: string;
  billType: string;
  billStatus: string;
  year: string;
}>;

const jurisdiction = "Texas";

export const Dashboard: React.FC = () => {
  const [openBillStatusDialog, setOpenBillStatusDialog] = useState(false);
  const [areUpdatesVisible, setAreUpdatesVisible] = useState(false);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const handleCloseBillStatusDialog = () => setOpenBillStatusDialog(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { bills, trackedBills } = useAppSelector(billsSelector);
  const [billsSearchResults, setBillsSearchResults] = useState<TBill[]>();
  const [billsSearchResultsCount, setBillsSearchResultsCount] =
    useState<number>();

  const {
    control,
    handleSubmit,
    formState: { isValid: billSearchFormIsValid },
    watch: watchBillsForm,
  } = useForm<TBillSearchForm>({
    resolver: yupResolver(billSearchSchema),
  });

  const billsSearchValue = watchBillsForm("searchValue");

  const { control: watchedBillsControl } = useForm<TBillSearchForm>({
    resolver: yupResolver(billSearchSchema),
  });

  const billsToView = useMemo(
    () =>
      billsSearchValue && billsSearchResults ? billsSearchResults ?? [] : bills,
    [bills, billsSearchResults, billsSearchValue]
  );

  const updates = [
    {
      title: "Became Law",
      description: "The Bill 'Funding Bill 2024' was passed to law",
      relativeTime: "2h ago",
      image: done,
    },
    {
      title: "Bill Amendment",
      description: "The Bill 'Transport Bill 2024' was amended",
      relativeTime: "2d ago",
      image: edited,
    },
    {
      title: "Bill Vetoed",
      description: "The Bill 'Immigration Bill 2024' was vetoed",
      relativeTime: "2d ago",
      image: closed,
    },
  ];

  const pills = [
    { firstText: "Social Housing", secondText: "(27)" },
    { firstText: "Health", secondText: "(15)" },
    { firstText: "Security", secondText: "(12)" },
    { firstText: "Transportation", secondText: "(32)" },
    { firstText: "Education", secondText: "(25)" },
    { firstText: "Immigration", secondText: "(3)" },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleToggleStage = (stage: string) => {
    setSelectedStages((prevState) =>
      prevState.includes(stage)
        ? prevState.filter((s) => s !== stage)
        : [...prevState, stage]
    );
  };

  function onClickBill(bill: TBill) {
    navigate(Routes.DetailsOfBill, { state: { bill } });
  }

  const handleSaveBillStatus = () => {
    handleCloseBillStatusDialog();
  };

  function goToActivityFeed() {
    navigate(Routes.ActivityFeed);
  }

  function goToBills() {
    navigate(Routes.Bills);
  }

  function goToRepresentatives() {
    navigate(Routes.HouseReps);
  }

  function onClickRepresentative(id: number) {
    navigate(Routes.RepProfile + `/${id}`);
  }

  function toggleUpdatesSection() {
    setAreUpdatesVisible((prevState) => !prevState);
  }

  const onSearchBill: SubmitHandler<TBillSearchForm> = (
    formData: TBillSearchForm
  ) => {
    const { searchValue, chamber, billStatus, billType, year } = formData;
    if (billSearchFormIsValid) {
      searchBillsRequest({
        search_term: searchValue,
        chamber: chamber as TBillChamber,
        status: [billStatus as TBillStatus],
        bill_type: billType as TBillType,
        jurisdiction: [jurisdiction],
        sessions: [year as string],
        skip: 0,
        limit: 50,
      })
        .then((res) => {
          setBillsSearchResults(res.data.items);
          setBillsSearchResultsCount(res.data.total);
        })
        .catch((e) => {
          setBillsSearchResults([]);
          handleError(e);
        });
    }
  };

  useEffect(() => {
    // If user clears search, clear their search results
    if (!billsSearchValue) setBillsSearchResults(undefined);
  }, [billsSearchValue]);

  useEffect(() => {
    if (location.pathname) window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getBills({ page: 1, size: 6 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTrackedBills());
  }, [dispatch]);

  return (
    <PageContainer title="Dashboard">
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-9 flex pr-5 md:pr-9">
        <div className="flex-1 basis-[74%] pr-4">
          {/* Search and Filter Section */}
          <section className="p-9 bg-white rounded-xl">
            <div>
              {billsSearchValue ? (
                <>
                  <h3 className="text-primary font-normal text-2xl pb-2">
                    Search for:&nbsp;
                    <span className="text-blue-700 font-extrabold">
                      {billsSearchValue}
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

              <div className="flex flex-col lg:flex-row w-full gap-3 items-center">
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
                    options={[
                      { id: 1, value: "House", label: "House" },
                      { id: 2, value: "Senate", label: "Senate" },
                    ]}
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
                    options={BILL_STATUSES}
                    defaultValue=""
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

            {billsSearchResults &&
              billsSearchValue &&
              billsSearchResultsCount && (
                <div className="lg:flex gap-2 block mt-8">
                  <h4 className="text-neutral950">{billsSearchResultsCount}</h4>
                  <span className="text-neutral950 text-xl">Results found</span>
                </div>
              )}
            {/** All bills */}
            <div
              className={classNames("row gap-5 flex-wrap", {
                "mt-8": !billsSearchResults,
              })}
            >
              {billsToView.slice(0, 6).map((bill) => {
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
                  <div key={bill.id} style={{ flex: "0 1 calc(50% - 50px)" }}>
                    <BillCard
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
                  </div>
                );
              })}
            </div>
          </section>

          {/* Watched Bills */}
          <section className="w-full bg-white p-9 rounded-xl my-6">
            {/** Bills Overview */}
            <div className="row justify-between items-center">
              <div className="row gap-3">
                <h4 className="font-extrabold">My Watched Bills</h4>
                <div className="py-1 px-2 rounded-xl border border-primary">
                  <h6 className="text-primary">{trackedBills.length}</h6>
                </div>
              </div>
              <button
                className="row gap-1 bg-white p-0 border-none hover:border-none"
                onClick={goToBills}
              >
                <h6 className="text-primary font-bold text-[14px]">See All</h6>
                <EastOutlinedIcon sx={{ color: "#0C0853" }} />
              </button>
            </div>

            {/** Search Watched Bills */}
            <div className="flex flex-col lg:flex-row w-full gap-3 items-center my-4">
              <ControlledInput
                required
                control={watchedBillsControl}
                name="searchValue"
                placeholder="Search by keyword, bill # or legislator name"
                leftIcon={<SearchIcon />}
              />
              <div className="h-0.5 lg:h-12 w-full lg:w-[1px] bg-neutral200" />
              <div className="basis-full gap-3 md:gap-1 grid sm:grid-cols-2 w-full lg:flex">
                <ControlledSelect
                  control={watchedBillsControl}
                  name="chamber"
                  label="Chamber"
                  defaultValue=""
                  options={[
                    { id: 1, value: "House", label: "House" },
                    { id: 2, value: "Senate", label: "Senate" },
                  ]}
                />
                <ControlledSelect
                  control={watchedBillsControl}
                  name="billType"
                  label="Bill Type"
                  defaultValue=""
                  options={BILL_TYPES}
                />
                <ControlledSelect
                  control={watchedBillsControl}
                  name="billStatus"
                  label="Bill Status"
                  options={BILL_STATUSES}
                  defaultValue=""
                />
                <ControlledSelect
                  control={watchedBillsControl}
                  name="year"
                  label="Year"
                  defaultValue=""
                  options={BILL_YEARS}
                />
              </div>
            </div>

            {/** Bill Types */}
            <div className="row gap-2 flex-wrap">
              {pills.map((pill) => (
                <Pill
                  key={pill.secondText}
                  text={pill.firstText}
                  secondText={pill.secondText}
                />
              ))}
            </div>

            {/** All bills */}
            <div
              className="row gap-5 flex-wrap mt-8"
              style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
            >
              {trackedBills.map((bill) => {
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

                return (
                  <div key={bill.id} style={{ flex: "0 1 calc(50% - 50px)" }}>
                    <BillCard
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
                      isWatched={true}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        {/* Updates and Representatives Section */}
        {areUpdatesVisible ? (
          <div className="hidden md:flex flex-col gap-4 basis-[26%] bg-white p-9">
            <div className="flex flex-row-reverse mb-6">
              <button
                className="row gap-2 bg-white p-0 border-none hover:border-none"
                onClick={toggleUpdatesSection}
              >
                <h6 className="text-black font-semibold">Hide Updates</h6>
                <StartOutlinedIcon sx={{ color: "#000000" }} />
              </button>
            </div>

            <Divider />

            {/** Updates */}
            <div className="mt-6">
              <div className="row justify-between items-center mb-6">
                <h4 className="font-extrabold">My Updates</h4>
                <button
                  className="row gap-1 bg-white p-0 border-none hover:border-none"
                  onClick={goToActivityFeed}
                >
                  <h6 className="text-primary font-bold text-[14px]">
                    See All
                  </h6>
                  <EastOutlinedIcon sx={{ color: "#0C0853" }} />
                </button>
              </div>
              <div className="col gap-3">
                {updates.map((update) => (
                  <div
                    key={update.description}
                    className="row gap-3 pb-3 border-b border-neutral-50"
                  >
                    <img
                      src={update.image}
                      className="w-10 h-10 rounded-full"
                    />
                    <article className="col">
                      <h6 className="text-[14px] text-black">{update.title}</h6>
                      <p className="text-neutral600 mt-[5px]">
                        {update.description}
                      </p>
                      <p className="text-neutral400 mt-2">
                        {update.relativeTime}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/** Representatives */}
            <div>
              <h4 className="font-extrabold pb-6">My Top Representatives</h4>
              <div className="col gap-4">
                {topRepresentatives.map((representative) => (
                  <div
                    className="gap-3 cursor-pointer"
                    key={representative.title}
                    onClick={() => onClickRepresentative(representative.id)}
                  >
                    <h6 className="text-primary font-bold text-[14px] pb-4">
                      {representative.title}
                    </h6>
                    <div className="rounded-xl bg-neutral50 p-3 row justify-between items-center">
                      <div className="row items-center gap-3">
                        <img
                          src={representative.image}
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <article className="col gap-[2px] max-w-[121px]">
                          <h6 className="font-extrabold text-black line-clamp-1">
                            {representative.representative}
                          </h6>
                          <p className="text-neutral500 font-medium line-clamp-1">
                            {representative.district}
                          </p>
                        </article>
                      </div>
                      <div className="gap-[2px] row items-center">
                        <p className="text-neutral500">View</p>
                        <NavigateNextOutlinedIcon />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row justify-center mt-4">
                <button
                  className="row gap-1 bg-white p-0 border-none hover:border-none"
                  onClick={goToRepresentatives}
                >
                  <h6 className="text-primary font-bold text-[14px]">
                    See All Representatives
                  </h6>
                  <EastOutlinedIcon sx={{ color: "#0C0853" }} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Tooltip title="My Updates" placement="left">
              <button
                className="hidden md:block bg-neutral50 border-primary px-[18px] py-[21px]"
                onClick={toggleUpdatesSection}
              >
                <StartOutlinedIcon
                  sx={{ color: "#0C0853", transform: "rotate(180deg)" }}
                />
              </button>
            </Tooltip>
          </div>
        )}
      </div>

      {/* Bill Status Dialog */}
      <Dialog open={openBillStatusDialog} onClose={handleCloseBillStatusDialog}>
        <DialogTitle>Bill Status</DialogTitle>
        <DialogContent>
          <CustomTextField
            label="Find stage"
            value={search}
            onChange={handleSearchChange}
            className="mb-4"
          />
          <List>
            {stages
              .filter((stage) =>
                stage.toLowerCase().includes(search.toLowerCase())
              )
              .map((stage) => (
                <ListItem
                  button
                  key={stage}
                  onClick={() => handleToggleStage(stage)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={selectedStages.includes(stage)}
                      onChange={() => handleToggleStage(stage)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={stage} />
                </ListItem>
              ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBillStatusDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveBillStatus} color="primary">
            Save Selections
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};
