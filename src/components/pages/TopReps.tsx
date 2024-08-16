import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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

type TActivitySearchForm = Partial<{
  searchValue: string;
}>;

const TopReps: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const representative = state?.representative as Representative;

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
    } else {
      dispatch(addTopRep(rep));
    }
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
                  opacity: 1,
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
            <Button
              text={isRepInTopReps(representative) ? "Remove from Top Representatives" : "Add to Top Representatives"}
              className={`py-2 px-4 rounded-lg mt-4 ${
                isRepInTopReps(representative) ? "bg-red-500" : "bg-blue-900"
              } text-white`}
              onClick={() => handleAddToTopReps(representative)}
            />
          </div>
        )}

        {/* Display top representatives */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex flex-wrap gap-5 mt-8">
            {topReps.length > 0 ? (
              topReps.map((rep: Representative, index: number) => (
                <div key={index} className="flex flex-col p-6 rounded-xl shadow relative max-w-[460px]">
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
                          opacity: 1,
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
                </div>
              ))
            ) : (
              <p>No top representatives added</p>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default TopReps;
