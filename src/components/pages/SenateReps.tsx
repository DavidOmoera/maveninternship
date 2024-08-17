import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { activitySearchSchema } from "constants/schemas";
import { ControlledInput } from "components/organisms/ControlledInput";
import SearchIcon from "@mui/icons-material/Search";
import bookmark from "assets/bookmark.svg";
import { PageContainer } from "components/templates/PageContainer";
import { Button } from "components/atoms/Button";
import { Pill } from "components/molecules/Pill";
import sen1 from "assets/sen1.png";
import sen2 from "assets/sen2.png";
import sen3 from "assets/sen3.png";
import sen4 from "assets/sen4.png";
import sen5 from "assets/sen5.png";
import sen6 from "assets/sen6.png";
import sen7 from "assets/sen7.png";
import sen8 from "assets/sen8.png";
import sen9 from "assets/sen9.png";
import sen10 from "assets/sen10.png";
import sen11 from "assets/sen11.png";
import sen12 from "assets/sen12.png";

import { Outlet } from "react-router-dom";
import { useState } from "react";

import { Representative } from 'types/common.ts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices/index.ts'; 
import { addTopRep, removeTopRep } from 'store/slices/topRepsSlice';

const representatives = [
  {
    image: sen1,
    name: "Sen. Bryan Hughes",
    district: 1,
    description:
      "Bryan Hughes is serving his third term in the Texas Senate, representing the 19 counties of Senate District One in Northeast Texas. Born and raised in East Texas, Bryan attended Tyler Junior College and the University of Texas at Tyler, receiving his B.B.A. in economics, cum laude.",
  },
  {
    image: sen2,
    name: "Sen. Bob Hall",
    district: 2,
    description:
      "Currently in the 88th Legislature, Texas Senator Bob Hall, is the Chairman of the vital Senate Committee on Administration and an influential voting member on the Senate Committee of Finance, Health and Human Services, Local Government, and Veteran Affairs.",
  },
  {
    image: sen3,
    name: "Sen. Robert Nichols",
    district: 3,
    description:
      "First elected to the Texas Senate in 2007, Robert Nichols represents 18 counties including the greater part of East and Southeast Texas. In the Texas Senate, Nichols currently serves as Chairman of the Senate Transportation Committee.",
  },
  {
    image: sen4,
    name: "Sen. Brandon Creighton",
    district: 4,
    description:
      "On August 26, 2014, Senator Brandon Creighton was sworn in to the Texas State Senate to represent the citizens of District 4, which encompasses parts of Montgomery, Harris, Chambers, Jefferson and Galveston Counties.",
  },
  {
    image: sen5,
    name: "Sen. Charles Schwertner",
    district: 5,
    description:
      "Senator Charles Schwertner, MD is a sixth-generation Texan and lifelong conservative Republican. Since 2013, Dr. Schwertner has represented Senate District 5, an eleven-county region of central and east Texas that includes Bastrop, Brazos, Freestone, Leon, and Williamson counties.",
  },
  {
    image: sen6,
    name: "Sen. Carol Alvarado",
    district: 6,
    description:
      "Senator Carol Alvarado is proud to serve Texas Senate District 6 in Harris County and was first elected in a 2018 Special Election. In 2008, she was elected to the Texas House of Representatives and served five terms representing District 145.",
  },
  {
    image: sen7,
    name: "Sen. Paul Bettencourt",
    district: 7,
    description:
      "First elected to the Senate in 2014, Senator Paul Bettencourt represents Senate District 7, which encompasses most of West Harris County. He previously served 10 years, from 1998 - 2008, as the Harris County Tax Assessor-Collector.",
  },
  {
    image: sen8,
    name: "Sen. Angela Paxton",
    district: 8,
    description:
      "Angela Paxton was elected to the Texas Senate in November of 2018 and represents fast-growing Senate District 8, a district that is home to professional sports headquarters, dozens of Fortune 1000 companies, countless entrepreneurs and small businesses.",
  },
  {
    image: sen9,
    name: "Sen. Kelly Hancock",
    district: 9,
    description:
      "First elected to the Texas Senate in 2012, Kelly Hancock represents Senate District 9 in Tarrant County. He previously served in the Texas House of Representatives and remains an advocate for core conservative values of limited government and lower taxes.",
  },
  {
    image: sen10,
    name: "Sen. Phil King",
    district: 10,
    description:
      "Senator King proudly serves the citizens of SD 10, a sprawling district with a mixture of urban, suburban, and rural interests across eight counties. He previously served as State Representative and Parker County Justice of the Peace.",
  },
  {
    image: sen11,
    name: "Sen. Mayes Middleton",
    district: 11,
    description:
      "Mayes Middleton is President of Middleton Oil Company, an independent oil and gas company. He also runs ranching, cattle, and farming operations. Mayes and his wife, Macy, have four children: Connor, Christian, Matthew, and Martha Ann.",
  },
  {
    image: sen12,
    name: "Sen. Tan Parker",
    district: 12,
    description:
      "Tan Parker is a businessman, who grew up in North Texas working in his family’s restaurants while volunteering in his community. He married his college sweetheart, Beth, and they moved to Flower Mound, raising their daughters, Lauren and Ashley.",
  },
];

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function SenateReps() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const dispatch = useDispatch();
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
    const updatedRep: Representative = { ...rep, pageType: 'Senate' }; 
    if (isRepInTopReps(updatedRep)) {
      dispatch(removeTopRep(updatedRep));
    } else {
      dispatch(addTopRep(updatedRep));
    }
  };
  

  const isRepInTopReps = (rep: Representative) => 
    topReps.some(existingRep => existingRep.name === rep.name);

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
    <PageContainer title="Senate" className="w-full bg-gray-100">
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
                            text="Senator"
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
                    className="flex items-center text-primary absolute bottom-4 right-4"
                    style={{ color: "#0C0853", background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => handleAddToTopReps(rep)}
                  >
                    <img
                      src={bookmark}
                      alt="Bookmark Icon"
                      style={{
                        marginRight: "0.5rem",
                        width: "24px",
                        height: "24px",
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
                      {isRepInTopReps(rep) ? "Remove from Top Representatives" : "Add to Top Representatives"}
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