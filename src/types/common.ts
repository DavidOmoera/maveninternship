import store from "store";
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

export type Representative = {
  image: string;
  name: string;
  district: number;
  description: string;
  pageType?: 'House' | 'Senate'; 
};


export type TSVGProps = Partial<{
  color: string;
  fillColor?: string;
}> &
  React.SVGProps<SVGSVGElement>;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

const senators: Representative[] = [
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

const representatives: Representative[] = [
  {
    image: rep1,
    name: "Rep. Allen, Alma A.",
    district: 131,
    description:
      "Prior to being elected to the Texas House of Representatives, State Representative Dr. Alma A. Allen was elected to, and served on, the State Board of Education for over 10 years.",
  },
  {
    image: rep2,
    name: "Rep. Allison, Steve",
    district: 121,
    description:
      "State Representative Steve Allison represents House District 121, succeeding former Speaker of the House Joe Straus. District 121 covers parts of north central and northeast San Antonio, as well as the cities of Alamo Heights, Olmos Park, and Terrell Hills.",
  },
  {
    image: rep3,
    name: "Rep. Anchía, Rafael",
    district: 103,
    description:
      "State Representative Rafael Anchía is currently serving his tenth term in the Texas Legislature and represents a western corridor of Dallas County, which includes the cities of Dallas, Carrollton, Farmers Branch, and Irving. Rep. Anchía currently serves on the House Committees on State Affairs and Energy Resources.",
  },
  {
    image: rep4,
    name: "Rep. Anderson, Charles Doc",
    district: 56,
    description:
      "Chairman, Texas Legislative Rural Caucus Vice-Chairman, Texas House Aerospace Caucus Vice-Chairman, House Committee on Energy House Committee on Agriculture and Livestock",
  },
  {
    image: rep5,
    name: "Rep. Ashby, Trent",
    district: 9,
    description:
      "Representative Trent Ashby was sworn into the Texas House of Representatives in January 2013. His district is comprised of Angelina, Houston, Polk, San Augustine, Trinity, and Tyler Counties. He currently serves as Chair of the House Committee on Culture, Recreation & Tourism.",
  },
  {
    image: rep6,
    name: "Rep. Bailes, Ernest",
    district: 18,
    description:
      "Elected in 2016, State Representative Ernest Bailes represents House District 18. Bailes, a lifelong rancher and agriculturalist, was raised on his family’s dairy and beef cattle operation in East Texas. He grew up in Shepherd and earned his B.S. from Texas A&M University in 2004.",
  },
  {
    image: rep7,
    name: "Rep. Bell Jr., Cecil",
    district: 3,
    description:
      "Representative Cecil Bell, Jr. is a sixth generation Texan whose family has been in the State of Texas since 1852. The oldest of three siblings, he was born in Rosenberg but was raised all across Texas. A 2009 Ernst & Young Entrepreneur of the Year Finalist for the Southwest Region.",
  },
  {
    image: rep8,
    name: "Rep. Bell, Keith",
    district: 4,
    description:
      "A lifelong Texan, State Representative Keith Bell resides in Forney, Texas. Before being elected to represent House District 4 in November 2018, Keith served as a trustee on the Forney ISD School Board for 20 years, elected as president for 17 of those years.",
  },
  {
    image: rep9,
    name: "Rep. Bernal, Diego",
    district: 123,
    description:
      "Diego Bernal proudly represents the 123rd District in the Texas House of Representatives. A life-long San Antonian and the son of a Vietnam War Veteran, Diego grew up watching his mother and father make sacrifices to provide opportunities for their children.",
  },
  {
    image: rep10,
    name: "Rep. Bhojani, Salman",
    district: 92,
    description:
      "Salman Bhojani is a husband, father, small business owner, attorney, and councilmember. He was elected to the Texas House of Representatives in November 2022 to represent House District 92. In 2018, he was elected to the Euless City Council, becoming the first Muslim-American elected in North Texas.",
  },
  {
    image: rep11,
    name: "Rep. Bonnen, Greg",
    district: 24,
    description:
      "State Representative Greg Bonnen, MD is serving his fourth term in the Texas House of Representatives and currently represents the 24th district which encompasses the cities of Galveston, League City, Santa Fe, and Tiki Island.",
  },
  {
    image: rep12,
    name: "Rep. Burrows, Dustin",
    district: 83,
    description:
      "State Representative Dustin Burrows proudly serves the people of House District 83 in West Texas. A fourth generation West Texan, Dustin was born and raised in Lubbock and attended Lubbock public schools. He received his BA from Rhodes College and his JD from Texas Tech School of Law.",
  },
];

export const allRepresentatives = [...senators, ...representatives];
