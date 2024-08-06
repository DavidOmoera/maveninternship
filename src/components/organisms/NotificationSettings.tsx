import {
  Dialog,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import X from "assets/X.svg";

type TNotificationSettingsProps = { open: boolean; onClose: () => void };

export function NotificationSettings({
  open,
  onClose,
}: TNotificationSettingsProps) {
  const [updatePreference, setUpdatePreference] = useState(
    "Both Email and In-app"
  );
  const [notificationFrequency, setNotificationFrequency] = useState("Weekly");
  const [disableNotifications, setDisableNotifications] = useState(false);

  const handleUpdatePreferenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatePreference((event.target as HTMLInputElement).value);
  };

  const handleNotificationFrequencyChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setNotificationFrequency(event.target.value as string);
  };

  const handleDisableNotificationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisableNotifications(event.target.checked);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
        <div className="row justify-end">
          <img
            src={X}
            alt="close button"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notification Settings</h2>
        </div>
        <form>
          <div className="mb-4">
            <h3 className="text-lg font-bold">
              Get Updates on Your Watched Bills
            </h3>
            <RadioGroup
              value={updatePreference}
              onChange={handleUpdatePreferenceChange}
            >
              <FormControlLabel
                value="In-app only"
                control={<Radio />}
                label="In-app only"
              />
              <FormControlLabel
                value="Both Email and In-app"
                control={<Radio />}
                label="Both Email and In-app"
              />
            </RadioGroup>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">
              How often would you like to be notified of changes on your tracked
              bills?
            </h3>
            <Select value={notificationFrequency} fullWidth variant="outlined">
              <MenuItem value="Daily">Daily</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </Select>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Disable Notifications</h3>
            <FormControlLabel
              control={
                <Checkbox
                  checked={disableNotifications}
                  onChange={handleDisableNotificationsChange}
                  name="disableNotifications"
                />
              }
              label="I no longer want to receive notifications"
            />
          </div>
        </form>
      </div>
    </Dialog>
  );
}
