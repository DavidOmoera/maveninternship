import { TActivityLogs } from "types/common";

export type ActivityState = Partial<{
  activities: TActivityLogs[];
  activitiesLoading: boolean;
  activitiesError: string | null;
}>;
