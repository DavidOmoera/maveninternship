import { ControlledSelect } from "components/organisms/ControlledSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { activitySearchSchema } from "constants/schemas";
import { ControlledInput } from "components/organisms/ControlledInput";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "constants/common";
import { PageContainer } from "components/templates/PageContainer";
import { Pill } from "components/molecules/Pill";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useMemo } from "react";
import { searchObjects } from "utils/helpers";
import { getActivityLogs } from "store/slices/activity/thunks";
import {
  activityError,
  activityLoading,
  getActivitySelector,
} from "store/slices/activity/selectors";
import { useAppDispatch, useAppSelector } from "utils/helpers";

dayjs.extend(relativeTime);

const ACTIVITY_OPTIONS = [
  { id: 1, label: "All Activity", value: "All" },
  { id: 2, label: "Added a bill", value: "Added" },
  { id: 3, label: "Removed a bill", value: "Removed" },
  { id: 4, label: "Edited a bill", value: "Edited" },
];

const PERIOD_OPTIONS = [
  { id: 1, label: "Last 180 days", value: "180" },
  { id: 2, label: "Last 30 days", value: "30" },
  { id: 3, label: "Last 7 days", value: "7" },
];

function isActivityXDaysAgo(noOfDays: string, daysAgo: number) {
  return !noOfDays ? true : Number(noOfDays) > daysAgo;
}

function isActivityType(activityType: string, selectedActivityType: string) {
  return !selectedActivityType
    ? true
    : selectedActivityType === "All"
    ? true
    : activityType === selectedActivityType;
}

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function ActivityFeed() {
  const dispatch = useAppDispatch();

  const activities = useAppSelector(getActivitySelector) || [];
  const isLoading = useAppSelector(activityLoading);
  const error = useAppSelector(activityError);

  useEffect(() => {
    dispatch(getActivityLogs({ user_id: 1 }));
  }, [dispatch]);

  const {
    control: activityControl,
    formState: { errors: activityFormErrors },
    watch,
  } = useForm<TActivitySearchForm>({
    resolver: yupResolver(activitySearchSchema),
  });

  const selectedActivityType = watch("activity");
  const searchValue = watch("searchValue");
  const noOfDays = watch("noOfDays");

  const searchedActivities = useMemo(() => {
    const now = dayjs();

    const filteredActivities = (activities || []).filter((activity) => {
      const activityDate = dayjs(activity.timestamp);
      const activityDaysAgo = now.diff(activityDate, "day");

      return (
        isActivityXDaysAgo(noOfDays ?? "", activityDaysAgo) &&
        isActivityType(activity.activity_type ?? "", selectedActivityType ?? "")
      );
    });

    return searchObjects(
      filteredActivities.map((activity) => ({
        activity_type: activity.activity_type ?? "",
        description: activity.description ?? "",
        user_id: (activity.user_id ?? "").toString(),
        id: (activity.id ?? "").toString(),
        timestamp: (activity.timestamp ?? "").toString(),
      })),
      searchValue ?? "",
      ["activity_type", "description", "user_id", "id", "timestamp"]
    );
  }, [activities, noOfDays, selectedActivityType, searchValue]);

  return (
    <PageContainer title="Activity Feed" className="w-full bg-gray-100 ">
      <div className="mb-2 mx-9">
        {isLoading && (
          <div className="text-blue-800">Loading activities...</div>
        )}
        {error && (
          <div className="text-red-500">
            Failed to load activities. Please try again.
          </div>
        )}
      </div>

      <div className="p-6 lg:p-8 mb-9 mx-9 bg-white rounded-xl">
        {/** Input fields */}
        <div className="row justify-between mb-9 flex-wrap gap-3">
          <div className="flex gap-3 w-full lg:w-fit">
            <ControlledSelect
              name="noOfDays"
              control={activityControl}
              defaultValue="180"
              options={PERIOD_OPTIONS}
              helperText={activityFormErrors.noOfDays?.message as string}
            />
            <ControlledSelect
              name="activity"
              control={activityControl}
              defaultValue="All"
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
            containerClasses="w-full bg-neutral50 lg:w-52"
            helperText={activityFormErrors.searchValue?.message as string}
          />
        </div>

        {/** Activity feed */}
        <div className="col gap-8">
          {searchedActivities.map(
            (
              {
                timestamp,
                activity_type,
                description,
                icon,
                iconBackgroundColor,
                link,
              },
              index
            ) => {
              const relTime = dayjs(timestamp).fromNow(true);

              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="row items-start lg:items-center p-2 rounded-lg bg-blue-50 min-h-16">
                    <div className="w-24 lg:w-1/6">
                      <p className="text-gray-500 text-sm font-medium">
                        {relTime}
                      </p>
                    </div>
                    <div className="row items-center gap-2 flex-wrap w-full md:w-5/6 mr-0 lg:mr-14">
                      <div className="row">
                        <div
                          className="p-1 rounded-full"
                          style={{ backgroundColor: iconBackgroundColor }}
                        >
                          <img
                            src={icon}
                            alt={activity_type}
                            className="w-4 h-4"
                          />
                        </div>
                        <span className=" text-gray-700 text-base font-semibold w-64 lg:w-fit">
                          You{" "}
                          <strong className="text-neutral-950">
                            {activity_type}
                          </strong>{" "}
                          {description}
                        </span>
                      </div>

                      {link && (
                        <Pill
                          text={link}
                          containerClassName="bg-blue-100 px-3 rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </PageContainer>
  );
}
