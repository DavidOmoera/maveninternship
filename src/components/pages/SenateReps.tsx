import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { activitySearchSchema } from 'constants/schemas';
import { ControlledInput } from 'components/organisms/ControlledInput';
import SearchIcon from '@mui/icons-material/Search';
import bookmark from "assets/bookmark.svg";
import { PageContainer } from 'components/templates/PageContainer';
import { Button } from 'components/atoms/Button';
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

const representatives = [
  { image: sen1, name: "Sen. Bryan Hughes", district: 1, description: "Occupation: Attorney\n\nEducation: BBA, University of Texas at Tyler; JD, Baylor University School of Law\n\nLegislative Experience: House Member, 2003 - 2017; Senate Member: 2017 - present\nHometown: Mineola\n\nParty: Republican" },
  { image: sen2, name: "Sen. Bob Hall", district: 2, description: "Occupation: Captain, US Air Force; Business Owner (Retired)\n\nLegislative Experience: Senate Member: 2015 - present\n\nParty: Republican" },
  { image: sen3, name: "Sen. Robert Nichols", district: 3, description: "Occupation: Engineer — Plastics manufacturing\n\nEducation: Lamar University, B.S., Industrial Engineering, 1968\n\nLegislative Experience: Senate Member: 2007 - present\nHometown: Jacksonville, Texas\n\nParty: Republican" },
  { image: sen4, name: "Sen. Brandon Creighton", district: 4, description: "Occupation: Attorney\n\nEducation: BA University of Texas at Austin, JD Oklahoma City University School of Law\n\nLegislative Experience: House Member, 2007 - 2014; Senate Member: 2014 - present\nHometown: Conroe\n\nParty: Republican" },
  { image: sen5, name: "Sen. Charles Schwertner", district: 5, description: "Occupation: Orthopedic Surgeon\n\nEducation: B.S. in Pharmacy from the University of Texas at Austin; M.D. from the University of Texas Medical Branch at Galveston\n\nLegislative Experience: House Member, 2011 - 2013; Senate Member: 2013 - present\nHometown: Georgetown\n\nParty: Republican" },
  { image: sen6, name: "Sen. Carol Alvarado", district: 6, description: "Occupation: Small Business Owner\n\nEducation: University of Houston, B.A., M.B.A.\n\nLegislative Experience: House Member, 2009-2018; Senate Member: 2018 - present\nHometown: Houston\n\nParty: Democrat" },
  { image: sen7, name: "Sen. Paul Bettencourt", district: 7, description: "Occupation: President and CEO, Bettencourt Tax Advisors L.L.C.\n\nLegislative Experience: Senate Member: 2015 - present\n\nParty: Republican" },
  { image: sen8, name: "Sen. Angela Paxton", district: 8, description: "Occupation: Leadership Consultant, Former Educator\n\nEducation: Baylor University, B.S., University of Houston Clear Lake, M.Ed.\n\nLegislative Experience: Senate Member: 2019 - present\n\nHometown: McKinney\n\nParty: Republican" },
  { image: sen9, name: "Sen. Kelly Hancock", district: 9, description: "Occupation: Business Owner\n\nEducation: Bachelor's degree in Business Administration, Baylor University\n\nLegislative Experience: House Member, 2006 - 2012; Senate Member: 2013 - present\n\nHometown: North Richland Hills\n\nParty: Republican" },
  { image: sen10, name: "Sen. Phil King", district: 10, description: "Occupation: Attorney / Small Business Owner\n\nEducation: J.D., Texas A&M University School of Law; M.B.A., Dallas Baptist University; B.A., Dallas Baptist University\n\nLegislative Experience: House Member, 1999 - 2022; Senate Member: 2023 - present\n\nHometown: Weatherford\n\nParty: Republican" },
  { image: sen11, name: "Sen. Mayes Middleton", district: 11, description: "Occupation: President & CEO, Middleton Oil\n\nEducation: University of Texas at Austin, J.D.; University of Texas at Austin, B.A.\n\nLegislative Experience: House Member, 2019-2022; Senate Member: 2023 - present\n\nHometown: Galveston\n\nParty: Republican" },
  { image: sen12, name: "Sen. Tan Parker", district: 12, description: "Occupation: Businessman and entrepreneur\n\nEducation: London School of Economics, MSc; University of Dallas, BA\n\nLegislative Experience: House Member, 2007-2023; Senate Member: 2023 - present\n\nHometown: Flower Mound\n\nParty: Republican" },
  
];

type TActivitySearchForm = Partial<{
  activity: string;
  searchValue: string;
  noOfDays: string;
}>;

export function SenateReps() {
  const { control, handleSubmit, formState: { errors } } = useForm<TActivitySearchForm>({
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
                      <img
                        src={rep.image}
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
                        <h4 className="text-lg font-bold">{rep.name}</h4>
                        <div className="flex items-center">
                          <Pill
                            text="Senator"
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
                  <a href="#" className="flex items-center text-primary absolute bottom-4 right-4" style={{ color: '#0C0853' }}>
                  <img src={bookmark} alt="Bookmark Icon" style={{ marginRight: '0.5rem', width: '24px', height: '24px' }} />
                  <span style={{ 
                  fontFamily: 'Mulish', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  lineHeight: '17.57px', 
                  textAlign: 'left' 
                  }}>
                  Add to Top Representatives
                  </span>
                  </a>
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
