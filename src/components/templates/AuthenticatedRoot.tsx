import { Logo } from "components/atoms/Logo";
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Routes } from "types/routes";
import {
  Typography,
  Dialog,
  Checkbox,
  FormControlLabel,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "store/slices/index.ts";
import { Button } from "components/atoms/Button";
import { STATES } from "constants/common";
import { Legislature, TState } from "components/atoms/Legislature";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import usCongress from "assets/us_congress.png";
import stateCongress from "assets/state_congress.png";
import { Home } from "../../assets/Home";
import { Gavel } from "../../assets/Gavel";
import { Group } from "../../assets/Group";
import { Timeline } from "../../assets/Timeline";
import { SupportAgent } from "../../assets/SupportAgent";
import { Settings } from "../../assets/Settings";
import { Logout } from "../../assets/Logout";
import expand from "assets/expand.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const allStates = [{ name: "US Congress", code: "US" }, ...STATES];

export function AuthenticatedRoot() {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("Dashboard");
  const [isLegislatureModalOpen, setIsLegislatureModalOpen] =
    useState<boolean>(false);
  const [selectedStates, setSelectedStates] = useState<TState[]>([
    { name: "US Congress", code: "US" },
    { name: "Alaska", code: "AK" },
    { name: "Colorado", code: "CO" },
    { name: "Texas", code: "TX" },
  ]);
  const [selectedLegislatures, setSelectedLegislatures] = useState<TState[]>(
    []
  );
  const [openRepresentatives, setOpenRepresentatives] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const topRepsState = useSelector((state: RootState) => state.topReps);
  const hasTopReps = topRepsState.topReps.length > 0;

  const sideNavItems = [
    {
      title: "Overview",
      buttons: [
        {
          text: "Dashboard",
          icon: Home,
          iconColor: "",
          link: Routes.Dashboard,
          onClick: () => {},
        },
        {
          text: "Bills",
          icon: Gavel,
          iconColor: "",
          link: Routes.Bills,
          onClick: () => {},
        },
        {
          text: "Representatives",
          icon: Group,
          iconColor: "",
          link: Routes.Representatives,
          onClick: () => setOpenRepresentatives(!openRepresentatives),
          subItems: [
            ...(hasTopReps
              ? [{ text: "My Top Reps", link: Routes.TopReps }]
              : []),
            { text: "House", link: Routes.HouseReps },
            { text: "Senate", link: Routes.SenateReps },
          ],
        },
        {
          text: "Activity Feed",
          icon: Timeline,
          iconColor: "",
          link: Routes.ActivityFeed,
          onClick: () => {},
        },
      ],
    },
    {
      title: "Settings",
      buttons: [
        {
          text: "Profile Settings",
          icon: Settings,
          link: Routes.Profile,
          iconColor: "",
          onClick: () => {},
        },
        {
          text: "Help & Support",
          icon: SupportAgent,
          link: Routes.HelpAndSupport,
          iconColor: "",
          onClick: () => {},
        },
        {
          text: "Logout",
          icon: Logout,
          link: Routes.Login,
          iconColor: "#FF2A58",
          onClick: () => {},
        },
      ],
    },
  ];

  function onOpenLegislatureModal() {
    setIsLegislatureModalOpen(true);
  }

  function onCloseLegislatureModal() {
    setIsLegislatureModalOpen(false);
  }

  function onClickMenuItem(
    itemName: string,
    link?: string,
    callBack?: () => void
  ) {
    if (link) {
      navigate(link);
    }
    callBack?.();
    setActiveMenuItem(itemName);
  }

  function getStateByCode(stateCode: string) {
    return allStates.find((state) => state.code === stateCode);
  }

  function onSelectState(
    event: React.ChangeEvent<HTMLInputElement>,
    isSelected: boolean
  ) {
    const stateCode = event.target.value;
    const selectedState = getStateByCode(stateCode) as TState;

    setSelectedStates((prevState) => {
      const filteredStates = prevState.filter(
        (state) => state.code !== selectedState.code
      );

      return isSelected ? filteredStates : filteredStates.concat(selectedState);
    });
  }

  function isStateSelected(stateCode: string) {
    return selectedStates.some((state) => stateCode === state.code);
  }

  function isLegislatureSelected(stateCode: string) {
    return selectedLegislatures.some((state) => stateCode === state.code);
  }

  function onSelectLegislature(selectedState: TState, isChecked: boolean) {
    setSelectedLegislatures((prevState) => {
      const filteredStates = prevState.filter(
        (state) => state.code !== selectedState.code
      );

      return isChecked ? filteredStates : filteredStates.concat(selectedState);
    });
  }

  return (
    <main className="bg-neutral25 row relative">
      {/* sidebar icon */}
      <div>
        <button
          className="absolute block md:hidden mt-8  text-primary bg-transparent top-6 right-10"
          onClick={toggleSidebar}
        >
          <MenuIcon fontSize="large" />
        </button>

        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block fixed md:relative top-0 left-0 h-full z-40 basis-[21%] flex-1 bg-white px-4 py-9 overflow-y-auto min-w-80 no-scrollbar shadow-2xl`}
        >
          <button
            className="block md:hidden absolute top-4 right-4 p-3 text-primary bg-transparent"
            onClick={toggleSidebar}
          >
            <ArrowBackIosIcon />
          </button>

          {/* Sidebar content */}
          <a
            className="flex flex-col pl-7 pt-9 pb-6 max-w-44"
            href={Routes.Dashboard}
          >
            <Logo />
            <div className="row justify-end">
              <h6 className="italic text-primary font-extrabold">
                Legislature
              </h6>
            </div>
          </a>

          {/* Legislatures */}
          <div className="my-6 mx-4 px-5 py-6 bg-accent50 col items-center rounded-xl">
            <p className="text-sm pb-2 text-neutral400">My Workspace</p>
            <h6 className="pb-4">Select Legislature</h6>
            <div className="col gap-2 overflow-y-auto max-h-60 items-center w-full no-scrollbar">
              {selectedStates.map((state) => {
                const isChecked = isLegislatureSelected(state.code);

                return (
                  <Legislature
                    key={state.code}
                    isChecked={isChecked}
                    state={state}
                    icon={state.code === "US" ? usCongress : stateCongress}
                    onClick={(selectedState) =>
                      onSelectLegislature(selectedState, isChecked)
                    }
                  />
                );
              })}
            </div>
            <div
              className="row justify-center p-2 gap-1 mt-2 border border-primary border-dashed w-full rounded-lg cursor-pointer"
              onClick={onOpenLegislatureModal}
            >
              <AddOutlinedIcon />
              <p className="text-primary">Add Legislature</p>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="overflow-y-auto">
            {sideNavItems.map((item) => (
              <div key={item.title}>
                <div className="text-neutral400 text-xs font-extrabold uppercase pl-7 pb-2">
                  {item.title}
                </div>
                <List>
                  {item.buttons.map((button) => (
                    <div key={button.text}>
                      {button.text === "Representatives" ? (
                        <>
                          <ListItem
                            className={`group row gap-3 items-center rounded-md py-4 px-6 hover:bg-accent50 hover:border-r-4 hover:border-accent800 cursor-pointer ${
                              activeMenuItem === button.text
                                ? "bg-accent50 border-r-4 border-accent800"
                                : ""
                            }`}
                            onClick={() => {
                              onClickMenuItem(
                                button.text,
                                undefined,
                                button.onClick
                              );
                              setOpenRepresentatives(!openRepresentatives);
                            }}
                          >
                            <button.icon
                              className={`mr-2 ${
                                activeMenuItem === button.text
                                  ? "text-blue-900"
                                  : "text-neutral600"
                              }`}
                              color={
                                button.iconColor ||
                                (activeMenuItem === button.text
                                  ? "#172B98"
                                  : "#454545")
                              }
                            />
                            <ListItemText
                              primary={
                                <h6
                                  className={`group-hover:text-accent800 ${
                                    activeMenuItem === button.text
                                      ? "text-accent800 font-bold"
                                      : "text-neutral800 font-normal"
                                  }`}
                                >
                                  {button.text}
                                </h6>
                              }
                            />
                            <IconButton
                              edge="end"
                              aria-label="more"
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenRepresentatives(!openRepresentatives);
                              }}
                            >
                              <img
                                src={expand}
                                alt="Expand"
                                className={`transition-transform transform ${
                                  openRepresentatives
                                    ? "rotate-0"
                                    : "rotate-180"
                                }`}
                              />
                            </IconButton>
                          </ListItem>
                          <Collapse in={openRepresentatives}>
                            <List component="div" disablePadding>
                              {button.subItems?.map((subItem) => (
                                <ListItem
                                  key={subItem.text}
                                  className={`cursor-pointer ${
                                    location.pathname === subItem.link
                                      ? "bg-accent50 border-r-4 border-accent800"
                                      : "hover:bg-accent50 hover:border-r-4 hover:border-accent800 rounded"
                                  }`}
                                  onClick={() => navigate(subItem.link)}
                                >
                                  <ListItemText
                                    primary={
                                      <h6
                                        className={`${
                                          location.pathname === subItem.link
                                            ? "text-accent800 font-semibold"
                                            : "text-neutral800 font-medium text-base"
                                        } group-hover:text-accent800`}
                                      >
                                        {subItem.text}
                                      </h6>
                                    }
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </>
                      ) : (
                        <ListItem
                          className={`group row gap-4 items-center rounded-md py-4 px-6 hover:bg-accent50 hover:border-r-4 hover:border-accent800 cursor-pointer ${
                            location.pathname === button.link
                              ? "bg-accent50 border-r-4 border-accent800"
                              : ""
                          }`}
                          onClick={() =>
                            onClickMenuItem(
                              button.text,
                              button.link,
                              button.onClick
                            )
                          }
                        >
                          <button.icon
                            className={`mr-2 ${
                              location.pathname === button.link
                                ? "text-blue-900"
                                : "text-neutral600"
                            }`}
                            color={
                              button.iconColor ||
                              (location.pathname === button.link
                                ? "#172B98"
                                : "#454545")
                            }
                          />
                          <ListItemText
                            primary={
                              <h6
                                className={`group-hover:text-accent800 ${
                                  location.pathname === button.link
                                    ? "text-accent800 font-semibold"
                                    : "text-neutral800 font-medium text-base"
                                }`}
                              >
                                {button.text}
                              </h6>
                            }
                          />
                        </ListItem>
                      )}
                    </div>
                  ))}
                </List>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="md:basis-[79%]">
        <Outlet />
      </div>

      {/* Add Legislature Modal */}
      <Dialog
        open={isLegislatureModalOpen}
        PaperProps={{ style: { padding: "36px", width: "720px" } }}
        onClose={onCloseLegislatureModal}
      >
        <div className="row justify-between items-start">
          <article className="col gap-3">
            <h2 className="text-neutral950">Add Legislature</h2>
            <p className="text-neutral950 text-sm">
              Select your preferred state to watch legislature
            </p>
          </article>
          <IconButton onClick={onCloseLegislatureModal}>
            <CloseOutlinedIcon />
          </IconButton>
        </div>

        <Typography variant="body2" gutterBottom>
          Find states
        </Typography>

        <div className="grid grid-cols-2 mb-9">
          {STATES.map((state) => {
            const isSelected = isStateSelected(state.code);

            return (
              <FormControlLabel
                key={state.code}
                control={
                  <Checkbox
                    value={state.code}
                    checked={isSelected}
                    onChange={(e) => onSelectState(e, isSelected)}
                    style={{
                      color: isSelected ? "#1026C3" : "#D1D1D1",
                    }}
                    sx={{
                      [`&, &.Mui-checked`]: {
                        color: "#1026C3",
                      },
                      color: "#D1D1D1",
                    }}
                  />
                }
                label={`${state.name} - ${state.code}`}
              />
            );
          })}
        </div>

        <div className="row w-full justify-end">
          <Button
            onClick={onCloseLegislatureModal}
            color="primary"
            text="Save Selections"
          />
        </div>
      </Dialog>
    </main>
  );
}
