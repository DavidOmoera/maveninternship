// src/representatives.ts

// Import images
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

// Define the Representative type
export interface Representative {
  image: string;
  name: string;
  district: number;
  description: string;
}

// Define the array of representatives
const representatives: Representative[] = [
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

export default representatives;
