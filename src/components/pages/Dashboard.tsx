import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "components/atoms/Button";
import { DashboardExplore } from "components/atoms/DashboardExplore";
import coterieBot from "assets/coterie_bot.svg";
import bills from "assets/bills.svg";

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
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const handleOpenBillStatusDialog = () => setOpenBillStatusDialog(true);
  const handleCloseBillStatusDialog = () => setOpenBillStatusDialog(false);

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

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100 flex">
        <div className="flex-1">
          {/* Header */}
          <div className="bg-gray-200 p-4 mb-4 flex items-center justify-between">
            <Typography variant="h4">Dashboard</Typography>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>

          {/* Search and Filter Section */}
          <div className="p-9 mt-6 bg-white rounded-xl">
            <h3 className="text-primary font-extrabold text-xl pb-6">
              Search for Bills
            </h3>
            <TextField
              fullWidth
              label="Search by keyword, bill # or legislator name"
              variant="outlined"
              className="mb-4"
            />
            <div className="flex gap-4 mb-4">
              <FormControl fullWidth>
                <InputLabel>Bill Type</InputLabel>
                <Select defaultValue="" label="Bill Type">
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="proposed">Proposed</MenuItem>
                  <MenuItem value="amended">Amended</MenuItem>
                  <MenuItem value="vetoed">Vetoed</MenuItem>
                  <MenuItem value="passed">Passed</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Bill Status</InputLabel>
                <Select
                  defaultValue=""
                  label="Bill Status"
                  onClick={handleOpenBillStatusDialog}
                >
                  <MenuItem value="select">select</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Session/Year</InputLabel>
                <Select defaultValue="" label="Session/Year">
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button text="Search Bill" />
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

          {/* Bills Overview Section */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="p-4 mb-4">
                <Typography variant="h6">Bills Overview</Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Secure the Border Act of 2023"
                      secondary="Introduced 2 Weeks ago"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="National Defense Authorization Act Fiscal Year 2024"
                      secondary="Introduced 2 Weeks ago"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Peace and Tolerance in Palestinian Education Act"
                      secondary="Introduced 2 Weeks ago"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </div>

        {/* Updates and Representatives Section */}
        <div className="invisible md:visible w-80 flex flex-col gap-4">
          <Paper elevation={3} className="p-4">
            <Typography variant="h6">My Updates</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="The Bill 'Funding Bill 2024' was passed to law"
                  secondary="2h ago"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="The Bill 'Transport Bill 2024' was amended"
                  secondary="2d ago"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="The Bill 'Immigration Bill 2024' was vetoed"
                  secondary="2d ago"
                />
              </ListItem>
            </List>
          </Paper>

          <Paper elevation={3} className="p-4">
            <Typography variant="h6">My Top Representatives</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Sen. Ivy Adams" secondary="District 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sen. Mat Adams" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sen. Kevin Miller" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sen. Michael Riz" />
              </ListItem>
            </List>
          </Paper>
        </div>
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
