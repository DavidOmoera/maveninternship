import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { activitySearchSchema } from "constants/schemas";
import { ControlledInput } from "components/organisms/ControlledInput";
import SearchIcon from "@mui/icons-material/Search";
import bookmark from "assets/bookmark.svg";
import { PageContainer } from "components/templates/PageContainer";
import { Button } from "components/atoms/Button";
import { Pill } from "components/molecules/Pill";
import { useNavigate } from "react-router-dom";
import { Routes } from "types/routes.ts";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Representative } from "types/common.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/slices/index.ts";
import { addTopRep, removeTopRep } from "store/slices/topRepsSlice";
import classNames from "classnames";
import { representatives } from "constants/common";
import { legislativeSessionsApi, committeesApi } from "api/index";
import {
  TGetLegislativeSessionsResponse,
  Committee,
  CommitteeMembership,
} from "types/common.ts";
import { handleApiError } from "utils/helpers";
import { AxiosError } from "axios";

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function HouseReps() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [legislativeSessions, setLegislativeSessions] =
    useState<TGetLegislativeSessionsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [committees, setCommittees] = useState<Committee[] | null>(null);
  const [committeeMemberships, setCommitteeMemberships] = useState<
    CommitteeMembership[] | null
  >(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topReps = useSelector((state: RootState) => state.topReps.topReps);

  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        setLoading(true);

        // Fetch committees first
        const committeesResponse = await committeesApi.getCommitteesRequest();
        const committees = committeesResponse.data.committees;

        setCommittees(committees);

        // Fetch memberships for each committee
        const membershipsPromises = committees.map((committee) =>
          committeesApi.getCommitteeMembershipsRequest(committee.id)
        );
        const membershipsResponses = await Promise.all(membershipsPromises);
        const memberships = membershipsResponses.flatMap((response) => response.data);

        setCommitteeMemberships(memberships);

      } catch (error) {
        handleApiError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchCommitteeData();
  }, []);


  const handleToggleExpand = (index: number) => {
    setExpandedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleAddToTopReps = (rep: Representative) => {
    const updatedRep: Representative = { ...rep, pageType: "House" };
    if (isRepInTopReps(updatedRep)) {
      dispatch(removeTopRep(updatedRep));
    } else {
      dispatch(addTopRep(updatedRep));
    }
  };

  const isRepInTopReps = (rep: Representative) =>
    topReps.some((existingRep: { name: string; }) => existingRep.name === rep.name);

  const onClickRepresentative = (id: number, pageType: string) => {
    navigate(Routes.RepProfile + `/${id}`, { state: { pageType } });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TActivitySearchForm>({
    resolver: yupResolver(activitySearchSchema),
  });

  const onSearchBill: SubmitHandler<Partial<{ searchValue: string; activity: string; noOfDays: string; }>> = async (data) => {
    setLoading(true);
    try {
      const response = await legislativeSessionsApi.getLegislativeSessionsRequest({
        jurisdiction: data.searchValue || "default_jurisdiction",
      });
      setLegislativeSessions(response.data);
    } catch (error) {
      handleApiError(error as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  const getCommitteeForRep = (repId: number) => {
    return committeeMemberships?.filter(
      (membership) => membership.representative_id === repId
    ) || [];
  };


  return (
    <PageContainer title="House" className="w-full bg-gray-100">
      <div className="p-9 mb-9 mx-9 bg-white rounded-xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 bg-white rounded-xl p-4">
            <div className="flex items-center gap-3">
              <ControlledInput
                required
                control={control}
                name="searchValue"
                placeholder="Search by keyword, bill # or legislator name"
                leftIcon={<SearchIcon />}
                error={!!errors.searchValue}
                helperText={(errors.searchValue?.message as string) ?? ""}
              />
              <Button
                text="Search Representatives"
                className="bg-blue-900 text-white py-2 px-4 rounded-lg"
                onClick={handleSubmit(onSearchBill)}
                disabled={loading}
              />
            </div>
          </div>

          {/* Display legislative sessions  */}
          {legislativeSessions && (
            <div className="bg-white rounded-xl p-4 mt-4">
              <h2 className="text-lg font-bold mb-4">Legislative Sessions</h2>
              {legislativeSessions.map((session) => (
                <div key={session.id} className="p-4 border rounded mb-2">
                  <h3 className="text-md font-semibold">{session.name}</h3>
                  <p>{session.classification}</p>
                  <p>
                    {session.start_date} - {session.end_date}
                  </p>
                  <p>Status: {session.active ? "Active" : "Inactive"}</p>
                </div>
              ))}
            </div>
          )}

          {/* Display loading state */}
          {loading && (
            <div className="flex justify-center mt-4">
              <span>Loading...</span>
            </div>
          )}

          {/* Display representatives */}
          <div className="bg-white rounded-xl p-4">
            <div className="row gap-5 flex-wrap mt-8">
              {representatives.map((rep, index) => (
                <div
                  key={index}
                  className="row flex-wrap p-6 rounded-xl shadow relative max-w-[460px]"
                  onClick={() => onClickRepresentative(rep.id, "House")}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        src={rep.image}
                        alt="Representative"
                        style={{
                          width: "64px",
                          height: "64px",
                          gap: "0px",
                          borderRadius: "12px",
                          objectFit: "cover",
                          opacity: 1,
                        }}
                        className="mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold">{rep.name}</h4>
                        <div className="flex items-center">
                          <Pill
                            text="Representative"
                            containerClassName="rounded-full bg-[#e7f1ff] px-4 py-1"
                            textClass="text-[#1026C3] text-sm"
                          />
                          <span className="text-xs text-blue-700 md:text-base">
                            • District {rep.district}, Texas
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-10 text-sm">
                      {expandedIndexes.includes(index)
                        ? rep.description
                        : `${rep.description.slice(0, 200)}`}
                      {rep.description.length > 200 && (
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleExpand(index);
                          }}
                        >
                          {expandedIndexes.includes(index)
                            ? "..show less"
                            : "...show more"}
                        </span>
                      )}
                    </p>

                    {/* Display Committee Memberships */}
                    {committees && getCommitteeForRep(rep.id) && getCommitteeForRep(rep.id).length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold">Committees:</h4>
                        {getCommitteeForRep(rep.id)!.map((membership, idx) => {
                          const committee = committees?.find(
                            (committee) => committee.id === membership.committee_id
                          );
                          return committee ? (
                            <div key={idx}>
                              <span>{committee.name}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}



                  </div>
                  <button
                    className={classNames(
                      "flex items-center absolute bottom-4 right-4 border-none cursor-pointer bg-transparent outline-none focus:outline-none text-xs lg:text-lg",
                      {
                        "text-error": isRepInTopReps(rep),
                        "text-primary": !isRepInTopReps(rep),
                      }
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToTopReps(rep);
                    }}
                  >
                    <img
                      src={bookmark}
                      alt="Bookmark Icon"
                      style={{
                        marginRight: "0.5rem",
                        width: "24px",
                        height: "24px",
                        filter: isRepInTopReps(rep)
                          ? "invert(24%) sepia(88%) saturate(7486%) hue-rotate(358deg) brightness(108%) contrast(112%)"
                          : "none",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Mulish",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "17.57px",
                        textAlign: "left",
                      }}
                    >
                      {isRepInTopReps(rep)
                        ? "Remove from Top Representatives"
                        : "Add to Top Representatives"}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </PageContainer>
  );
}
