import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { activitySearchSchema } from 'constants/schemas';
import { ControlledInput } from 'components/organisms/ControlledInput';
import SearchIcon from '@mui/icons-material/Search';
import { PageContainer } from 'components/templates/PageContainer';
import { Button } from 'components/atoms/Button';
import { Pill } from "components/molecules/Pill";
import rep1 from "assets/rep1.png";
import rep2 from "assets/rep2.png";
import rep3 from "assets/rep3.png";
import rep4 from "assets/rep4.png";
import rep5 from "assets/rep5.png";
import rep6 from "assets/rep6.png";
import rep7 from "assets/rep7.png";
import rep8 from "assets/rep8.png";
import rep9 from "assets/rep9.png";
import rep10 from "assets/rep10.png";
import rep11 from "assets/rep11.png";
import rep12 from "assets/rep12.png";

import { Outlet } from "react-router-dom";

const representatives = [
  { image: rep6, name: "Rep. Bailes, Ernest", district: 18, description: "Elected in 2016, State Representative Ernest Bailes represents House District 18. Bailes, a lifelong rancher and agriculturalist, was raised on his family’s dairy and beef cattle operation in East Texas. He grew up in Shepherd and earned his B.S. from Texas A&M University in 2004." },
  { image: rep8, name: "Rep. Bell, Keith", district: 4, description: "A lifelong Texan, State Representative Keith Bell resides in Forney, Texas. Before being elected to represent House District 4 in November 2018, Keith served as a trustee on the Forney ISD School Board for 20 years, elected as president for fourteen times." },
  { image: rep1, name: "Rep. Allen, Alma A.", district: 131, description: "Prior to being elected to the Texas House of Representatives, State Representative Dr. Alma A. Allen was elected to, and served on, the State Board of Education for over 10 years." },
  { image: rep4, name: "Rep. Anderson, Charles Doc", district: 56, description: "Chairman, Texas Legislative Rural Caucus Vice-Chairman, Texas House Aerospace Caucus Vice-Chairman, House Committee on Energy House Committee on Agriculture and Livestock" },
  { image: rep10, name: "Rep. Bhojani, Salman", district: 92, description: "Born in Pakistan to a large family, Representative Salman Bhojani immigrated to Texas as a teenager. He worked three minimum wage jobs to help support his family–climbing the ladder from convenience store cashier to successful business owner, attorney, Euless City Councilman, and Mayor Pro Tem." },
  { image: rep7, name: "Rep. Bell Jr., Cecil", district: 3, description: "Representative Cecil Bell, Jr. is a sixth generation Texan whose family has been in the State of Texas since 1852. The oldest of three siblings, he was born in Rosenberg but was raised all across Texas. A 2009 Ernst & Young Entrepreneur of the Year Finalist for the Southwest Region." },
  { image: rep2, name: "Rep. Allison, Steve", district: 121, description: "State Representative Steve Allison represents House District 121, succeeding former Speaker of the House Joe Straus. District 121 covers parts of north central and northeast San Antonio, as well as the cities of Alamo Heights, Olmos Park, and Terrell Hills." },
  { image: rep12, name: "Rep. Bowers, Rhetta Andrews", district: 113, description: "Representative Bowers was elected to serve House District 113 in the Texas House of Representatives on November 8, 2018. She made history as the first African American of Caribbean descent elected to represent this district." },
  { image: rep5, name: "Rep. Ashby, Trent", district: 9, description: "Representative Trent Ashby was sworn into the Texas House of Representatives in January 2013. His district is comprised of Angelina, Houston, Polk, San Augustine, Trinity, and Tyler Counties. He currently serves as Chair of the House Committee on Culture, Recreation & Tourism." },
  { image: rep3, name: "Rep. Anchía, Rafael", district: 103, description: "State Representative Rafael Anchía is currently serving his tenth term in the Texas Legislature and represents a western corridor of Dallas County, which includes the cities of Dallas, Carrollton, Farmers Branch, and Irving. Rep. Anchía currently serves on the House Committees on State Affairs and Energy Resources." },
  { image: rep9, name: "Rep. Bernal, Diego M.", district: 123, description: "Representative Diego Bernal was born in South Texas and raised in San Antonio. After graduating from Thomas Jefferson High School, he attended the University of Michigan, where he earned his undergraduate degree, Master's in Social Work, and law degree." },
  { image: rep11, name: "Rep. Bonnen, Gregn", district: 24, description: "Representative Greg Bonnen (Friendswood) is Chair of the House Appropriations Committee and is currently serving his fifth term as State Representative for House District 24.Prior to serving as Chair of the House Appropriations Committee." }
];

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function TopReps() {
  const { control, handleSubmit, formState: { errors } } = useForm<TActivitySearchForm>({
    resolver: yupResolver(activitySearchSchema),
  });

  const onSearchBill: SubmitHandler<TActivitySearchForm> = (data) => {
    // Implement search functionality here
    console.log(data);
  };

  return (
    <PageContainer title="My Top Reps" className="w-full bg-gray-100">
      <div className="p-9 mb-9 mx-9 mt-6 bg-white rounded-xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 bg-white rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div style={{ width: '567px' }}>
                <ControlledInput
                  required
                  control={control}
                  name="searchValue"
                  placeholder="Search by keyword, bill # or legislator name"
                  leftIcon={<SearchIcon />}
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

          <div className="bg-white rounded-xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {representatives.map((rep, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow relative flex flex-col justify-between" style={{ height: '400px' }}>
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 overflow-hidden rounded-lg">
                        <img
                          src={rep.image}
                          alt="Representative"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">{rep.name}</h4>
                        <div className="flex items-center">
                          <Pill
                            text="Representative"
                            containerClassName="rounded-full bg-[#e7f1ff] px-4 py-1"
                            textClass="text-[#1026C3] text-sm"
                          />
                          <span style={{ color: '#1026C3' }}>• District {rep.district}, Texas</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {rep.description}
                    </p>
                  </div>
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
