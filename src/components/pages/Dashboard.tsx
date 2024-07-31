import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "components/atoms/Button";
import { DashboardExplore } from "components/atoms/DashboardExplore";
import coterieBot from "assets/coterie_bot.svg";
import bills from "assets/bills.svg";
import { useLocation, useNavigate } from "react-router-dom";
import edited from "assets/edited.svg";
import closed from "assets/closed.svg";
import done from "assets/done.svg";
import { Pill } from "components/molecules/Pill";

import {
  BILL_TYPES,
  BILL_YEARS,
  topRepresentatives,
  watchedBills,
} from "constants/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { billSearchSchema } from "constants/schemas";
import { ControlledInput } from "components/organisms/ControlledInput";
import { ControlledSelect } from "components/organisms/ControlledSelect";
import CustomTextField from "components/molecules/CustomTextField";
import { Routes } from "types/routes";
import { Bill } from "components/organisms/Bill";
import { PageContainer } from "components/templates/PageContainer";

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

export const Dashboard: React.FC = () => {
  const [openBillStatusDialog, setOpenBillStatusDialog] = useState(false);
  const [areUpdatesVisible, setAreUpdatesVisible] = useState(false);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const handleOpenBillStatusDialog = () => setOpenBillStatusDialog(true);
  const handleCloseBillStatusDialog = () => setOpenBillStatusDialog(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TBillSearchForm>({
    resolver: yupResolver(billSearchSchema),
  });

  const sectionsToExplore = [
    {
      title: "Ask Coterie AI",
      icon: coterieBot,
      description: "Coterie AI is ready to answer any questions you may have",
      onClick: () => {},
    },
    {
      title: "Explore Bills",
      icon: bills,
      description: "Feeling explorative? Look through all available bills",
      onClick: () => {},
    },
  ];

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

  function onClickBill() {
    navigate(Routes.DetailsOfBill);
  }

  const handleSaveBillStatus = () => {
    handleCloseBillStatusDialog();
  };

  function goToActivityFeed() {
    navigate("/dashboard/activity-feed");
  }

  function goToRepresentatives() {}

  function onClickRepresentative() {
    navigate(Routes.RepProfile);
  }

  function toggleUpdatesSection() {
    setAreUpdatesVisible((prevState) => !prevState);
  }

  const onSearchBill: SubmitHandler<TBillSearchForm> = (
    formData: TBillSearchForm
  ) => {
    console.log("search form data", formData);
  };

  useEffect(() => {
    if (location.pathname) window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageContainer title="Dashboard">
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-9 flex">
        <div className="flex-1 basis-[74%] pr-4">
          {/* Search and Filter Section */}
          <div className="p-9 bg-white rounded-xl">
            <h3 className="text-primary font-extrabold text-xl pb-6">
              Search for Bills
            </h3>
            <div className="row items-center w-full gap-3">
              <ControlledInput
                required
                control={control}
                name="searchValue"
                placeholder="Search by keyword, bill # or legislator name"
                leftIcon={<SearchIcon />}
                containerClasses="basis-[40%] rounded-lg"
                error={!!errors?.searchValue}
                helperText={(errors?.searchValue?.message as string) ?? ""}
              />
              <div className="h-12 w-[1px] bg-neutral200" />
              <div className="gap-3 grid grid-cols-4 basis-[60%]">
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

          {/* Ask Coterie AI and Explore Bills Sections */}
          <div className="row gap-6 my-6">
            {sectionsToExplore.map((sectionToExplore) => (
              <DashboardExplore
                key={sectionToExplore.title}
                title={sectionToExplore.title}
                description={sectionToExplore.description}
                icon={sectionToExplore.icon}
                onClick={sectionToExplore.onClick}
              />
            ))}
          </div>

          {/* Bills */}
          <section className="w-full bg-white p-9 rounded-xl">
            {/** Bills Overview */}
            <div className="row justify-between items-center">
              <div className="row gap-3">
                <h4 className="font-extrabold">My Watched Bills</h4>
                <div className="py-1 px-2 rounded-xl border border-primary">
                  <h6 className="text-primary">56</h6>
                </div>
              </div>
              <button
                className="row gap-1 bg-white p-0 border-none hover:border-none"
                onClick={goToActivityFeed}
              >
                <h6 className="text-primary font-bold text-[14px]">See All</h6>
                <EastOutlinedIcon sx={{ color: "#0C0853" }} />
              </button>
            </div>

            {/** Search Bills */}
            <div className="row items-center w-full gap-3 mt-8 mb-6">
              <ControlledInput
                required
                control={control}
                name="searchValue"
                placeholder="Search by keyword, bill # or legislator name"
                leftIcon={<SearchIcon />}
                containerClasses="basis-[40%] rounded-lg"
                error={!!errors?.searchValue}
                helperText={(errors?.searchValue?.message as string) ?? ""}
              />
              <div className="h-12 w-[1px] bg-neutral200" />
              <div className="gap-3 grid grid-cols-4 basis-[60%]">
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
            <div className="row gap-5 flex-wrap mt-8">
              {watchedBills.map((watchedBill) => (
                <Bill
                  key={watchedBill.state + watchedBill.description}
                  onClick={onClickBill}
                  {...watchedBill}
                />
              ))}
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
                    onClick={onClickRepresentative}
                  >
                    <h6 className="text-primary font-bold text-[14px] pb-4">
                      {representative.title}
                    </h6>
                    <div className="rounded-xl bg-neutral50 p-3 row justify-between items-center">
                      <div className="row items-center gap-3">
                        <img src={representative.image} className="w-12 h-12" />
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
            <button
              className="bg-neutral50 border-primary px-[18px] py-[21px]"
              onClick={toggleUpdatesSection}
            >
              <StartOutlinedIcon
                sx={{ color: "#0C0853", transform: "rotate(180deg)" }}
              />
            </button>
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
