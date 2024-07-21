import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  IconButton,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const states = [
  { name: 'Alabama', code: 'AL' },
  { name: 'Alaska', code: 'AK' },
  { name: 'Arizona', code: 'AZ' },
  { name: 'Arkansas', code: 'AR' },
  { name: 'California', code: 'CA' },
  { name: 'Colorado', code: 'CO' },
  { name: 'Connecticut', code: 'CT' },
  { name: 'Delaware', code: 'DE' },
  { name: 'Florida', code: 'FL' },
  { name: 'Georgia', code: 'GA' },
  { name: 'Hawaii', code: 'HI' },
  { name: 'Idaho', code: 'ID' },
  { name: 'Illinois', code: 'IL' },
  { name: 'Indiana', code: 'IN' },
  { name: 'Iowa', code: 'IA' },
  { name: 'Kansas', code: 'KS' },
  { name: 'Kentucky', code: 'KY' },
  { name: 'Louisiana', code: 'LA' },
  { name: 'Maine', code: 'ME' },
  { name: 'Maryland', code: 'MD' },
  { name: 'Massachusetts', code: 'MA' },
  { name: 'Michigan', code: 'MI' },
  { name: 'Minnesota', code: 'MN' },
  { name: 'Mississippi', code: 'MS' },
  { name: 'Missouri', code: 'MO' },
  { name: 'Montana', code: 'MT' },
  { name: 'Nebraska', code: 'NE' },
  { name: 'Nevada', code: 'NV' },
  { name: 'New Hampshire', code: 'NH' },
  { name: 'New Jersey', code: 'NJ' },
  { name: 'New Mexico', code: 'NM' },
  { name: 'New York', code: 'NY' },
  { name: 'North Carolina', code: 'NC' },
  { name: 'North Dakota', code: 'ND' },
  { name: 'Ohio', code: 'OH' },
  { name: 'Oklahoma', code: 'OK' },
  { name: 'Oregon', code: 'OR' },
  { name: 'Pennsylvania', code: 'PA' },
  { name: 'Rhode Island', code: 'RI' },
  { name: 'South Carolina', code: 'SC' },
  { name: 'South Dakota', code: 'SD' },
  { name: 'Tennessee', code: 'TN' },
  { name: 'Texas', code: 'TX' },
  { name: 'Utah', code: 'UT' },
  { name: 'Vermont', code: 'VT' },
  { name: 'Virginia', code: 'VA' },
  { name: 'Washington', code: 'WA' },
  { name: 'West Virginia', code: 'WV' },
  { name: 'Wisconsin', code: 'WI' },
  { name: 'Wyoming', code: 'WY' },
];
const stages = [
  'Filed',
  'Enrolled',
  'Reading-1',
  'Passed',
  'Introduced',
  'Reading-2',
  'Referred to committee',
  'Amendment-failure',
  'Executive-receipt',
  'Amendment-introduction',
  'Amendment-passage',
  'Amendment-withdrawal'
];

