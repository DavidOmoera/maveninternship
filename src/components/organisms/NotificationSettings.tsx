import {
  Dialog,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import X from "assets/X.svg";
import CustomSelect from "components/molecules/CustomSelect";

type TNotificationSettingsProps = { open: boolean; onClose: () => void };

export function NotificationSettings({
  open,
  onClose,
}: TNotificationSettingsProps) {
  const [updatePreference, setUpdatePreference] = useState(() => {
    const savedPreference = localStorage.getItem("updatePreference");
    return savedPreference ? savedPreference : "Both Email and In-app";
  });

  const [notificationFrequency, setNotificationFrequency] = useState(() => {
    const savedFrequency = localStorage.getItem("notificationFrequency");
    return savedFrequency ? savedFrequency : "Weekly";
  });

  const [disableNotifications, setDisableNotifications] = useState(() => {
    const savedDisableNotifications = localStorage.getItem(
      "disableNotifications"
    );
    return savedDisableNotifications === "true";
  });

  const handleUpdatePreferenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatePreference(event.target.value);
  };

  const handleNotificationFrequencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNotificationFrequency(event.target.value);
  };

  const handleDisableNotificationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisableNotifications(event.target.checked);
  };

  const handleSaveChanges = () => {
    localStorage.setItem("updatePreference", updatePreference);
    localStorage.setItem("notificationFrequency", notificationFrequency);
    localStorage.setItem("disableNotifications", String(disableNotifications));
  };

  const TIME_OPTIONS = [
    { id: 1, label: "Daily", value: "day" },
    { id: 2, label: "Weekly", value: "week" },
    { id: 3, label: "Monthly", value: "month" },
  ];

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
            <h3 className="text-lg font-bold mb-4">
              How often would you like to be notified of changes on your tracked
              bills?
            </h3>
            <div className="w-36">
              <CustomSelect
                options={TIME_OPTIONS}
                value={notificationFrequency}
                onChange={handleNotificationFrequencyChange}
              />
            </div>
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
          <div className="flex justify-end mt-4">
            <button
              className="text-white bg-red-600"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
