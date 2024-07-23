import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  Divider,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "components/atoms/Button";
import { DashboardExplore } from "components/atoms/DashboardExplore";
import coterieBot from "assets/coterie_bot.svg";
import bills from "assets/bills.svg";
import { useNavigate } from "react-router-dom";
import edited from "assets/edited.svg";
import closed from "assets/closed.svg";
import done from "assets/done.svg";
import notification from "assets/notification.svg";
import message from "assets/message.svg";
import profilePicture from "assets/profile_picture.png";
import { Pill } from "components/molecules/Pill";
import { topRepresentatives, watchedBills } from "constants/common";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

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

export const Dashboard: React.FC = () => {
  const [openBillStatusDialog, setOpenBillStatusDialog] = useState(false);
  const [areUpdatesVisible, setAreUpdatesVisible] = useState(false);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const handleOpenBillStatusDialog = () => setOpenBillStatusDialog(true);
  const handleCloseBillStatusDialog = () => setOpenBillStatusDialog(false);
  const dropdownStyle = { width: "110px", marginRight: "9px" };
  const navigate = useNavigate();

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

  const handleSaveBillStatus = () => {
    handleCloseBillStatusDialog();
  };

  function goToActivityFeed() {
    navigate("/dashboard/activity-log");
  }

  function goToRepresentatives() {}

  function toggleUpdatesSection() {
    setAreUpdatesVisible((prevState) => !prevState);
  }

  return (
    <div className="col h-full">
      {/* Header */}
      <div className="bg-white rounded-xl px-9 py-6 mb-4 mx-9 mt-9 flex items-center justify-between">
        <h1 className="text-neutral950 font-extrabold text-4xl">Dashboard</h1>
        <div className="row gap-6">
          <div className="row gap-3">
            <img src={message} className="cursor-pointer" />
            <img src={notification} className="cursor-pointer" />
          </div>
          <div className="row gap-3 items-center">
            <img src={profilePicture} />
            <article className="col gap-1">
              <h6 className="text-neutral950 font-bold">Anita Lever</h6>
              <p>
                <span className="text-neutral600 text-sm font-medium">
                  Coterie
                </span>{" "}
                <span className="text-primary text-sm font-extrabold">Pro</span>
              </p>
            </article>
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-9 flex">
        <div className="flex-1 basis-[74%] pr-4">
          {/* Search and Filter Section */}
          <div className="p-9 bg-white rounded-xl">
            <h3 className="text-primary font-extrabold text-xl pb-6">
              Search for Bills
            </h3>
            <div className="row items-center w-full gap-3">
              <TextField
                label="Search by keyword, bill # or legislator name"
                variant="outlined"
                className="mb-4"
                sx={{
                  flexBasis: "40%",
                  borderRadius: "8px",
                }}
                InputProps={{ startAdornment: <SearchIcon /> }}
              />
              <div className="h-12 w-[1px] bg-neutral200" />
              <div className="gap-3">
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Chamber</InputLabel>
                  <Select defaultValue="" label="Bill Type">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="proposed">Proposed</MenuItem>
                    <MenuItem value="amended">Amended</MenuItem>
                    <MenuItem value="vetoed">Vetoed</MenuItem>
                    <MenuItem value="passed">Passed</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Bill Type</InputLabel>
                  <Select defaultValue="" label="Bill Type">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="proposed">Proposed</MenuItem>
                    <MenuItem value="amended">Amended</MenuItem>
                    <MenuItem value="vetoed">Vetoed</MenuItem>
                    <MenuItem value="passed">Passed</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Bill Status</InputLabel>
                  <Select
                    defaultValue=""
                    label="Bill Status"
                    onClick={handleOpenBillStatusDialog}
                  >
                    <MenuItem value="select">select</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Year</InputLabel>
                  <Select defaultValue="" label="Session/Year">
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <Button text="Search Bill" className="mt-4" />
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
              <TextField
                label="Search by keyword, bill # or legislator name"
                variant="outlined"
                className="mb-4"
                sx={{
                  flexBasis: "40%",
                  borderRadius: "8px",
                }}
                InputProps={{ startAdornment: <SearchIcon /> }}
              />
              <div className="h-12 w-[1px] bg-neutral200" />
              <div className="gap-3">
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Chamber</InputLabel>
                  <Select defaultValue="" label="Bill Type">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="proposed">Proposed</MenuItem>
                    <MenuItem value="amended">Amended</MenuItem>
                    <MenuItem value="vetoed">Vetoed</MenuItem>
                    <MenuItem value="passed">Passed</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Bill Type</InputLabel>
                  <Select defaultValue="" label="Bill Type">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="proposed">Proposed</MenuItem>
                    <MenuItem value="amended">Amended</MenuItem>
                    <MenuItem value="vetoed">Vetoed</MenuItem>
                    <MenuItem value="passed">Passed</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Bill Status</InputLabel>
                  <Select
                    defaultValue=""
                    label="Bill Status"
                    onClick={handleOpenBillStatusDialog}
                  >
                    <MenuItem value="select">select</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={dropdownStyle}>
                  <InputLabel>Year</InputLabel>
                  <Select defaultValue="" label="Session/Year">
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                  </Select>
                </FormControl>
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
            <div className="row gap-5 flex-wrap">
              {watchedBills.map((watchedBill) => (
                <div
                  key={watchedBill.state}
                  className="w-[349px] h-[245px] px-4 pt-5"
                >
                  <div className="row justify-between items-center">
                    <Pill
                      text={watchedBill.state}
                      textClass="font-semibold text-primary text-sm"
                    />
                    <MoreHorizOutlinedIcon />
                  </div>

                  <h4 className="line-clamp-2 py-2">{watchedBill.title}</h4>
                  <div className="row justify-between items-center pb-3">
                    <h6 className="text-primary text-sm font-semibold">
                      {watchedBill.status}
                    </h6>
                    <p className="text-neutral500 text-xs line-clamp-3">
                      {watchedBill.relativeTime}
                    </p>
                  </div>

                  <p className="text-sm text-neutral500">
                    {watchedBill.description}
                  </p>
                </div>
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
          <TextField
            fullWidth
            label="Find stage"
            variant="outlined"
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
    </div>
  );
};
