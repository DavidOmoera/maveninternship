import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { activitySearchSchema } from 'constants/schemas';
import { ControlledInput } from 'components/organisms/ControlledInput';
import SearchIcon from '@mui/icons-material/Search';
import bookmark from "assets/bookmark.svg";
import { PageContainer } from 'components/templates/PageContainer';
import { Button } from 'components/atoms/Button';
import { Pill } from "components/molecules/Pill";
import rep1 from "assets/rep1.svg";
import rep2 from "assets/rep2.svg";
import rep3 from "assets/rep3.svg";
import rep4 from "assets/rep4.svg";
import rep5 from "assets/rep5.svg";
import rep6 from "assets/rep6.svg";
import rep7 from "assets/rep7.svg";
import rep8 from "assets/rep8.svg";
import rep9 from "assets/rep9.svg";
import rep10 from "assets/rep10.svg";
import rep11 from "assets/rep11.svg";
import rep12 from "assets/rep12.svg";
import rep13 from "assets/rep13.svg";
import rep14 from "assets/rep14.svg";
import rep15 from "assets/rep15.svg";
import rep16 from "assets/rep16.svg";
import rep17 from "assets/rep17.svg";
import rep18 from "assets/rep18.svg";
import { Outlet } from "react-router-dom";

const repImages = [
  rep1, rep2, rep3, rep4, rep5, rep6,
  rep7, rep8, rep9, rep10, rep11, rep12,
  rep13, rep14, rep15, rep16, rep17, rep18
];

const pills = [
  { firstText: "Senator" },
];

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function Representatives() {
  const { control, handleSubmit, formState: { errors } } = useForm<TActivitySearchForm>({
    resolver: yupResolver(activitySearchSchema),
  });

  const onSearchBill: SubmitHandler<TActivitySearchForm> = (data) => {
    // Implement search functionality here
    console.log(data);
  };

  return (
    <PageContainer title="Representatives" className="w-full bg-gray-100">
      <div className="p-9 mb-9 mx-9 mt-6 bg-white rounded-xl">
        <h3 className="text-primary font-extrabold text-xl pb-6">
          Search for Representatives
        </h3>
        <div className="flex items-center w-full gap-3">
          <div className="flex-grow">
            <ControlledInput
              required
              control={control}
              name="searchValue"
              placeholder="Search by keyword, bill # or legislator name"
              leftIcon={<SearchIcon />}
              containerClasses="rounded-lg"
              error={!!errors.searchValue}
              helperText={(errors.searchValue?.message as string) ?? ""}
            />
          </div>
          <Button
            text="Search Representatives"
            className="bg-blue-900 text-white py-2 px-4 rounded-lg"
            onClick={handleSubmit(onSearchBill)}
          />
        </div>
      </div>
      <div className="p-9 mx-9 mb-9 bg-white rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h3 className="font-extrabold text-xl">My Top Reps</h3>
            <div
              className="py-1 px-2 rounded-xl"
              style={{
                border: '2px solid #8DB9FF',
              }}
            >
              <h6 className="text-primary">57</h6>
            </div>
          </div>
          <a href="#" className="text-primary font-semibold text-[14px]">See All →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repImages.slice(0, 6).map((repImage, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <img
                  src={repImage}
                  alt="Representative"
                  style={{
                    width: '64px',
                    height: '64px',
                    gap: '0px',
                    borderRadius: '12px 0px 0px 0px',
                    opacity: 1, // Changed opacity from 0px to 1 for visibility
                  }}
                  className="mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">Sen. Clara O'Conner</h4>
                  <div className="flex items-center">
                  {pills.map((pill) => (
                          <Pill
                            key={pill.firstText}
                            text={pill.firstText}
                            containerClassName="rounded-full bg-[#e7f1ff] px-4 py-1"
                            textClass="text-[#1026C3] text-sm"
                          />
                    ))}
                    <span style={{ color: '#1026C3' }}>• District 45, Texas</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Etiam netus et feugiat sem. Accumsan augue malesuada id sit sit accumsan sit ullamcorper.
                Vel quisque egestas iaculis varius in nisl. Vitae egestas eget vitae elit phasellus.
                Risus pulvinar massa adipiscing...
              </p>
              <a href="#" className="flex items-center text-primary" style={{ color: '#0C0853' }}>
                <img src={bookmark} alt="Bookmark Icon" style={{ marginRight: '0.5rem', width: '24px', height: '24px' }} />
                <span>Add to Top Representatives</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="p-9 mx-9 bg-white rounded-xl">
        <h3 className="font-extrabold text-xl mb-6">Representatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repImages.slice(6, 18).map((repImage, index) => (
            <div key={index + 6} className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <img
                  src={repImage}
                  alt="Representative"
                  style={{
                    width: '64px',
                    height: '64px',
                    gap: '0px',
                    borderRadius: '12px 0px 0px 0px',
                    opacity: 1,
                  }}
                  className="mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">Sen. Clara O'Conner</h4>
                  <div className="flex items-center">
                  {pills.map((pill) => (
                          <Pill
                            key={pill.firstText}
                            text={pill.firstText}
                            containerClassName="rounded-full bg-[#e7f1ff] px-4 py-1"
                            textClass="text-[#1026C3] text-sm"
                          />
                    ))}
                    <span style={{ color: '#1026C3' }}>• District 45, Texas</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Etiam netus et feugiat sem. Accumsan augue malesuada id sit sit accumsan sit ullamcorper.
                Vel quisque egestas iaculis varius in nisl. Vitae egestas eget vitae elit phasellus.
                Risus pulvinar massa adipiscing...
              </p>
              <a href="#" className="flex items-center text-primary" style={{ color: '#0C0853' }}>
                <img src={bookmark} alt="Bookmark Icon" style={{ marginRight: '0.5rem', width: '24px', height: '24px' }} />
                <span>Add to Top Representatives</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </PageContainer>
  );
}
