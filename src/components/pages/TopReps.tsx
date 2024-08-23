import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageContainer } from "components/templates/PageContainer";
import { Representative } from 'types/common';
import { ControlledInput } from "components/organisms/ControlledInput";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "components/atoms/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { activitySearchSchema } from "constants/schemas";
import { Pill } from "components/molecules/Pill";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices/index';
import { addTopRep, removeTopRep } from 'store/slices/topRepsSlice';
import bookmark from "assets/bookmark.svg";
import classNames from "classnames";
import { Routes } from "types/routes.ts";

type TActivitySearchForm = Partial<{
  searchValue: string;
}>;

const TopReps: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const representative = state?.representative as Representative;
  const pageType = (state?.pageType as "House" | "Senate") || "House";
  const dispatch = useDispatch();
  const topReps = useSelector((state: RootState) => state.topReps.topReps);

  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TActivitySearchForm>({
    resolver: yupResolver(activitySearchSchema),
  });

  const onSearch: SubmitHandler<TActivitySearchForm> = (data) => {
    console.log(data);
  };

  const handleToggleExpand = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isRepInTopReps = (rep: Representative) =>
    topReps.some(existingRep => existingRep.name === rep.name);

  const handleAddToTopReps = (rep: Representative) => {
    if (isRepInTopReps(rep)) {
      dispatch(removeTopRep(rep));

      if (topReps.length === 1) {
        navigate(-1);
      }
    } else {
      dispatch(addTopRep({ ...rep, pageType }));
    }
  };

  const onClickRepresentative = (id: number, type: "House" | "Senate") => {
    navigate(`${Routes.RepProfile}/${id}`, { state: { pageType: type } });
  };

  return (
    <PageContainer title="My Top Reps" className="w-full bg-gray-100">
      <div className="p-9 mb-9 mx-9 mt-6 bg-white rounded-xl">
        {/* Search Bar */}
        <div className="flex flex-col gap-4 bg-white rounded-xl p-4 mb-6">
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
              text="Search"
              className="bg-blue-900 text-white py-2 px-4 rounded-lg"
              onClick={handleSubmit(onSearch)}
            />
          </div>
        </div>

        {/* Display the selected representative */}
        {representative && (
          <div className="p-6 rounded-xl shadow mb-4">
            <div className="flex items-center mb-4">
              <img
                src={representative.image}
                alt="Representative"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
                className="mr-4"
              />
              <div>
                <h4 className="text-lg font-bold">{representative.name}</h4>
                <div className="flex items-center">
                  <Pill
                    text={representative.pageType === 'House' ? "Representative" : "Senator"}
                    containerClassName="rounded-full bg-[#e7f1ff] px-4 py-1"
                    textClass="text-[#1026C3] text-sm"
                  />
                  <span style={{ color: "#1026C3" }}>
                    • District {representative.district}, Texas
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:mb-10">
              {representative.description}
            </p>
            <button
              className={classNames(
                "flex items-center py-2 px-4 rounded-lg mt-4 border-none cursor-pointer bg-transparent outline-none",
                {
                  "text-error": isRepInTopReps(representative),
                  "text-primary": !isRepInTopReps(representative),
                }
              )}
              onClick={() => handleAddToTopReps(representative)}
            >
              <img
                src={bookmark}
                alt="Bookmark Icon"
                style={{
                  marginRight: "0.5rem",
                  width: "24px",
                  height: "24px",
                  filter: isRepInTopReps(representative)
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
                }}
              >
                {isRepInTopReps(representative)
                  ? "Remove from Top Representatives"
                  : "Add to Top Representatives"}
              </span>
            </button>
          </div>
        )}

        {/* Display top representatives */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex flex-wrap gap-5 mt-8">
            {topReps.length > 0 ? (
              topReps.map((rep: Representative, index: number) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-xl shadow relative max-w-[460px]"
                  onClick={() => onClickRepresentative(rep.id, rep.pageType as "House" | "Senate")}
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
                          borderRadius: "12px",
                          objectFit: "cover",
                        }}
                        className="mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold">{rep.name}</h4>
                        <div className="flex items-center">
                          <Pill
                            text={rep.pageType === 'House' ? "Representative" : "Senator"}
                            containerClassName="rounded-full bg-[#e7f1ff] px-4 py-1"
                            textClass="text-[#1026C3] text-sm"
                          />
                          <span style={{ color: "#1026C3" }}>
                            • District {rep.district}, Texas
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm sm:mb-10">
                      {expandedIndexes.includes(index)
                        ? rep.description
                        : `${rep.description.slice(0, 200)}`}
                      {rep.description.length > 200 && (
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={() => handleToggleExpand(index)}
                        >
                          {expandedIndexes.includes(index)
                            ? "..show less"
                            : "...show more"}
                        </span>
                      )}
                    </p>
                  </div>
                  <button
                    className={classNames(
                      "flex items-center absolute bottom-4 right-4 border-none cursor-pointer bg-transparent outline-none",
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
                      }}
                    >
                      {isRepInTopReps(rep)
                        ? "Remove from Top Representatives"
                        : "Add to Top Representatives"}
                    </span>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No top representatives added.</p>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default TopReps;
