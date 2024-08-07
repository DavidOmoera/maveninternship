import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "components/atoms/Button";
import { ControlledInput } from "components/organisms/ControlledInput";
import { ControlledSelect } from "components/organisms/ControlledSelect";
import { PageContainer } from "components/templates/PageContainer";
import SearchIcon from "@mui/icons-material/Search";
import { Pill } from "components/molecules/Pill";
import { allBills, BILL_TYPES, BILL_YEARS } from "constants/common";
import { BillCard } from "components/organisms/BillCard";
import filter from "assets/filter.svg";
import grid from "assets/grid.svg";

interface TBillSearchForm {
  searchValue: string;
  chamber: string;
  billType: string;
  billStatus: string;
  year: string;
}

const pills = [
  { firstText: "Social Housing", secondText: "(27)" },
  { firstText: "Health", secondText: "(15)" },
  { firstText: "Security", secondText: "(12)" },
  { firstText: "Transportation", secondText: "(32)" },
  { firstText: "Education", secondText: "(25)" },
  { firstText: "Immigration", secondText: "(3)" },
];

export const Bills: React.FC = () => {
  const { control, handleSubmit } = useForm<TBillSearchForm>();

  const onSearchBill: SubmitHandler<TBillSearchForm> = (formData) => {
    console.log("search form data", formData);
  };

  const handleOpenBillStatusDialog = () => {
    console.log("Open Bill Status Dialog");
  };

  function onClickBill() {
    console.log("Remove from watched bills");
  }

  return (
    <PageContainer title="Search">
      <div className="p-9 bg-white rounded-xl mx-8">
        <h3 className="text-primary font-normal text-2xl pb-1">
          Search for:{" "}
          <span className="text-blue-700 font-extrabold">
            Secure Border Act
          </span>
        </h3>
        <p className="pb-6 font-normal">
          in <span className="font-bold">Texas</span> &{" "}
          <span className="font-bold">Colorado</span>
        </p>
        <div className="flex flex-col lg:flex-row items-center w-full gap-3">
          <ControlledInput
            required
            control={control}
            name="searchValue"
            placeholder="Search by keyword, bill # or legislator name"
            leftIcon={<SearchIcon />}
            containerClasses="lg:basis-[90%] rounded-lg"
          />
          <div className="h-0.5 lg:h-12 w-full lg:w-[1px] bg-neutral200" />
          <div className="basis-full gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  lg:w-fit w-full">
            <ControlledSelect
              control={control}
              name="chamber"
              label="Chamber"
              defaultValue=""
              options={BILL_TYPES}
            />
            <ControlledSelect
              control={control}
              name="billType"
              label="Bill Type"
              defaultValue=""
              options={BILL_TYPES}
            />
            <ControlledSelect
              control={control}
              name="billStatus"
              label="Bill Status"
              options={[]}
              defaultValue=""
              onClick={handleOpenBillStatusDialog}
            />
            <ControlledSelect
              control={control}
              name="year"
              label="Year"
              defaultValue=""
              options={BILL_YEARS}
            />
          </div>
        </div>
        <Button
          text="Search Bill"
          className="mt-4"
          onClick={handleSubmit(onSearchBill)}
        />
      </div>
      <div className="p-9 bg-white rounded-xl mt-3 mx-8">
        <div className="flex flex-col space-y-4">
          {/* Search results */}
          <div className="row justify-between my-9">
            <div className="row gap-2">
              <h4 className="text-neutral950">205</h4>
              <span className="text-neutral950 text-xl">Results found</span>
            </div>

            <div className="row items-center gap-6">
              <img src={grid} className="w-6 h-6" />
              <Pill
                icon={<img src={filter} />}
                text="Filter Result"
                containerClassName="row items-center rounded px-3 py-2 gap-1 bg-neutral50"
              />
            </div>
          </div>

          {/** Pills */}
          <div className="row gap-2 flex-wrap">
            {pills.map((pill) => (
              <Pill
                key={pill.secondText}
                text={pill.firstText}
                secondText={pill.secondText}
                textClass="text-blue-600 font-semibold"
                secondTextClass="text-blue-600 font-bold"
              />
            ))}
          </div>

          {/* BillCard */}
          <div className="row gap-5 flex-wrap mt-8">
            {allBills.map((allBill) => (
              <BillCard
                key={allBill.state + allBill.description}
                onClick={onClickBill}
                {...allBill}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
