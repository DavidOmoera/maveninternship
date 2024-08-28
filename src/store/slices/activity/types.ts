import { TActivityLogs } from "types/common";

export type TActivityState = Partial<{
  activities: TActivityLogs[];
  activitiesLoading: boolean;
  activitiesError: string;
}>;
