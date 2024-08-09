import { ControlledSelect } from "components/organisms/ControlledSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { activitySearchSchema } from "constants/schemas";
import { ControlledInput } from "components/organisms/ControlledInput";
import SearchIcon from "@mui/icons-material/Search";
import { ACTIVITIES, colors } from "constants/common";
import { PageContainer } from "components/templates/PageContainer";
import { Pill } from "components/molecules/Pill";

const ACTIVITY_OPTIONS = [
  { id: 1, label: "All Activity", value: "all" },
  { id: 1, label: "Added a bill", value: "add_bill" },
  { id: 1, label: "Removed a bill", value: "removed_bill" },
  { id: 1, label: "Edited a bill", value: "edited_bill" },
];

const PERIOD_OPTIONS = [
  { id: 1, label: "Last 180 days", value: "180_days" },
  { id: 1, label: "Last 30 days", value: "30_days" },
  { id: 1, label: "Last 7 days", value: "7_days" },
];

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function ActivityFeed() {
  const {
    control: activityControl,
    formState: { errors: activityFormErrors },
  } = useForm<TActivitySearchForm>({
    resolver: yupResolver(activitySearchSchema),
  });

  return (
    <PageContainer title="Activity Feed" className="w-full bg-gray-100">
      <div className="p-9 mb-9 mx-9 mt-6 bg-white rounded-xl">
        {/** Input fields */}
        <div className="row justify-between mb-9">
          <div className="flex gap-3 w-96">
            <ControlledSelect
              name="noOfDays"
              control={activityControl}
              defaultValue="180_days"
              options={PERIOD_OPTIONS}
              helperText={activityFormErrors.noOfDays?.message as string}
            />
            <ControlledSelect
              name="activity"
              control={activityControl}
              defaultValue="all"
              options={ACTIVITY_OPTIONS}
              helperText={activityFormErrors.activity?.message as string}
            />
          </div>
          <ControlledInput
            name="searchValue"
            placeholder="Search Activity"
            control={activityControl}
            leftIcon={<SearchIcon />}
            backgroundColor={colors.neutral50}
            containerClasses="w-52 bg-neutral50"
            helperText={activityFormErrors.searchValue?.message as string}
          />
        </div>

        {/** Activity feed */}
        <div className="col gap-8">
          {ACTIVITIES.map(
            ({ time, icon, type, label, iconBackgroundColor, link }, index) => (
              <div key={index} className="flex flex-col gap-6 ">
                <div className="row items-center gap-2 ">
                  <div className="w-36">
                    <p className="text-gray-500 text-sm ">{time}</p>
                  </div>
                  <div className="row items-center gap-2">
                    <div
                      className="p-1 rounded-full"
                      style={{ backgroundColor: iconBackgroundColor }}
                    >
                      <img src={icon} alt={type} className="w-4 h-4 " />
                    </div>

                    <span className="text-gray-700 ">
                      You <strong className="text-neutral950">{type}</strong>{" "}
                      {label}
                    </span>
                    {link && <Pill text={link} />}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </PageContainer>
  );
}
