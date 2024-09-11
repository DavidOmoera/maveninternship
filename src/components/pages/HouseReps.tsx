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
import { Routes } from "types/routes";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Representative, TPersonMembershipsResponse, TPersonOfficesResponse, TPersonResponse, TValidationErrorResponse } from "types/common";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/slices/index";
import { addTopRep, removeTopRep } from "store/slices/topRepsSlice";
import classNames from "classnames";
import { COMMITTEE_ID_PREFIX, representatives } from "constants/common";
import { legislativeSessionsApi, committeesApi } from "api/index";
import { TGetLegislativeSessionsResponse, Committee, CommitteeMembership } from "types/common";
import { handleApiError } from "utils/helpers";
import { AxiosError } from "axios";
import { getPersonRequest, getPersonOfficesRequest, getPersonMembershipsRequest, searchPersonRequest } from "api/personsApi";

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function HouseReps() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [legislativeSessions, setLegislativeSessions] = useState<TGetLegislativeSessionsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [committees, setCommittees] = useState<Committee[] | null>(null);
  const [committeeMemberships, setCommitteeMemberships] = useState<CommitteeMembership[] | null>(null);
  const [personDetails, setPersonDetails] = useState<TPersonResponse | null>(null);
  const [personOffices, setPersonOffices] = useState<TPersonOfficesResponse[]>([]);
  const [personMemberships, setPersonMemberships] = useState<TPersonMembershipsResponse[]>([]);
  const [personId, setPersonId] = useState<string | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topReps = useSelector((state: RootState) => state.topReps.topReps);

  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleValidationErrors = (validationErrors: TValidationErrorResponse) => {
    const errors: { [key: string]: string } = {};
    validationErrors.detail.forEach((error) => {

      const field = Array.isArray(error.loc) ? error.loc.join('.') : 'unknown';
      errors[field] = error.msg;
    });
    setValidationErrors(errors);
  };


  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        setLoading(true);
        const committeesResponse = await committeesApi.getCommitteesRequest();
        setCommittees(committeesResponse.data);

        const membershipsPromises = committeesResponse.data.map((committee) =>
          committeesApi.getCommitteeMembershipsRequest(committee.id.replace(COMMITTEE_ID_PREFIX, ""))
        );
        const membershipsResponses = await Promise.all(membershipsPromises);
        setCommitteeMemberships(membershipsResponses.flatMap(response => response.data));
      } catch (error) {
        if (error instanceof AxiosError && error.response && error.response.data) {
          const validationErrors: TValidationErrorResponse = error.response.data;
          handleValidationErrors(validationErrors);
        } else {
          handleApiError(error as AxiosError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCommitteeData();
  }, []);

  const fetchAndSetPersonDetails = async (personId: string) => {
    try {
      const personData = await getPersonRequest(personId);
      setPersonDetails(personData.data);

      const [officesData, membershipsData] = await Promise.all([
        getPersonOfficesRequest(personId),
        getPersonMembershipsRequest(personId)
      ]);

      const officesArray = Array.isArray(officesData.data) ? officesData.data : [officesData.data];
      const membershipsArray = Array.isArray(membershipsData.data) ? membershipsData.data : [membershipsData.data];

      setPersonOffices(officesArray as TPersonOfficesResponse[]);
      setPersonMemberships(membershipsArray as TPersonMembershipsResponse[]);
    } catch (error) {
      if (error instanceof AxiosError && error.response && error.response.data) {
        const validationErrors: TValidationErrorResponse = error.response.data;
        handleValidationErrors(validationErrors);
      } else {
        handleApiError(error as AxiosError);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (personId) {
      fetchAndSetPersonDetails(personId);
    }
  }, [personId]);



  const handleToggleExpand = (index: number) => {
    setExpandedIndexes((prev) => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const handleAddToTopReps = (rep: Representative) => {
    const updatedRep: Representative = { ...rep, pageType: "House" };
    if (isRepInTopReps(updatedRep)) {
      dispatch(removeTopRep(updatedRep));
    } else {
      dispatch(addTopRep(updatedRep));
    }
  };

  const isRepInTopReps = (rep: Representative) => topReps.some((existingRep: { name: string; }) => existingRep.name === rep.name);

  const onClickRepresentative = async (repId: number, pageType: string) => {
    try {

      setPersonId(repId.toString());

      const [personDetailsResponse, personOfficesResponse, personMembershipsResponse] = await Promise.all([
        getPersonRequest(repId.toString()),
        getPersonOfficesRequest(repId.toString()),
        getPersonMembershipsRequest(repId.toString())
      ]);

      const personDetails = {
        details: personDetailsResponse.data,
        offices: personOfficesResponse.data,
        memberships: personMembershipsResponse.data
      };

      navigate(Routes.RepProfile + `/${repId}`, { state: { pageType, personDetails } });
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  };


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TActivitySearchForm>({
    resolver: yupResolver(activitySearchSchema)
  });

  const onSearchPerson: SubmitHandler<Partial<{ searchValue: string; activity: string; noOfDays: string }>> = async (data) => {
    setLoading(true);
    try {
      if (data.searchValue) {
        const searchType = 'person';

        if (searchType === 'person') {
          // Search for people
          const response = await searchPersonRequest(data.searchValue);
          console.log(response.data);
        } else if (searchType === 'session') {
          // Search for legislative sessions
          const response = await legislativeSessionsApi.getLegislativeSessionsRequest({
            jurisdiction: data.searchValue || "default_jurisdiction"
          });
          setLegislativeSessions(response.data);
        }
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response && error.response.data) {
        const validationErrors: TValidationErrorResponse = error.response.data;
        handleValidationErrors(validationErrors);
      } else {
        handleApiError(error as AxiosError);
      }
    } finally {
      setLoading(false);
    }
  };

  const getCommitteeForRep = (repId: number) => {
    return committeeMemberships?.filter(membership => membership.representative_id === repId) || [];
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
                onClick={handleSubmit(onSearchPerson)}
                disabled={loading}
              />
            </div>

            {/* Display validation errors */}
            {Object.keys(validationErrors).length > 0 && (
              <div className="bg-red-100 text-red-800 p-4 rounded-lg mt-4">
                <h4 className="font-semibold">Validation Errors:</h4>
                <ul>
                  {Object.entries(validationErrors).map(([field, message]) => (
                    <li key={field}>
                      <strong>{field}:</strong> {message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
                    {committees &&
                      getCommitteeForRep(rep.id) &&
                      getCommitteeForRep(rep.id).length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold">Committees:</h4>
                          {getCommitteeForRep(rep.id)!.map(
                            (membership, idx) => {
                              const committee = committees?.find(
                                (committee) =>
                                  committee.id === membership.committee_id
                              );
                              return committee ? (
                                <div key={idx}>
                                  <span>{committee.name}</span>
                                </div>
                              ) : null;
                            }
                          )}
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

            {/* Display Person Details */}
            {personDetails && (
              <div className="person-details bg-white rounded-xl p-4 mt-4">
                <h2 className="text-lg font-bold">{personDetails.name}</h2>
                <p>{personDetails.biography}</p>

                <h3 className="font-semibold mt-4">Offices</h3>
                {personOffices && personOffices.map((office) => (
                  <div key={office.id} className="mb-2">
                    <p>{office.name} - {office.classification}</p>
                  </div>
                ))}

                <h3 className="font-semibold mt-4">Committee Memberships</h3>
                {personMemberships && personMemberships.map((membership) => (
                  <div key={membership.id} className="mb-2">
                    <p>{membership.person_name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </PageContainer>
  );
}  