export const Dashboard: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openBillStatusDialog, setOpenBillStatusDialog] = useState(false);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenBillStatusDialog = () => setOpenBillStatusDialog(true);
  const handleCloseBillStatusDialog = () => setOpenBillStatusDialog(false);

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stateCode = event.target.value;
    setSelectedStates(prevState =>
      prevState.includes(stateCode)
        ? prevState.filter(code => code !== stateCode)
        : [...prevState, stateCode]
    );
  };

  const handleSaveSelections = () => {
    console.log('Selected States:', selectedStates);
    handleCloseModal();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleToggleStage = (stage: string) => {
    setSelectedStages(prevState =>
      prevState.includes(stage)
        ? prevState.filter(s => s !== stage)
        : [...prevState, stage]
    );
  };

  const handleSaveBillStatus = () => {
    console.log('Selected Stages:', selectedStages);
    handleCloseBillStatusDialog();
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div
        className="w-64 bg-white text-black flex flex-col border-r border-gray-200"
        style={{
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <div className="p-4 flex flex-col">
          <Typography variant="h6" className="font-bold text-blue-900">Coterie AI</Typography>
          <Typography variant="body1" className="mt-2 text-gray-700">Legislature</Typography>
        </div>
        <div className="p-4 flex flex-col">
          <List>
            <ListItem button className="hover:bg-gray-200">
              <ListItemText primary="My Workspace" />
            </ListItem>
            <ListItem button className="hover:bg-gray-200">
              <ListItemText primary="Select Legislature" />
            </ListItem>
            <ListItem button className="hover:bg-gray-200">
              <ListItemText primary="US Congress (US)" />
            </ListItem>
            <ListItem button className="hover:bg-gray-200">
              <ListItemText primary="Alaska (AK)" />
            </ListItem>
            <ListItem button className="hover:bg-gray-200">
              <ListItemText primary="Colorado (CO)" />
            </ListItem>
            <ListItem button className="hover:bg-gray-200">
              <ListItemText primary="Texas (TX)" />
            </ListItem>
            <ListItem button onClick={handleOpenModal} className="hover:bg-gray-200">
              <ListItemText primary="Add Legislature" />
            </ListItem>
          </List>
          <Divider className="my-4" />
          <Typography variant="body1" className="mb-2 text-gray-700">OVERVIEW</Typography>
          <List>
            <ListItem button>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ListAltIcon /></ListItemIcon>
              <ListItemText primary="Bills" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Representatives" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FeedIcon /></ListItemIcon>
              <ListItemText primary="Activity Feed" />
            </ListItem>
          </List>
          <Divider className="my-4" />
          <Typography variant="body1" className="mb-2 text-gray-700">SETTINGS</Typography>
          <List>
            <ListItem button>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Profile Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><HelpIcon /></ListItemIcon>
              <ListItemText primary="Help & Support" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </div>

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
          <Paper elevation={3} className="p-4 mb-4">
            <Typography variant="h6" className="mb-4">Search for Bills</Typography>
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
                <Select defaultValue="" label="Bill Status" onClick={handleOpenBillStatusDialog}>
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
            <Button variant="contained" color="primary">Search Bill</Button>
          </Paper>

          {/* Ask Coterie AI and Explore Bills Sections */}
          <div className="flex gap-4 mb-4">
            <Paper elevation={3} className="p-4 flex-1">
              <Typography variant="h6" className="font-bold mb-4">Ask Coterie AI</Typography>
              <Typography variant="body1" className="mb-4">
                Coterie AI is ready to answer any questions you may have
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowForwardIcon />}
                className="text-blue-900"
              >
                Ask Now
              </Button>
            </Paper>

            <Paper elevation={3} className="p-4 flex-1">
              <Typography variant="h6" className="font-bold mb-4">Explore Bills</Typography>
              <Typography variant="body1" className="mb-4">
                Feeling explorative? Look through all available bills
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowForwardIcon />}
                className="text-blue-900"
              >
                Explore Bills
              </Button>
            </Paper>
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
        <div className="w-80 flex flex-col gap-4">
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

      {/* Add Legislature Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add Legislature</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>Select your preferred state to watch legislature</Typography>
          <Typography variant="body2" gutterBottom>Find states</Typography>
          {states.map((state) => (
            <FormControlLabel
              key={state.code}
              control={
                <Checkbox
                  value={state.code}
                  checked={selectedStates.includes(state.code)}
                  onChange={handleStateChange}
                />
              }
              label={`${state.name} - ${state.code}`}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveSelections} color="primary">
            Save Selections
          </Button>
        </DialogActions>
      </Dialog>

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
            {stages.filter(stage => stage.toLowerCase().includes(search.toLowerCase())).map(stage => (
              <ListItem button key={stage} onClick={() => handleToggleStage(stage)}>
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