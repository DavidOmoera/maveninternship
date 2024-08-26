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
import { useState } from "react";
import { Representative } from "types/common.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/slices/index.ts";
import { addTopRep, removeTopRep } from "store/slices/topRepsSlice";
import classNames from "classnames";
import { representatives } from "constants/common";

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function HouseReps() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topReps = useSelector((state: RootState) => state.topReps.topReps);

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
    topReps.some((existingRep) => existingRep.name === rep.name);

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

  const onSearchBill: SubmitHandler<TActivitySearchForm> = (data) => {
    // Implement search functionality here
    console.log(data);
  };

  return (
    <PageContainer title="House" className="w-full bg-gray-100">
      <div className="p-9 mb-9 mx-9 mt-6 bg-white rounded-xl">
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
              />
            </div>
          </div>

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
