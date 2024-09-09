import login from "assets/login.svg";
import logout from "assets/logout.svg";
import minuscirlce from "assets/minus-cirlce.svg";
import addcircle from "assets/add-circle.svg";
import archiveminus from "assets/archive-minus.svg";
import archiveadd from "assets/archive-add.svg";
import useredit from "assets/user-edit.svg";
import voter1 from "assets/voter_1.png";
import voter2 from "assets/voter_2.png";
import voter3 from "assets/voter_3.png";
import voter4 from "assets/voter_4.png";
import voter5 from "assets/voter_5.png";
import voter6 from "assets/voter_6.png";
import voter7 from "assets/voter_7.png";
import voter8 from "assets/voter_8.png";
import voter9 from "assets/voter_9.png";
import voter10 from "assets/voter_10.png";
import voter11 from "assets/voter_11.png";
import voter12 from "assets/voter_12.png";
import voter13 from "assets/voter_13.png";
import voter14 from "assets/voter_14.png";
import voter15 from "assets/voter_15.png";
import voter16 from "assets/voter_16.png";
import voter17 from "assets/voter_17.png";
import voter18 from "assets/voter_18.png";
import senator from "assets/sen-adams.svg";
import jasmineCrockett from "assets/jasmine_crockett.webp";
import tonyGonzales from "assets/tony_gonzales.jpg";
import danCrenshaw from "assets/dan_crenshaw.webp";
import envelope from "assets/envelope.svg";
import twitter from "assets/twitter.svg";
import youtube from "assets/youtube.svg";
import instagram from "assets/instagram.svg";
import facebook from "assets/facebook.svg";
import democrat from "assets/democrat.webp";
import republican from "assets/republican.svg";
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
import { Representative } from "types/common";

export enum colors {
  primary = "#0C0853",
  error = "#FF2A58",
  success = "#05A919",
  orange = "#FE9500",
  white = "#FFFFFF",
  black = "#000000",
  neutral25 = "#F2F4FB",
  neutral50 = "#F6F6F6",
  neutral100 = "#E7E7E7",
  neutral200 = "#D1D1D1",
  neutral300 = "#B0B0B0",
  neutral400 = "#888888",
  neutral450 = "#7F8082",
  neutral500 = "#6D6D6D",
  neutral600 = "#5D5D5D",
  neutral700 = "#4F4F4F",
  neutral800 = "#454545",
  neutral900 = "#3D3D3D",
  neutral950 = "#212121",
  grey = "#F6F7FB",
  accent50 = "#E9F3FF",
  accent100 = "#D7E9FF",
  accent200 = "#B8D6FF",
  accent300 = "#8DB9FF",
  accent400 = "#608EFF",
  accent500 = "#3B64FF",
  accent600 = "#1A36FF",
  accent700 = "#132BF3",
  accent800 = "#1026C3",
  accent900 = "#172B98",
  accent950 = "#0E1858",
  dark_mode_bg = "#1f1f1f",
  light_silver = "#F8F8F8",
  soft_silver = "#EDEFF1",
  enigmatic_midnight = "#667085",
  crimson_red = "#d32f2f",
}

export const ISSUES_OPTIONS = [
  { id: 1, label: "Issue 1", value: "issue1" },
  { id: 2, label: "Issue 2", value: "issue2" },
  { id: 3, label: "Issue 3", value: "issue3" },
  { id: 4, label: "Issue 4", value: "issue4" },
  { id: 5, label: "Issue 5", value: "issue5" },
  { id: 6, label: "Issue 6", value: "issue6" },
  { id: 7, label: "Issue 7", value: "issue7" },
  { id: 8, label: "Issue 8", value: "issue8" },
  { id: 9, label: "Issue 9", value: "issue9" },
];

export const STATES = [
  { name: "Alabama", code: "AL" },
  { name: "Alaska", code: "AK" },
  { name: "Arizona", code: "AZ" },
  { name: "Arkansas", code: "AR" },
  { name: "California", code: "CA" },
  { name: "Colorado", code: "CO" },
  { name: "Connecticut", code: "CT" },
  { name: "Delaware", code: "DE" },
  { name: "Florida", code: "FL" },
  { name: "Georgia", code: "GA" },
  { name: "Hawaii", code: "HI" },
  { name: "Idaho", code: "ID" },
  { name: "Illinois", code: "IL" },
  { name: "Indiana", code: "IN" },
  { name: "Iowa", code: "IA" },
  { name: "Kansas", code: "KS" },
  { name: "Kentucky", code: "KY" },
  { name: "Louisiana", code: "LA" },
  { name: "Maine", code: "ME" },
  { name: "Maryland", code: "MD" },
  { name: "Massachusetts", code: "MA" },
  { name: "Michigan", code: "MI" },
  { name: "Minnesota", code: "MN" },
  { name: "Mississippi", code: "MS" },
  { name: "Missouri", code: "MO" },
  { name: "Montana", code: "MT" },
  { name: "Nebraska", code: "NE" },
  { name: "Nevada", code: "NV" },
  { name: "New Hampshire", code: "NH" },
  { name: "New Jersey", code: "NJ" },
  { name: "New Mexico", code: "NM" },
  { name: "New York", code: "NY" },
  { name: "North Carolina", code: "NC" },
  { name: "North Dakota", code: "ND" },
  { name: "Ohio", code: "OH" },
  { name: "Oklahoma", code: "OK" },
  { name: "Oregon", code: "OR" },
  { name: "Pennsylvania", code: "PA" },
  { name: "Rhode Island", code: "RI" },
  { name: "South Carolina", code: "SC" },
  { name: "South Dakota", code: "SD" },
  { name: "Tennessee", code: "TN" },
  { name: "Texas", code: "TX" },
  { name: "Utah", code: "UT" },
  { name: "Vermont", code: "VT" },
  { name: "Virginia", code: "VA" },
  { name: "Washington", code: "WA" },
  { name: "West Virginia", code: "WV" },
  { name: "Wisconsin", code: "WI" },
  { name: "Wyoming", code: "WY" },
];

export const topRepresentatives = [
  {
    id: 0,
    title: "Most Votes",
    representative: "Jasmine Crockett",
    district: "TX-30",
    image: jasmineCrockett,
  },
  {
    id: 2,
    title: "Most Votes of the Week",
    representative: "Dan Crenshaw",
    district: "2nd district",
    image: danCrenshaw,
  },
  {
    id: 1,
    title: "Least Votes",
    representative: "Tony Gonzales",
    district: "23rd district",
    image: tonyGonzales,
  },
];

export const repProfileRepresentatives = [
  {
    id: 3,
    title: "Rep. Alma A., Allen",
    representative: "Rep. Alma A., Allen",
    district: "131st district",
    image: rep1,
  },
  {
    id: 4,
    title: "Rep. Steve, Allison",
    representative: "Rep. Steve, Allison",
    district: "121st district",
    image: rep2,
  },
  {
    id: 5,
    title: "Rep. Rafael, Anchía",
    representative: "Rep. Rafael, Anchía",
    district: "103rd district",
    image: rep3,
  },
  {
    id: 6,
    title: "Rep. Charles Doc, Anderson",
    representative: "Rep. Charles Doc, Anderson",
    district: "56th district",
    image: rep4,
  },
  {
    id: 7,
    title: "Rep. Trent, Ashby",
    representative: "Rep. Trent, Ashby",
    district: "9th district",
    image: rep5,
  },
  {
    id: 8,
    title: "Rep. Ernest, Bailes",
    representative: "Rep. Ernest, Bailes",
    district: "18th district",
    image: rep6,
  },
  {
    id: 9,
    title: "Rep. Cecil, Bell Jr.",
    representative: "Rep. Cecil, Bell Jr.",
    district: "3rd district",
    image: rep7,
  },
  {
    id: 10,
    title: "Rep. Keith, Bell",
    representative: "Rep. Keith, Bell",
    district: "4th district",
    image: rep8,
  },
  {
    id: 11,
    title: "Rep. Diego M., Bernal",
    representative: "Rep. Diego M., Bernal",
    district: "123rd district",
    image: rep9,
  },
  {
    id: 12,
    title: "Rep. Salman, Bhojani",
    representative: "Rep. Salman, Bhojani",
    district: "92nd district",
    image: rep10,
  },
  {
    id: 13,
    title: "Rep. Greg, Bonnen",
    representative: "Rep. Greg, Bonnen",
    district: "24th district",
    image: rep11,
  },
  {
    id: 14,
    title: "Rep. Rhetta Andrews, Bowers ",
    representative: "Rep. Dustin, Burrows",
    district: "83rd district",
    image: rep12,
  },
];

export const watchedBills = [
  {
    state: "Texas",
    title: "Secure the Border Act of 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
    chamber: "House",
    billType: "Proposed",
    year: "2024",
  },
  {
    state: "Wyoming",
    title: "Secure the Border Act of 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
    chamber: "House",
    billType: "Vetoed",
    year: "2023",
  },
  {
    state: "Washington",
    title: "Secure the Border Act of 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
    chamber: "Senate",
    billType: "Amended",
    year: "2022",
  },
  {
    state: "Ohio",
    title: "Secure the Border Act of 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
    chamber: "Senate",
    billType: "Vetoed",
    year: "2021",
  },
  {
    state: "West Virginia",
    title: "Secure the Border Act of 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
    chamber: "Senate",
    billType: "Passed",
    year: "2020",
  },
  {
    state: "Colorado",
    title: "Secure the Border Act of 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
    chamber: "Senate",
    billType: "Proposed",
    year: "2019",
  },
];

export const allBills = [
  {
    id: "1",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter2,
    coAuthor3: voter3,
    supporter1: voter4,
    supporter2: voter5,
    supporter3: voter6,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "2",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter8,
    coAuthor3: voter9,
    supporter1: voter10,
    supporter2: voter11,
    supporter3: voter12,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "3",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter14,
    coAuthor3: voter15,
    supporter1: voter16,
    supporter2: voter17,
    supporter3: voter18,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "4",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter18,
    coAuthor3: voter12,
    supporter1: voter2,
    supporter2: voter10,
    supporter3: voter12,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "5",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter10,
    coAuthor3: voter12,
    supporter1: voter2,
    supporter2: voter10,
    supporter3: voter12,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "6",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter10,
    coAuthor3: voter12,
    supporter1: voter2,
    supporter2: voter10,
    supporter3: voter12,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "7",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter10,
    coAuthor3: voter12,
    supporter1: voter2,
    supporter2: voter10,
    supporter3: voter12,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "8",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicitudin eget eget risus.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter2,
    coAuthor2: voter10,
    coAuthor3: voter12,
    supporter1: voter2,
    supporter2: voter10,
    supporter3: voter12,
    count1: "23",
    count2: "51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
  {
    id: "9",
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    coAuthor1: voter17,
    coAuthor2: voter10,
    coAuthor3: voter12,
    supporter1: voter2,
    supporter2: voter10,
    supporter3: voter12,
    count1: "+23",
    count2: "+51",
    billType: "Type A",
    chamber: "Senate",
    year: 2023,
  },
];

export const DEFAULT_FONT_NAME = "Mulish";

export const BILL_TYPES = [
  { id: 1, value: "All", label: "All" },
  { id: 1, value: "Proposed", label: "Proposed" },
  { id: 1, value: "Amended", label: "Amended" },
  { id: 1, value: "Vetoed", label: "Vetoed" },
  { id: 1, value: "Passed", label: "Passed" },
];

export const BILL_STATUSES = [
  { id: 1, value: "Filed", label: "Filed" },
  { id: 2, value: "Enrolled", label: "Enrolled" },
  { id: 3, value: "Reading-1", label: "Reading-1" },
  { id: 4, value: "Passed", label: "Passed" },
  { id: 5, value: "Introduced", label: "Introduced" },
  { id: 6, value: "Reading-2", label: "Reading-2" },
  { id: 7, value: "Referred to committee", label: "Referred to committee" },
  { id: 8, value: "Amendment-failure", label: "Amendment-failure" },
  { id: 9, value: "Executive-receipt", label: "Executive-receipt" },
  { id: 10, value: "Amendment-introduction", label: "Amendment-introduction" },
  { id: 11, value: "Amendment-passage", label: "Amendment-passage" },
  { id: 12, value: "Amendment-withdrawal", label: "Amendment-withdrawal" },
];

export const BILL_YEARS = [
  { id: 1, value: "2016", label: "2016" },
  { id: 1, value: "2017", label: "2017" },
  { id: 1, value: "2018", label: "2018" },
  { id: 1, value: "2019", label: "2019" },
  { id: 1, value: "2020", label: "2020" },
  { id: 1, value: "2021", label: "2021" },
  { id: 1, value: "2022", label: "2022" },
  { id: 1, value: "2023", label: "2023" },
  { id: 1, value: "2024", label: "2024" },
];

export const YES_VOTERS = [
  {
    name: "Pat Schiller",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter1,
  },
  {
    name: "Susan Feest",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter2,
  },
  {
    name: "Sadie Barton",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter3,
  },
  {
    name: "Ivan Barrows",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter4,
  },
  {
    name: "Alicia Mueller",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter5,
  },
  {
    name: "Arlene Bergstrom",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter6,
  },
  {
    name: "Vera Bernhard",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter7,
  },
  {
    name: "Ms. Wilbert Beahan",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter8,
  },
  {
    name: "Ms. Guillermo Rath",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter9,
  },
  {
    name: "Chad Blick",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter10,
  },
  {
    name: "Mr. Benny Heathcote",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter11,
  },
  {
    name: "Alan Hodkiewicz",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter12,
  },
  {
    name: "Krystal Koepp",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter13,
  },
  {
    name: "Mabel Reynolds",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter14,
  },
  {
    name: "Jenna Shields",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter15,
  },
  {
    name: "Willard Batz",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter16,
  },
  {
    name: "Brett O'kon",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter17,
  },
  {
    name: "James Witting",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter18,
  },
];

export const NO_VOTERS = [
  {
    name: "Essie Swaniawski",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter2,
  },
  {
    name: "Raquel O'Conner",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter12,
  },
  {
    name: "Tamara Bahringer",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter14,
  },
  {
    name: "Gene Kuphal",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter3,
  },
  {
    name: "Connie Maggio",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter12,
  },
  {
    name: "Mrs. Leroy Grimes",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter17,
  },
  {
    name: "Jean Champlin",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter18,
  },
  {
    name: "Velma Cremin",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter11,
  },
  {
    name: "Margie Schaden",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter4,
  },
];

export const ABSTAINED_VOTERS = [
  {
    name: "Alfredo Farell",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter13,
  },
  {
    name: "Ian Donnelly",
    designation: "Senator",
    dateVoted: "05/23/2024",
    profilePicture: voter15,
  },
];

export const TOTAL_VOTERS_COUNT =
  YES_VOTERS.length + NO_VOTERS.length + ABSTAINED_VOTERS.length;

export const ACTIVITIES = [
  {
    time: "20 mins ago",
    timestamp: "1723494528",
    type: "Removed",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#FDEAEC",
    icon: archiveminus,
  },
  {
    time: "4 hrs ago",
    timestamp: "1723408128",
    type: "Added",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#E9F3FF",
    icon: archiveadd,
  },
  {
    time: "Yesterday, 5:34 pm",
    timestamp: "1723276800",
    type: "Edited",
    label: "your Profile",
    link: "",
    iconBackgroundColor: "#E1F8FD",
    icon: useredit,
  },
  {
    time: "Yesterday, 2:45 pm",
    timestamp: "1723190400",
    type: "Removed",
    label: "a Legislature",
    link: "Texas",
    iconBackgroundColor: "#FFEAF1",
    icon: minuscirlce,
  },
  {
    time: "22/04/2023, 8:22 am",
    timestamp: "1723104000",
    type: "Added",
    label: "a Legislature",
    link: "Alaska",
    iconBackgroundColor: "#E4F9ED",
    icon: addcircle,
  },
  {
    time: "21/04/2023, 8:19 am",
    timestamp: "1723017600",
    type: "Logged in",
    label: "to your account",
    link: "",
    iconBackgroundColor: "#E4F9ED",
    icon: login,
  },
  {
    time: "20/04/2023, 7:32 am",
    timestamp: "1722931200",
    type: "Logged out",
    label: "of your account",
    link: "",
    iconBackgroundColor: "#FFEAF1",
    icon: logout,
  },
  {
    time: "4w ago",
    timestamp: "1722844800",
    type: "Removed",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#FFEAF1",
    icon: archiveminus,
  },
  {
    time: "5w ago",
    timestamp: "1722758400",
    type: "Added",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#E9F3FF",
    icon: archiveadd,
  },
  {
    time: "2 months ago",
    timestamp: "1720598400",
    type: "Added",
    label: "a Legislature",
    link: "Alaska",
    iconBackgroundColor: "#E4F9ED",
    icon: addcircle,
  },
  {
    time: "3 months ago",
    timestamp: "1720339200",
    type: "Logged in",
    label: "to your account",
    link: "",
    iconBackgroundColor: "#E4F9ED",
    icon: login,
  },
  {
    time: "6w ago",
    timestamp: "1712649600",
    type: "Edited",
    label: "your Profile",
    link: "",
    iconBackgroundColor: "#E1F8FD",
    icon: useredit,
  },
  {
    time: "4 months ago",
    timestamp: "1715760000",
    type: "Logged out",
    label: "of your account",
    link: "",
    iconBackgroundColor: "#FFEAF1",
    icon: logout,
  },
  {
    time: "7w ago",
    timestamp: "1697529600",
    type: "Removed",
    label: "a Legislature",
    link: "Texas",
    iconBackgroundColor: "#FFEAF1",
    icon: minuscirlce,
  },
];

export const REPRESENTATIVES = [
  {
    image: jasmineCrockett,
    name: "Congresswoman Jasmine Crockett",
    district: "TX-30, Texas",
    socials: [
      { icon: envelope, handle: "JasmineCrockett@uscongress.com" },
      { icon: twitter, handle: "@RepJasmine" },
      { icon: youtube, handle: "Congresswoman Jasmine Crockett" },
      { icon: instagram, handle: "jasmineforus" },
      { icon: facebook, handle: "Congresswoman Jasmine Crockett" },
    ],
    bioData: [
      { title: "Gender", description: "Female" },
      { title: "Date of Birth", description: "March 29 1981" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "TX-30, Texas" },
      {
        title: "District Address",
        description: "1825 Market Center Blvd.Suite 440 Dallas, TX  75207",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(214) 922-8885" },
      {
        title: "Capitol Address",
        description: "1616 Longworth House Office Building 15 Independence Ave",
      },
      { title: "Capitol Phone", description: "(202) 225-8885" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Jasmine_Crockett",
    party: {
      name: "Democratic Party",
      logo: democrat,
    },
    biography:
      "Congresswoman Jasmine Crockett has purposefully made every decision with one goal in mind: protecting the civil liberties of those in underrepresented communities. As a public defender, civil rights attorney, State Representative, and United States Congresswoman, Jasmine Crockett dedicates her life to public service, with the goal of serving justice and ensuring equality for all.\n\n In the midst of political turmoil, economic distress, and racial inequality, Congresswoman Crockett laced up her shoes to march for justice and run for the Texas House of Representatives. The sole Black freshman and youngest Black lawmaker in Texas during the 87th Legislative Session, Congresswoman Crockett navigated what has been marked as the most conservative session in Texas history. Despite the uphill climb, Congresswoman Crockett filed more bills than any other freshman, assembled a wide coalition to pass landmark criminal justice reforms in the House, and brought more accessibility and accountability to her office than before. She was a founding member of both the Texas Progressive Caucus as well as the Texas Caucus on Climate, Energy, and the Environment. As State Representative, she fought for economic opportunity as a member of the Business & Industry Committee, and advocated for reform on the Criminal Jurisprudence Committee. Congresswoman Crockett was one of the lead architects of the 2021 Texas House Quorum Break, which brought attention to the draconian and restrictive voting measures being proposed in the legislature.\n\n Her passion for justice and the protection of peoples' rights led her to pursue a career as a public defender, and civil rights and criminal defense attorney. She focused on defending our most vulnerable among us from exploitation in the criminal justice system. As she began her career in the Bowie County Public Defender's Office, Congresswoman Crockett worked tirelessly to keep children safe and out of jail. Her time there serves as a reminder that criminal justice is an intersectional issue.\n\n Following her service in the Texas Legislature, Congresswoman Crockett accepted the call, and won the election for retiring Chairwoman Eddie Bernice Johnson's congressional seat in Texas' 30th District. Following her election, she hit the ground running and won a seat at the Leadership table as Freshman Leadership Representative, a position she will use to advocate for all Texans. As Freshman Leadership Representative, she is one of a few Black women ever elected to Democratic House Leadership. In Congress, Congresswoman Crockett hopes to continue to build on the legacy of Chairwoman Johnson, and will fight to expand access to healthcare, voting rights, economic opportunity, and dignity for all. She will fight to protect Medicare, Social Security, and expand critical social safety net programs. She will continue to be a tireless advocate for civil liberties, immigrant rights, and economic equity for women and the diverse communities across the State of Texas.\n\n Congresswoman Crockett earned her B.A. in Business Administration from Rhodes College and her J.D. from the University of Houston. She is licensed to practice law in Texas, Arkansas, and Federal Courts. Crockett is the past Bowie County Democratic Party Chair, held various leadership positions within the legal community, is a former board member of the Dallas County Metrocare Services, and is a proud member of Delta Sigma Theta Sorority, Incorporated.\n\n As a Congresswoman for all Texans, she's looking forward to continuing our fight and ushering in the next generation of servant leadership in the halls of Congress and Washington, D.C.",
  },
  {
    image: tonyGonzales,
    name: "Congressman Tony Gonzales",
    district: "23rd district, Texas",
    socials: [
      { icon: twitter, handle: "@RepTonyGonzales" },
      { icon: youtube, handle: "Tony Gonzales" },
      { icon: instagram, handle: "reptonygonzales" },
      { icon: facebook, handle: "Congressman Tony Gonzales" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "October 10 1980" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "23rd district, Texas" },
      {
        title: "District Address",
        description: "4372 N. Loop 1604 W, Suite 205, San Antonio, TX 78249",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(210) 806-9920" },
      {
        title: "Capitol Address",
        description:
          "2244 Rayburn House Office Building, Washington, D.C. 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-4511" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Tony_Gonzales",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography:
      "Congressman Tony Gonzales is a dedicated patriot with twenty years of military experience. Abandoned by his father at the age of two months, Tony knew he had to work hard to get ahead in life. At the age of 18, he dropped out of high school with one credit left to join the military and provide a path to success for himself and his family.\n\nAs a career cryptologist in the United States Navy, he rose to the highest enlisted rank of Master Chief Petty Officer for his support of combat operations in Iraq and Afghanistan. With multiple deployments to the Middle East and Asia, Tony has firsthand experience about the security challenges that face our country and the international community at large.\n\nHarnessing his military background, Tony also served on Capitol Hill as a Department of Defense Legislative Fellow for U.S. Senator Marco Rubio. In his time there, he contributed to the defense, foreign policy, and intelligence portfolios. In 2018, Tony was selected as a National Security Fellow at the Foundation for Defense of Democracies (FDD).\n\nTony worked hard to get ahead in life. He understands the value that a good education can provide. Although he had to postpone high school when he joined the Navy, he later earned his high school diploma and continued to pursue higher education. He holds a Master’s degree in International Relations from American Public University and is a Ph.D. candidate in International Development at the University of Southern Mississippi. He also holds a graduate certificate in Legislative Studies from Georgetown University, and served as an Assistant Professor at the University of Maryland system, where he taught political science with an emphasis on counterterrorism.\n\nCongressman Gonzales is married to his wife Angel and they have six wonderful children.",
  },
  {
    image: danCrenshaw,
    name: "Dan Crenshaw",
    district: "2nd district, Texas",
    socials: [
      { icon: twitter, handle: "@RepDanCrenshaw" },
      { icon: youtube, handle: "Rep. Dan Crenshaw" },
      { icon: instagram, handle: "officialcrenshawstaff" },
      { icon: facebook, handle: "Congressman Dan Crenshaw" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "March 14 1984" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "2nd district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Dan_Crenshaw",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography:
      "Originally from the Houston area, Rep. Dan Crenshaw is a proud 6th generation Texan. From an early age, Dan knew that he wanted to serve his country with the most elite fighting force in history: the U.S. Navy SEALs. His father’s career in the Texas oil and gas industry moved his family all over the world, including Ecuador and Colombia, where he attended high school. As a result, Dan is fluent in Spanish.  In 2006, Dan graduated from Tufts University, where he earned his Naval officer commission through Navy ROTC. Following graduation, he immediately reported to SEAL training in Coronado, CA, where he met his future wife, Tara. After graduating SEAL training, Dan deployed to Fallujah, Iraq to join SEAL Team Three, his first of five deployments overseas.\n\nOn Dan’s third deployment in 2012, his life changed forever. After six months of combat operations, he was hit by an IED blast during a mission in Helmand province, Afghanistan. He was evacuated and awoke from his medically induced coma learning that his right eye had been destroyed in the blast and his left eye was badly damaged. Dan was completely blind and the doctors did not believe he would ever see again. Tara stood by him every day and night, keeping faith and praying he would see again. After several difficult surgeries and months of fighting a tough diagnosis, Dan eventually regained sight in his left eye, a miracle according to the head surgeon. Dan refused to quit and went on to deploy twice more, first back to the Middle East in 2014 and then South Korea in 2016.\n\nDan was medically retired in September of 2016 as a Lieutenant Commander after serving ten years in the SEAL Teams. He left service with two Bronze Stars (one with Valor), the Purple Heart, and the Navy Commendation Medal with Valor, among others. Soon after, Dan completed his Master’s in Public Administration at the Harvard Kennedy School of Government. Dan then returned to Houston, where his community was hit by Hurricane Harvey. The storm brought devastation the region had never seen. He spent his time volunteering in areas of Katy, helping his neighbors recover from the damage. He saw first-hand the unthinkable losses that Texas suffered, but he also saw Texan grit and resilience. This inspired him to do more for his community.  Dan and Tara decided that the best way to serve the people of Texas would be in elected office.\n\nIn November 2018, Dan was elected to represent the people of Texas’s Second Congressional District. In Congress, he serves on the House Energy and Commerce Committee, which has the broadest jurisdiction of any legislative committee in Congress. On this Committee, Dan serves on the Subcommittee on Health, as well as the Subcommittee on Environment, Manufacturing, & Critical Materials, and the Subcommittee on Oversight and Investigations. Dan also serves on the House Permanent Select Committee on Intelligence. On this Committee, he serves on the Central Intelligence Agency Subcommittee and National Intelligence Enterprise Subcommittee.\n\nDan believes in service before self and understands that there is no higher calling than service to the American people. Although he can no longer fight on the battlefield, the integrity, leadership, vision, and tenacity he learned in the SEAL teams are present every day in his fight for common sense solutions in Congress.",
  },
  {
    name: "Rep. Allen Alma A.",
    district: "131st district, Texas",
    image: rep1,
    socials: [
      { icon: twitter, handle: "@RepAlmaAllen" },
      { icon: youtube, handle: "Rep. Alma Allen" },
      { icon: instagram, handle: "repalmaallen" },
      { icon: facebook, handle: "Congresswoman Alma Allen" },
    ],
    bioData: [
      { title: "Gender", description: "Female" },
      { title: "Date of Birth", description: "April 7, 1939" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "131st district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Alma_A._Allen",
    party: {
      name: "Democratic Party",
      logo: democrat,
    },
    biography: `Prior to being elected to the Texas House of Representatives, State Representative Dr. Alma A. Allen served on the State Board of Education for over 10 years.

  Beginning her career in education as a teacher at Parker Elementary School and Grimes Elementary School, Rep. Allen advanced to become assistant principal at Foster Elementary School and later served as principal at Peck Elementary School, Windsor Village Vanguard Magnet School, and G.B. Turner Elementary School. She also worked in human resources and central administration, retiring from the Houston Independent School District after 39 years. Rep. Allen continued her career in education as an Adjunct Professor at Texas Southern University and Prairie View A&M University. She is currently a motivational speaker and educational consultant.

  Rep. Allen holds a Bachelor of Science degree and a Master of Education degree from Texas Southern University, a Doctorate of Education in Curriculum and Instruction from the University of Houston, and a certificate in administration and supervision from the University of Houston. Her accolades include Principal of the Year for District 5, Outstanding Alumnus of the University of Houston, the Texas Freedom Network "Walking the Walk Award" from Governor Ann Richards, the Living Legend Award from the Texas Alliance of Black School Educators, and Alma Allen Day in her hometown of Livingston, Texas.

  She is a member of various organizations, including the Houston Association of Professional Administrators, American Association of Supervision and Curriculum, Texas Association of School Administrators, National Association for the Advancement of Colored People, Texans Concerned for Superior Schools, Women's Chamber of Commerce, National Association of Democratic Women, American Association of Curriculum and Development, and the Council of Negro Women.

  Rep. Allen was elected to the Texas House of Representatives on November 2, 2004, and re-elected in November 2006, November 2008, and November 2010.

  Rep. Allen and her husband, Lawrence A. Allen, Sr., are the proud parents of two children and grandparents to five grandchildren`,
  },
  {
    name: "Rep. Steve Allison",
    district: "121st district, Texas",
    image: rep2,
    socials: [
      { icon: twitter, handle: "@RepSteveAllison" },
      { icon: youtube, handle: "Rep. Steve Allison" },
      { icon: instagram, handle: "repsteveallison" },
      { icon: facebook, handle: "Congressman Steve Allison" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "December 5, 1953" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "121st district, Texas" },
      {
        title: "District Address",
        description: "1635 NE Loop 410 Suite 506 San Antonio, Texas 78209",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(512) 463-0686" },
      {
        title: "Capitol Address",
        description: "Room E2.322 P.O. Box 2910 Austin, TX 78768",
      },
      { title: "Capitol Phone", description: "(512) 463-0686" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Steve_Allison",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `State Representative Steve Allison represents House District 121, succeeding former Speaker of the House Joe Straus. District 121 covers parts of north central and northeast San Antonio, as well as the cities of Alamo Heights, Olmos Park, and Terrell Hills.

Representative Allison serves on the following committees: Appropriations, Public Education, Local and Consent Calendars, and the Select Committee on Youth Health & Safety. He is also a member of the Water Caucus. Steve previously served two sessions on the Public Health Committee and the Republican Caucus Policy Committee.

Representative Allison has been recognized as “Friend of Education” by TCEA, “Champion of Education” by TASB, “Best of the House” by CLEAT, “100% Vote for Medicine” by TMA, and awarded the Shield Award by Parents and Allies for Remarkable Texans.

Steve brings significant background, community service, and leadership experience to his role in the House. He has a history of active involvement and accomplishments in numerous civic organizations and professional, business, education, health care, and other community interests and activities.

Representative Allison has been particularly active and involved in his children’s schools and in education issues, including twelve years on the Alamo Heights ISD Board of Trustees, including three terms as President, a member of the District’s Early Childhood Task Force, Vice Chairman of the District’s Legislative Committee, sponsor of Fellowship of Christian Athletes, Board member of the District’s support group, and Chair of the District’s Task Force on Character Education, Wellness and Digital Citizenship. He has been actively involved with school finance and “Robin Hood” recapture issues, including being instrumental in keeping Alamo Heights ISD’s recapture funds in the Bexar County community for funding of the legislative mandated juvenile justice academy program. Also while President, he chaired a community task force which lead to the creation of the Robbins Academy, a non-disciplinary alternative program for at-risk students. During his tenure on the Board of Trustees, he was appointed to the Texas Association of School Board’s statewide Special Committee on Revenue and Funding and later served three years as a member of the Board of Trustees of the Association. The year before his election to the House, Steve completed eight years as a member of the Board of Trustees of VIA Metropolitan Transit Authority, including the last two years as Vice Chairman of the Board.

Professionally, Steve is a highly regarded attorney, concentrating in business litigation and health care, and is a trained and experienced mediator and arbitrator. He has been repeatedly recognized in Best Lawyers in America (“Commercial Litigation” and “Bet the Company Litigation”) and Texas Super Lawyers (“Business Litigation”).

Representative Allison is a graduate of Texas Christian University and the University of Houston Law Center.

Steve and his wife, Peggy, met their freshman year at TCU and have been married for 53 years. They have two sons, Brian and Todd; six grandchildren, Taylor, Scott, Corbin, Emma, Maggie, and George; and a golden retriever, Duffy, who is a valued campaigner and goes everywhere with them. Peggy and Steve are longstanding members of St. Mark’s Episcopal Church, where both have taught children’s Sunday school and Steve has served on the Vestry.`,
  },
  {
    name: "Rep. Rafael Anchía",
    district: "103rd district, Texas",
    image: rep3,
    socials: [
      { icon: twitter, handle: "@RepRafaelAnchia" },
      { icon: youtube, handle: "Rep. Rafael Anchia" },
      { icon: instagram, handle: "reprafaelanchia" },
      { icon: facebook, handle: "Congressman Rafael Anchia" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "September 26, 1968" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "103rd district, Texas" },
      {
        title: "District Address",
        description: "1111 West Mockingbird Lane Suite 1010 Dallas, TX 75247",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(214) 943-6081" },
      {
        title: "Capitol Address",
        description: "Room 1N.5 P.O. Box 2910 Austin, TX 78768",
      },
      { title: "Capitol Phone", description: "(512) 463-0746" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Rafael_Anch%C3%ADa",
    party: {
      name: "Democratic Party",
      logo: democrat,
    },
    biography: `State Representative Rafael Anchía is currently serving his tenth term in the Texas Legislature and represents a western corridor of Dallas County, which includes the cities of Dallas, Carrollton, Farmers Branch, and Irving. Rep. Anchía currently serves on the House Committees on State Affairs, Energy Resources, Redistricting, and House Administration.

Prior to serving in the Texas House, Rep. Anchía was twice elected to serve as a Trustee for the Dallas Independent School District. From 2011-2015, he served in President Barack Obama's administration as an appointee to the Advisory Committee for Trade Policy and Negotiations, which advises the White House and U.S. Trade Representative on trade and investment agreements. Rep. Anchía served as Chairman of the Mexican American Legislative Caucus (MALC), the oldest and largest Latino caucus in the United States, from 2017-2022. Rep. Anchía graduated cum laude from Southern Methodist University (SMU); he continued his studies at Tulane Law School, where he served as Senior Fellow and received his juris doctor. He has dedicated his public service to fighting for civil rights, public education, protecting the environment, and improving access to healthcare for women and children. Rep. Anchía is a co-founder and Managing Director in the global investment firm, Civitas Capital Group; he also serves as Of Counsel at the largest law firm in Dallas, Haynes and Boone, where he represents financial institutions and public and private funds. Most importantly, he lives in beautiful North Oak Cliff with his wife Rebecca, is blessed with two exceptional daughters, and worships with the Catholic Campus Community at SMU.

Additional Professional Recognitions:
• The Distinguished Hispanic Alumni Award by Southern Methodist University, 2019
• Recognized as Outstanding Latino Advocate by D CEO Magazine, 2018
• Named as "Bull of the Brazos" by Texas Monthly, 2017
• Appointed Vice-Chair of the National Conference of State Legislatures’ Labor and Economic Development Committee, 2016
• Recognized as Legislative Hero by Texas Freedom Network, 2016
• Dallas Hispanic Bar Association's "La Luz" Award, highest award given by the Association, 2015
• Appointed Chair of Dallas Charter Review Commission by Dallas Mayor Mike Rawlings, 2014
• The Martin Luther King, Jr. Justice Award from the Dallas Bar Association, 2014
• "Outstanding Legislator" by Association of Texas Professional Educators, 2014
• Cahn Fellowship, Harvard Kennedy School, 2014
• Appointed to the Democratic National Committee as at-large member, 2013
• Appointed to the Border Legislative Conference by Speaker Joe Straus, 2013
• Recognized by Hispanic Business Magazine as one of the 50 most influential Hispanics in the United States, 2012
• "Ohtli" Award, the highest award given by the government of Mexico to acknowledge the contributions the recipients have made to help empower Mexican and Mexican American communities in the United States, 2011
• The Gregg Cooke Award for Excellence in Environmental Leadership at the annual Clean Air Through Energy Efficiency Conference, 2011
• The Latino Leaders Maestro Award for Leadership, 2010
• Appointed to four-year term on Sunset Commission by Speaker Joe Straus, 2009
• American Jewish Committee's Institute of Human Relations Award, 2009
• Texas Lawyer's “Extraordinary Minority in Texas Law,” 2009
• Mexican American Legal Defense and Education Fund's Matt Garcia Public Service Award, 2009
• Named one of Texas Monthly's Ten Best Legislators, 2007
• Aspen Institute Rodel Fellow, 2007
• Chosen Chairman of the Board of the National Association of Latino Elected and Appointed Officials Educational Fund for a three-year term, 2006
• Fleming Institute Fellow, 2006
• Texas Monthly's "Rookie of the Year," 2005
• LULAC National "Man of the Year," 2005
• British American Project Delegate, 2003
• Broad Foundation Fellow, 2003
• American Marshall Memorial Fellow, 2001`,
  },
  {
    name: "Rep. Charles Doc Anderson",
    district: "56th district, Texas",
    image: rep4,
    socials: [
      { icon: twitter, handle: "@RepCharlesAnderson" },
      { icon: youtube, handle: "Rep. Charles Anderson" },
      { icon: instagram, handle: "repcharlesanderson" },
      { icon: facebook, handle: "Congressman Charles Anderson" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "June 29, 1945" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "56th district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Charles_Anderson_(Texas_politician)",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: ` Charles "Doc" Anderson has proudly served as the Texas State Senator for District 56 since being elected in 2016. His district encompasses parts of Central Texas, including Waco and surrounding areas, which are known for their dynamic communities and robust economic growth.
  
    Prior to his role in the Texas Senate, Anderson had an extensive career in the Texas House of Representatives, serving from 2003 to 2011. His tenure in the House was marked by a strong focus on healthcare policy and conservative values, laying the groundwork for his later accomplishments in the Senate.
  
    Anderson’s career is deeply rooted in his dedication to healthcare and public service. After earning his Bachelor of Science degree from Texas A&M University and a Doctor of Medicine from the University of Texas Medical Branch, Anderson worked as a physician, gaining valuable insights into the healthcare system from both patient and provider perspectives. His medical background has significantly influenced his legislative work, particularly in areas related to healthcare reform.
  
    As a member of the Texas Senate, Anderson has focused on key issues such as healthcare, education, and economic development. He has been a leading advocate for educational reforms aimed at improving public school standards and increasing opportunities for students. His legislative efforts have been instrumental in securing funding for schools and advancing policies that promote educational excellence.
  
    In the realm of healthcare, Anderson has championed various reforms designed to enhance access to care, reduce costs, and improve the quality of medical services. His work has led to significant advancements in healthcare policy, benefiting both patients and providers across Texas.
  
    Anderson is also a strong proponent of economic development. He has supported legislation aimed at fostering economic growth, supporting small businesses, and creating job opportunities in his district. His efforts have contributed to the economic vitality of Central Texas, enhancing the quality of life for local residents.
  
    Beyond his legislative duties, Anderson is actively involved in community organizations and charitable initiatives. His commitment to service extends beyond the Capitol, reflecting his deep dedication to improving the lives of his constituents.
  
    Outside of his professional responsibilities, Anderson enjoys spending time with his family and participating in community activities. He is an enthusiastic supporter of local sports teams and takes pride in his community’s achievements.
  
    Charles "Doc" Anderson and his wife, Jane, reside in Waco, where they are active members of their church and involved in various local efforts. They have three children, all of whom have pursued successful careers and contribute to their communities.
  
    Anderson’s career in the Texas Senate is characterized by his commitment to conservative principles, effective governance, and a sincere desire to serve the people of Texas. His extensive experience and dedication continue to make him a respected and influential leader in the Texas Legislature.`,
  },
  {
    name: "Rep. Trent Ashby",
    district: "9th district, Texas",
    image: rep5,
    socials: [
      { icon: twitter, handle: "@RepTrentAshby" },
      { icon: youtube, handle: "Rep. Trent Ashby" },
      { icon: instagram, handle: "reptrentashby" },
      { icon: facebook, handle: "Congressman Trent Ashby" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: " March 13, 1972" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "9th district, Texas" },
      {
        title: "District Address",
        description: "2915 Atkinson Dr.Lufkin, TX 75901",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(936) 634-2762" },
      {
        title: "Capitol Address",
        description: "Room E2.806 P.O. Box 2910 Austin, TX 78768",
      },
      { title: "Capitol Phone", description: "(512) 463-0508" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Trent_Ashby",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `Representative Trent Ashby was sworn into the Texas House of Representatives in January 2013. His district is comprised of Angelina, Houston, Polk, San Augustine, Trinity, and Tyler Counties. He currently serves as Chair of the House Committee on Culture, Recreation & Tourism, and is a member on the House Transportation Committee. In prior sessions, Trent has served as a member of the House Committees on Appropriations, Administration, Calendars, Defense & Veterans' Affairs, Natural Resources, and Public Education. He was recognized by his colleagues in the Republican Caucus as the Freshman of the Year at the completion of his first session, and was selected after his second session as the Most Valuable Sophomore in the Texas House by Capitol Inside.

Born and raised on a dairy farm and diversified livestock operation in Rusk County, Ashby is proud of his rural background and upbringing. He is a graduate of Henderson High School and was named one of their distinguished alumnus in 2014. Trent is a graduate of Texas A&M University with a bachelor's degree in Agricultural Economics. While at A&M, he was elected to the Student Senate, Class Treasurer, and Senior Yell Leader. He continues to be involved with his alma mater through the Texas A&M Letterman's Association and Association of Former Students.

Today, Trent is Senior Vice President for VeraBank. He and his wife, Nickie, live in Lufkin with their two sons - Garin and Grant. Prior to being elected to the Legislature, Ashby served as President of the Lufkin ISD Board of Trustees. Both he and Nickie are very active in their community, as well as their church, Harmony Hill Baptist Church.`,
  },
  {
    name: "Rep. Ernest Bailes",
    district: "18th district, Texas",
    image: rep6,
    socials: [
      { icon: twitter, handle: "@RepErnestBailes" },
      { icon: youtube, handle: "Rep. Ernest Bailes" },
      { icon: instagram, handle: "repernestbailes" },
      { icon: facebook, handle: "Congressman Ernest Bailes" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "April 23, 1982" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "18th district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Ernest_Bailes",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `Elected in 2016, State Representative Ernest Bailes represents House District 18. Bailes, a lifelong rancher and agriculturalist, was raised on his family’s dairy and beef cattle operation in East Texas. He grew up in Shepherd and earned his B.S. from Texas A&M University in 2004. He currently serves on the House Committee(s) on Culture, Recreation & Tourism, and Energy Resources.

Ernest and his wife Courtney have been married for 17 years and have two sons, Cinco and Rigby, who attend Coldspring-Oakhurst CISD, where Courtney is a schoolteacher. Ernest is active in the community and serves on various boards, including the San Jacinto County Fair Association, San Jacinto County Farm Bureau, and the SISD Technology Advisory Committee. The Bailes family are active members of the First Baptist Church in Evergreen, Texas.`,
  },
  {
    name: "Rep. Cecil Bell Jr.",
    district: "3rd district, Texas",
    image: rep7,
    socials: [
      { icon: twitter, handle: "@RepCecilBellJr" },
      { icon: youtube, handle: "Rep. Cecil Bell Jr." },
      { icon: instagram, handle: "repcecilbelljr" },
      { icon: facebook, handle: "Congressman Cecil Bell Jr." },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "May 17, 1962" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "3rd district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Cecil_Bell_Jr.",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `Representative Cecil Bell, Jr. is a sixth-generation Texan whose family has been in the State of Texas since 1852. The oldest of three siblings, he was born in Rosenberg but was raised all across Texas.

A 2009 Ernst & Young Entrepreneur of the Year Finalist for the Southwest Region, Representative Bell serves as the CEO of nine active enterprises, providing clients with a variety of services and creating jobs for Texans. Cecil’s cow/calf ranching operations, located in Leon and Freestone Counties, demonstrate his personal commitment to his Texas heritage and to agriculture in Texas.

Through the years, Rep. Bell, Jr. has been really involved in his community. He has served as the Chairman of the Greater Magnolia Economic Development Partnership and was president of the Magnolia ISD School Board of Trustees. He is a charter member of the local Rotary, and he also supports his local Future Farmers of America (FFA), youth clubs, area churches, and community organizations. As a Life Member of the National Rifle Association (NRA) and the Texas State Rifle Association (TSRA), Cecil Bell, Jr. believes in our 2nd Amendment right to have and bear arms.

This is Rep. Bell's fifth Session in the Texas Legislature. He currently serves as Chair of the House Appropriations Sub-Committee on Strategic Fiscal Rev. & Fed. Relief Funds and Vice Chair of the House Appropriations Committee for Articles VI, VII, and VIII. In addition, he sits on the House Committee on International Relations and Economic Development. Throughout his years at the Legislature, he worked on dual credit access to career and technology courses; ensured Prairie View A&M University's eligibility to use unexpended balances for the Center for Study and Prevention of Juvenile Crime and Delinquency; updated the definition of first responder to include our vitally important and hard-working emergency response operators and emergency services dispatchers; and authorized a property owner to request a protest hearing notice to be delivered by certified mail or email. Rep. Bell also authored legislation to combat inadequate landfill permitting like the proposed landfill in Hempstead and legislation to protect the rights of property owners in an eminent domain proceeding.

Cecil met his high school sweetheart and now-wife, Jo Ann, at the 1979 National Meeting of the Beta Club Honor Society. The Bells moved to Magnolia in 1993. He and Jo Ann have two boys: Cecil “Trey” Bell, III, and Charlie Bell. The Bell family attends the Magnolia Church of Christ, where Cecil served many years as a Deacon.`,
  },
  {
    name: "Rep. Keith Bell",
    district: "4th district, Texas",
    image: rep8,
    socials: [
      { icon: twitter, handle: "@RepKeithBell" },
      { icon: youtube, handle: "Rep. Keith Bell" },
      { icon: instagram, handle: "repkeithbell" },
      { icon: facebook, handle: "Congressman Keith Bell" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "March 4, 1959" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "4th district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Keith_Bell_(Texas_politician)",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `A lifelong Texan, State Representative Keith Bell resides in Forney, Texas. Before being elected to represent House District 4 in November 2018, Keith served as a trustee on the Forney ISD School Board for 20 years, elected as president for fourteen times. Keith Bell has been in the electrical field since 1976. He founded Intex Electrical Contractors, Inc. in November 1983 and serves as CEO/President.

Keith holds a Master Electrician’s License in the State of Texas and served the Texas Department of Licensing and Regulation as past chairman of the Texas Electrical Safety and Licensing Advisory Board. He is also active in numerous trade organizations, including the Independent Electrical Contractors Association (IEC), where he was elected to a two-year term as President of the Dallas Chapter of the IEC and later served as the Texas IEC Chapter President. Before taking office, Representative Bell acted as IEC of Texas’ Governmental Affairs Chairman for almost two decades. Bell also serves on the Board of Directors at Baylor Scott & White Hospital-Sunnyvale.

A graduate of Dallas Baptist University with a Bachelor in Business Studies, Keith and his wife, Annette, have been married for 39 years. They have two grown daughters, five grandchildren, and are members of First Baptist Church of Forney.

Representative Bell applies his conservative values, successful business skills, and extensive public education knowledge to address skyrocketing property taxes, protect private property rights, local control, and act as a champion for our local public schools.

Representative Bell represents House District 4, encompassing Kaufman and Eastern Henderson counties.`,
  },
  {
    name: "Rep. Diego M. Bernal",
    district: "123rd district, Texas",
    image: rep9,
    socials: [
      { icon: twitter, handle: "@RepDiegoBernal" },
      { icon: youtube, handle: "Rep. Diego Bernal" },
      { icon: instagram, handle: "repdiego.bernal" },
      { icon: facebook, handle: "Congressman Diego Bernal" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "June 22, 1974" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "123rd district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Diego_Bernal",
    party: {
      name: "Democratic Party",
      logo: democrat,
    },
    biography: `Representative Diego Bernal was born in South Texas and raised in San Antonio. After graduating from Thomas Jefferson High School, he attended the University of Michigan, where he earned his undergraduate degree, Master's in Social Work, and law degree. As a social worker, he helped young gang members in Detroit transition out of a rough life and into school or the workforce. He continued this work in Harlingen, Texas with Communities in Schools (CIS), working with at-risk youth to improve literacy by founding a student newspaper.

During law school, he devoted himself to civil rights advocacy. He spent a summer in New York City with the NAACP Legal Defense Fund and a year at the Mexican American Legal Defense and Educational Fund (MALDEF) back in San Antonio.

After graduating from law school, he returned to San Antonio permanently as a MALDEF staff attorney, advocating and litigating on behalf of working people, children, and immigrant communities. He worked for systemic changes to ensure equitable funding for Texas public schools and fought against discrimination in schools and the workplace. He also fought to safeguard the integrity of our electoral systems, making sure that every citizen has an equal right to vote.

Outside of work, he pursues another passion: music. Diego has released four successful albums and contributed to other local, national, and international projects.

Diego is dedicated to the principles of equality and justice. He is committed to improving the quality of life in San Antonio and Texas on every level, and his experience in law, advocacy, and art contributes to the vision he brings to the Texas House of Representatives.

In June 2011, Diego was elected to the San Antonio City Council representing District 1. He worked alongside Mayor Julian Castro, former Secretary of Housing & Urban Development. Diego wrote and passed the strictest payday loan regulation in the state of Texas. Bernal also passed the Non-Discrimination Ordinance (NDO), ensuring everyone is treated equally and fairly.

Representative Bernal was elected to the Texas House of Representatives in February 2015. He represents District 123, home to downtown and north central San Antonio, parts of the city's West Side, along with the City of Castle Hills. He currently serves as a member of the House Committee on Agriculture and Livestock and the House Committee on Urban Affairs.

Diego is the proud father of Xan Rosa Bernal.`,
  },
  {
    name: "Rep. Salman Bhojani",
    district: "92nd district, Texas",
    image: rep10,
    socials: [
      { icon: twitter, handle: "@RepSalmanBhojani" },
      { icon: youtube, handle: "Rep. Salman Bhojani" },
      { icon: instagram, handle: "repsalmanbhojani" },
      { icon: facebook, handle: "Congressman Salman Bhojani" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: " April 18, 1980" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "92nd district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Salman_Bhojani",
    party: {
      name: "Democratic Party",
      logo: democrat,
    },
    biography: `Born in Pakistan to a large family, Representative Salman Bhojani immigrated to Texas as a teenager. He worked three minimum wage jobs to help support his family—climbing the ladder from convenience store cashier to successful business owner, attorney, Euless City Councilman, and Mayor Pro Tem. After becoming a naturalized citizen, Rep. Bhojani earned degrees from the University of Texas at Dallas, Southern Methodist University, and Oxford University.

After finding a home in Euless with his young family, Rep. Bhojani made national headlines when he was elected to the Euless City Council, becoming the first person of color to hold elected office in Euless. In 2023, Rep. Bhojani was sworn in as one of the first Muslims and the first South Asians to serve in the Texas Legislature and is the first person of color ever elected to represent House District 92.

Rep. Bhojani serves on the House Committee on Criminal Jurisprudence and the House Committee on Pensions, Investments, and Financial Services. He also serves as the Chairman of the Criminal Procedure Subcommittee on the House Committee on Criminal Jurisprudence.

Rep. Bhojani is proud to call Texas home. He lives in Euless with his wife, Nima, and his children, Aarish and Raisha. He enjoys traveling, running, hiking, playing ping pong, and spending time with his family.`,
  },
  {
    name: "Rep. Greg Bonnen",
    district: "24th district, Texas",
    image: rep11,
    socials: [
      { icon: twitter, handle: "@RepGregBonnen" },
      { icon: youtube, handle: "Rep. Greg Bonnen" },
      { icon: instagram, handle: "repgregbonnen" },
      { icon: facebook, handle: "Congressman Greg Bonnen" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "June 20, 1966" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "24th district, Texas" },
      {
        title: "District Address",
        description: "1849 Kingwood Dr., Suite #100, Kingwood, TX 77339",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(713) 860-1330" },
      {
        title: "Capitol Address",
        description: "248 Cannon HOB, Washington, DC 20515",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Greg_Bonnen",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `Representative Greg Bonnen (Friendswood) is Chair of the House Appropriations Committee and is currently serving his fifth term as State Representative for House District 24.

Prior to serving as Chair of the House Appropriations Committee, he served as Chair of the Appropriations Subcommittee on Higher and Public Education and as a member of the Insurance Committee. He has also previously served on the Energy Resources Committee; Appropriations Subcommittee on Health and Human Services; Appropriations Subcommittee on General Government, the Judiciary, and Criminal Justice; Joint Interim Committee on Coastal Barrier Systems; Texas Windstorm Insurance Association (TWIA) Funding Structure Oversight Board; Interim Committee on Border Security; and Interim Committee on Mental Health.

Representative Bonnen has been named a Courageous Conservative by the Texas Conservative Coalition, Guardian of Small Business by the National Federation of Independent Business, Texas Values Faith and Family Champion, and Pro-Life Hero.

Dr. Bonnen is a practicing neurosurgeon and serves as the Chairman of the Board of Houston Physicians’ Hospital.

Dr. Bonnen grew up in Angleton and graduated cum laude from Texas A&M University with a Bachelor of Science degree in Biochemistry, and attended medical school at UTMB where he also did his neurosurgery residency and served for two years as an assistant professor of neurosurgery. During college, Representative Bonnen spent two summers working as a counselor at Texas Lion's Camp for handicapped children, which he credits with introducing him to both his profession as a doctor and his wife, Kim. He has continued to devote time to his church and different charitable organizations and has participated in numerous mission trips to Mexico, Panama, Haiti, Cuba, and the Philippines.

Representative Bonnen and his wife Kim live in Friendswood and have two daughters, Lindsay and Janae.`,
  },
  {
    name: "Rep. Rhetta Andrews Bowers ",
    district: "83rd district, Texas",
    image: rep12,
    socials: [
      { icon: twitter, handle: "@RepRhettaBowers" },
      { icon: youtube, handle: "Rep. Rhetta Andrews Bowers" },
      { icon: instagram, handle: "reprhettabowers" },
      { icon: facebook, handle: "Congresswoman Rhetta Andrews Bowers" },
    ],
    bioData: [
      { title: "Gender", description: "Female" },
      { title: "Date of Birth", description: "November 12, 1963" },
      { title: "Date of Death", description: "N/A" },
      { title: "Current District", description: "83rd district, Texas" },
      {
        title: "District Address",
        description: "3200 Broadway Blvd. Suite 275 Garland, Texas 75043",
      },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "(972) 272-6237" },
      {
        title: "Capitol Address",
        description:
          "Room E2.906 P.O. Box 2910 Austin, TX 78768 (512) 463-0464",
      },
      { title: "Capitol Phone", description: "(202) 225-6565" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "-" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Rhetta_Andrews_Bowers",
    party: {
      name: "Democratic Party",
      logo: democrat,
    },
    biography: `Representative Bowers was elected to serve House District 113 in the Texas House of Representatives on November 8, 2018. She made history as the first African American of Caribbean descent elected to represent this district. Her mother was a native Texan and father was from St. George’s, Grenada. House District 113 includes parts of Rowlett, Garland and Mesquite, and Seagoville.

Bowers was drawn to activism at an early age, following the example of her mother, a prominent community leader, and her father, a nationally recognized surgeon. She is an alumna of Spelman College and Texas Southern University, earning her bachelor’s degree in Telecommunications, with an emphasis in Broadcast Journalism.

Upon graduation, she began a career as a broadcast journalist in public television working at PBS headquarters and for WETA-TV 26/Radio 90.9, in the District of Columbia. She moved on to commercial television once she returned home to Texas, working at KCEN-TV 6 in production, and was later promoted to news producer. Bowers has held many positions within the television industry, but it was her job as the educational services coordinator for KERA TV 13/Radio 90.1 that resonated most with her and fueled her dedication to supporting and improving education.

Throughout her adult life, Representative Bowers has always invested time and energy into her community. Bowers is an advocate for children and education. She is a former educator and has volunteered many hours on Garland Independent School District PTA and Band Boosters and executive boards. She maintains an active membership at St. Luke "Community" United Methodist Church and is a lifetime member of Delta Sigma Theta Sorority, Incorporated. She served on the Rowlett Parks and Recreation Advisory Board for 8 years. Bowers was also a member of the Rowlett Community Investment Task Force, an ad hoc committee for several years, and helped with the recovery of the city after the devastating tornado that caused major devastation in December of 2015. In addition, Representative Bowers co-founded the Dallas Women's March, and co-chaired the event from its inception and has been a founding member of the organization since 2016.

During the 86th Legislative Session, Bowers served on the House Committees for Corrections, Juvenile Justice & Family Issues, and Local and Consent Calendars. Representative Bowers champions women and children's rights, juvenile justice issues, working towards eliminating the school to prison pipeline, and uplifting marginalized communities at every level of government. She has been recognized across the state for authoring House Bill 3435, which declares March 1st as "Texas Girls in STEM Day," a day designated to highlight women in STEM and encourage and expose young girls, with support from local school districts and organizations, to embrace and enter fields relating to science, engineering, technology, math, and the arts.

During the 87th Legislative Session, Bowers continued her commitment to supporting human rights by filing the Texas CROWN Act which protects against discrimination based on race-based hairstyles by extending statutory protections to hair texture and styles such as braids, locs, twists, and knots in the workplace and public schools. Bowers also filed multiple bills to provide additional resources to people experiencing homelessness and to aid those whose life's work is helping them.

In the 88th Legislative Session, Bowers emerged as the Prime Sponsor and Champion following through on her commitment, passing the Texas CROWN Act as House Bill 567, along with House Bill 568, which provides training for peace officers for interactions with people with Alzheimer’s or other dementias. She proudly serves on the House Committees for Criminal Jurisprudence, Homeland Security & Public Safety, the Speaker’s Select Committee on Community Safety, and as Vice Chair of Local and Consent Calendars.

Representative Bowers has been honored for her public service by several organizations as the recipient of the following awards: the 2019 Bands of Hope "Trailblazer Award", the Afiya Center's "Legislative Achievement Award", Texas Southern University's "Distinguished Alumna of the Year", Greater North Dallas Business and Professional Women’s Club “Woman of the Year,” and named the Texas Legislative Black Caucus 2019 "Freshman of the Year.” In 2021, she received the “Humanitarian Award” from the Alpha Sigma Lambda chapter of Alpha Phi Alpha Fraternity, Inc. In 2022, Bowers was a recipient of the Roy Wilkins Civil Rights - NAACP Image Award for breaking quorum to fight for the freedom to vote with her colleagues in the House Democratic Caucus, Texas Legislative Black Caucus, and Mexican American Legislative Caucus. She also received the Changemaker Award for Political Leadership from Dallas’ New Leadership Council in 2022. In 2023, the first year that Juneteenth was celebrated as a National Holiday, she was a Juneteenth Honoree of the Rowlett Diversity, Equity, and Inclusion Commission. She is also a proud 2023 recipient of a Lifetime Achievement Award, signed by President Joseph R. Biden.

Though she is a proud native Houstonian, Representative Bowers has resided in Rowlett with her husband MSG (ret.) John P. Bowers, Jr. and their 2 children for more than 20 years and proudly calls House District 113 home.`,
  },
  {
    image: sen1,
    name: "Sen. Bryan Hughes",
    district: " 1st District, Texas",
    socials: [
      { icon: envelope, handle: "bryan.hughes@senate.texas.gov" },
      { icon: twitter, handle: "@SenBryanHughes" },
      { icon: youtube, handle: "Bryan Hughes" },
      { icon: instagram, handle: "bryanhughes" },
      { icon: facebook, handle: "Bryan Hughes" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "November 4, 1973" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: " 1st District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0101" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Bryan_Hughes",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `Bryan Hughes is serving his third term in the Texas Senate, representing the 19 counties of Senate District One in Northeast Texas.

    Born and raised in East Texas, Bryan attended Tyler Junior College and the University of Texas at Tyler, receiving his B.B.A. in economics, cum laude, and becoming the first member of his family to receive a bachelor’s Degree. He went on to Baylor University School of Law and then served as law clerk to U.S. District Judge William Steger of Tyler before entering private practice which he maintains, helping families and businesses solve problems and deal with difficult challenges.

    He has been honored as Baylor Young Lawyer of the Year and Outstanding Alumnus of both Tyler Junior College and the University of Texas at Tyler. For his service in the Legislature, Senator Hughes has received the Taxpayer Champion Award, the Visionary Leader Award from Combined Law Enforcement Associations of Texas, and the Horizon Award from Texas Right to Life. He has also been named Defender of the American Dream by Americans for Prosperity and Guardian of Small Business by the National Federation of Independent Business. Mothers Against Drunk Driving honored Senator Hughes as 2017 Legislator of the Year, and the American Conservative Union consistently has given him their highest rating.

    Senator Hughes promotes individual opportunity and personal liberty so that everyone can experience the American Dream.

    Senator Hughes serves as Chairman of the Senate Committee on State Affairs and the Senate Committee on Jurisprudence and as a member of the Finance, Health & Human Services, Natural Resources & Economic Development, and Nominations Committees.`,
  },
  {
    image: sen2,
    name: "Sen. Bob Hall",
    district: " 2nd District, Texas",
    socials: [
      { icon: envelope, handle: "bob.hall@senate.texas.gov" },
      { icon: twitter, handle: "@SenBobHall" },
      { icon: youtube, handle: "Bob Hall" },
      { icon: instagram, handle: "bobhall" },
      { icon: facebook, handle: "Bob Hall" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "December 3, 1945" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: " 2nd District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0102" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Bob_Hall_(Texas_politician)",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `Currently in the 88th Legislature, Texas Senator Bob Hall is the Chairman of the vital Senate Committee on Administration and an influential voting member on the Senate Committee of Finance, Health and Human Services, Local Government, and Veteran Affairs. He has earned the reputation of being open-minded and willing to discuss ideas but absolutely unwavering in holding to his core conservative principles and Judeo-Christian values. He is a man who believes in the Declaration of Independence and follows the Constitution. He is pro-life, pro-gun, pro-liberty, pro-property rights, pro-Judeo-Christian conservative values, a staunch proponent of the free market, fiscally responsible, and pro-limited government. Senator Hall was instrumental in making Texas a 2nd Amendment Sanctuary State, as well as protecting religious organizations and churches from government shutdowns.

  After the Air Force, he worked in the aerospace industry as a systems engineer and business development manager. In 1982, he left the corporate world and began working as an independent proposal consultant to aerospace and defense corporations. Then in 1984, he formed his own company, Professional Proposal Management, Inc.

  A compelling sense of duty, shaped by his military service, business experience, and love for this country, drives him to leave behind the legacy of a patriotic servant for his children and grandchildren. Envisioning their futures compelled him to become actively involved in the state's political process and strongly believes it is time to stand in the gap for our children, our liberties, and our future.`,
  },
  {
    image: sen3,
    name: "Sen. Robert Nichols",
    district: "3rd District, Texas",
    socials: [
      { icon: envelope, handle: "robert.nichols@senate.texas.gov" },
      { icon: twitter, handle: "@SenRobertNichols" },
      { icon: youtube, handle: "Robert Nichols" },
      { icon: instagram, handle: "robertnichols" },
      { icon: facebook, handle: "Robert Nichols" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "April 27, 1947" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "3rd District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0103" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Robert_Nichols",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `First elected to the Texas Senate in 2007, Robert Nichols represents 18 counties including the greater part of East and Southeast Texas.

  In the Texas Senate, Nichols currently serves as Chairman of the Senate Transportation Committee. Senator Nichols also serves on the Business and Commerce, Finance, Local Government, and Select Redistricting Committees. He is a member of the Legislative Audit Committee, and a former Vice-Chair of the Sunset Advisory Commission.

  During his nine sessions as a state senator, Nichols authored and passed legislation to protect landowners' rights, increase educational opportunities in East Texas, and reform transportation policies. He has also worked to reduce Medicaid fraud and promote free-market principles. He was designated as a Top Legislator by Texas Insider, a Champion of Free Enterprise by the Texas Association of Business, a Courageous Conservative by the Texas Conservative Coalition, a Champion for Public Education by Raise Your Hand Texas, and a Top 10 Best Legislator for the 85th and 88th Legislative Sessions by Texas Monthly Magazine.

  Before running for Senate, Nichols served as transportation commissioner for eight years where he established a reputation for increasing efficiency without compromising quality.

  Nichols is a businessman from Jacksonville, Texas. In his hometown, he served on city council, was elected mayor, built four successful manufacturing facilities, earned 32 U.S. patents and 128 foreign patents, as well as creating more than 900 jobs for East Texas families.

  Working his way through college by selling fireworks and ironing clothes for other students, Nichols earned a bachelor's degree from Lamar University in 1968. He married his high school sweetheart, Donna, and they are the proud parents of three children: Brittney, Joshua, and Collynn'rae. He is a member of the First Methodist Church in Jacksonville.`,
  },
  {
    image: sen4,
    name: "Sen. Brandon Creighton",
    district: "4th District, Texas",
    socials: [
      { icon: envelope, handle: "brandon.creighton@senate.texas.gov" },
      { icon: twitter, handle: "@SenBrandon" },
      { icon: youtube, handle: "Brandon Creighton" },
      { icon: instagram, handle: "brandoncreighton" },
      { icon: facebook, handle: "Brandon Creighton" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "October 14, 1974" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: " 4th District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0104" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Brandon_Creighton",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `On August 26, 2014, Senator Brandon Creighton was sworn in to the Texas State Senate to represent the citizens of District 4, which encompasses parts of Montgomery, Harris, Chambers, Jefferson, and Galveston Counties.

  During his tenure as Senator, he has taken the lead on key issues that matter to Texas job creators including franchise and property tax relief, water and transportation infrastructure, and border security.

  Before election to the Texas Senate, Creighton served as State Representative for District 16 where his peers elected him to Chairman of the Texas House Republican Caucus. He also served as Chairman of House Federalism Committees tasked with overseeing the state’s relationship with the federal government and ensuring that Texas’ constitutional rights are protected.

  Throughout his legislative career, his priorities have distinguished him as a genuine defender of conservative values. He has relentlessly hammered excessive taxation, pursued “loser pays” tort reform, passed drug testing for unemployment benefits, stood up for Texas’ 10th Amendment rights, and effectively blocked Obamacare's Medicaid expansion.

  Brandon is an eighth-generation Montgomery County resident, where he resides with his family. He is a graduate of the University of Texas and holds his Doctor of Jurisprudence from Oklahoma City University School of Law. In his spare time, he enjoys Texas history, sports, hunting, and fishing.`,
  },
  {
    image: sen5,
    name: "Sen. Charles Schwertner",
    district: "5th District, Texas",
    socials: [
      { icon: envelope, handle: "charles.schwertner@senate.texas.gov" },
      { icon: twitter, handle: "@SenCharles" },
      { icon: youtube, handle: "Charles Schwertner" },
      { icon: instagram, handle: "charlesschwertner" },
      { icon: facebook, handle: "Charles Schwertner" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "August 18, 1974" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "5th District, Texa" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0105" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Charles_Schwertner",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `Senator Charles Schwertner, MD is a sixth-generation Texan and lifelong conservative Republican. Since 2013, Dr. Schwertner has represented Senate District 5, an eleven-county region of central and east Texas that includes Bastrop, Brazos, Freestone, Leon, Limestone, Madison, Milam, Robertson, San Jacinto, Walker, and Williamson counties.

  As Chairman of the powerful Senate Committee on Business and Commerce and the Sunset Advisory Commission, Schwertner oversees a number of critical policy areas for the state of Texas, including electric utilities, insurance, banking, technology, and telecommunications. Schwertner also serves as a member of the Senate Committees on Finance, State Affairs, and on the Legislative Budget Board.

  Throughout his time in the Texas Legislature, Schwertner has led the way on a number of important policy initiatives including authoring one of the strongest Constitutional Carry laws in the nation, reforming the state’s electrical grid, expanding access to mental health services, improving the state foster care system, strengthening landowner rights, cutting taxes for small businesses, protecting seniors from abuse, and fighting to lower tuition at public universities.

  Schwertner and his wife Belinda (an obstetrician/gynecologist and Juris Doctor) reside in Georgetown. They have three adult sons: Carson, Zachary, and Matthew.`,
  },
  {
    image: sen6,
    name: "Sen. Carol Alvarado",
    district: " 6th District, Texas",
    socials: [
      { icon: envelope, handle: "carol.alvarado@senate.texas.gov" },
      { icon: twitter, handle: "@SenCarolAlvarado" },
      { icon: youtube, handle: "Carol Alvarado" },
      { icon: instagram, handle: "carolalvarado" },
      { icon: facebook, handle: "Carol Alvarado" },
    ],
    bioData: [
      { title: "Gender", description: "Female" },
      { title: "Date of Birth", description: " January 11, 1972" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "6th District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0106" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Carol_Alvarado",
    party: {
      name: "Democratic Party",
      logo: democrat,
    },
    biography: `Senator Carol Alvarado is proud to serve Texas Senate District 6 in Harris County and was first elected in a 2018 Special Election.

  In 2008, she was elected to the Texas House of Representatives and served five terms representing District 145. She served as the Chair of the Urban Affairs Committee and Co-Chair of the Select Committee on Transparency in State Agency Operations.

  Now in her third term in the Texas Senate, Carol serves on the Senate Committees on Administration, Natural Resources and Economic Development, Nominations, Transportation and the Special Committee on Redistricting. Carol also serves as the Chair of the Texas Senate Democratic Caucus.

  Carol's primary legislative focus has been on economic development, public health and public education. She has championed legislation aimed at strengthening our state's workforce, helping small businesses succeed, creating tools to recruit businesses to relocate to Texas, regulating the use of e-cigarettes for children and criminal justice reform.

  Carol is an advocate for women's health and reproductive rights and has passed legislation to assist victims of sexual abuse. She is also a strong advocate for voting rights and ensuring access to the ballot.

  As a member of the Houston City Council from 2002-2008, Carol led the effort to make restaurants smoke free, stopped the shipping of more hazardous chemicals through our neighborhoods, and had air quality monitors installed in neighborhoods near chemical plants.

  Carol is a native Houstonian and longtime resident of Houston's East End. She holds a Master of Business Administration and a Bachelor of Arts degree in Political Science from the University of Houston and is a member of St. Alphonsus Catholic Church.`,
  },
  {
    image: sen7,
    name: "Sen. Paul Bettencourt",
    district: "7th Distict, Texas",
    socials: [
      { icon: envelope, handle: "paul.bettencourt@senate.texas.gov" },
      { icon: twitter, handle: "@SenPaulBettencourt" },
      { icon: youtube, handle: "Paul Bettencourt" },
      { icon: instagram, handle: "paulbettencourt" },
      { icon: facebook, handle: "Paul Bettencourt" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "December 14, 1964" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "7th Distict, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0107" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Paul_Bettencourt",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: `First elected to the Senate in 2014, Senator Paul Bettencourt represents Senate District 7, which encompasses most of West Harris County. He previously served 10 years, from 1998 - 2008, as the Harris County Tax Assessor-Collector, where he introduced “Smart Government” at the Harris County Tax Office and developed a customer service-driven organization. His team created the first major county online property tax payment system and the first county tax office website with online vehicle registration in Texas. (His motto was “Get on-line, not in-line.”) He was well-known as the “Tax Man” for his outspoken efforts to cut property taxes.

  In the most recent Legislative Session, Senator Bettencourt successfully passed Senate Bill 2, the Texas Property Tax Reform and Transparency Act of 2019, by a vote of 21-9 to bring meaningful property tax reform and relief to all Texas taxpayers. This was the first major property tax reform legislation in almost 40 years, and the culmination of two decades of advocacy. He also continued his work on adult stem cell therapies in Texas by sponsoring HB 3148, building upon previous legislative sessions to get government out of the way, allowing new therapies to flourish and give terminally and chronically ill patients hope for a better quality of life. His work during the 86th Session earned him the distinction of "Senate MVP" by Capitol Inside, "Bull of the Brazos" by Texas Monthly, the Legislative Legacy Award by Texas Public Policy Foundation and he was given the "Citizen's Choice Award" by Empower Texans.

  A champion for conservative solutions to Texas' challenges, Senator Bettencourt has built a strong reputation at the Capitol advocating for taxpayers. In his previous legislative sessions he worked tirelessly to pass conservative budgets, enact a supermajority requirement within a taxing jurisdiction to raise taxes, (which prevented a $100,000,000 tax increase in its first year) as well as author SB 7 which sought to stamp out the growing plague of inappropriate student-educator relationships. A compassionate conservative, Senator Bettencourt has been a leader on "Right to Try" and adult stem cell legislation, fighting for terminally and chronically ill patients across Texas to have better access to treatments and new therapies. Legislation that he sponsored on this important issue was adopted by the American Legislative Exchange Council as a national model other states could follow. He has also greatly expanded dual credit opportunities (SB 1004) for Texas students and Joint-Authored bipartisan legislation to enhance educational opportunities for students through ISD/Charter partnerships (SB 1882).

  Numerous organizations have acknowledged Senator Bettencourt for his work in the Texas Senate. In his first session, Capitol Inside named him "Most Valuable Freshman" and Vision America named him their "Outstanding Texas Legislator." He has also been named “Taxpayer Advocate of the Year” by the Americans for Prosperity, Previously as an elected official he was named a “Hero of Faith” by the Houston Area Pastors’ Council, and earned the “Pioneer Award” from the Harris County Republican Party.

  Senator Bettencourt is the Chair of the Senate Committee on Local Government and serves on the Senate Finance, Education, and Criminal Justice committees. He has also been named to the Redistricting Committee by Lt. Governor Patrick. He also served as the Chair of the Senate Republican Caucus from January 2016 to February 2021.

  A Bachelor of Science graduate of Texas A&M University in Industrial Distribution, Senator Bettencourt is the President and CEO of a tax consulting company in Houston that has grown to forty employees. He is also a radio and television personality. The Senator and his wife Susan are active members of Saint John Vianney Catholic Church, where Paul is a fourth degree Knight of Columbus.

  Senate District 7 is located in Harris County and includes Bunker Hill Village, Hedwig Village, parts of Houston, Hunters Creek Village, Jersey Village, Piney Point Village, Spring, and Tomball.`,
  },
  {
    image: sen8,
    name: "Sen. Angela Paxton",
    district: "8th District, Texas ",
    socials: [
      { icon: envelope, handle: "angela.paxton@senate.texas.gov" },
      { icon: twitter, handle: "@SenAngelaPaxton" },
      { icon: youtube, handle: "Angela Paxton" },
      { icon: instagram, handle: "angelapaxton" },
      { icon: facebook, handle: "Angela Paxton" },
    ],
    bioData: [
      { title: "Gender", description: "Female" },
      { title: "Date of Birth", description: "November 6, 1974" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "8th District, Texas " },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0108" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Angela_Paxton",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: ` Angela Paxton was elected to the Texas Senate in November of 2018 and represents fast-growing Senate District 8, a district that is home to professional sports headquarters, dozens of Fortune 1000 companies, countless entrepreneurs and small businesses, top-rated public schools, and is joined by rural communities to the east that feature Texas charm and recreation. A secondary math teacher and school counselor for more than 20 years, she is the first educator elected to the Texas Senate in over two decades. Senator Paxton describes her job in three words: Listen. Learn. Lead.

  Senator Paxton is an adopted child and the first person in her family to graduate from college. She earned an undergraduate degree in Mathematical Science from Baylor University and a Master of Science in Education from the University of Houston-Clear Lake.

  Senator Paxton leverages her expertise as an educator, interest in technology, experience as a small business owner, and deep roots in Senate District 8 to advocate for her constituents and lead on policy that elevates educational and economic opportunity and human dignity.

  Senator Paxton currently serves as the Vice Chair of the State Affairs Committee and as a member of the Senate committees for Finance, Education, Local Government, and Nominations. She is also the Chair of the Senate Republican Caucus, where she works with the other Republican Senators to advance our conservative priorities.

  Senator Paxton and her husband, Texas Attorney General Ken Paxton, met as students at Baylor University and have been married since 1986. They have four grown children and three grandchildren, and are members of Prestonwood Baptist Church in Plano.`,
  },
  {
    image: sen9,
    name: "Sen. Kelly Hancock",
    district: "9th District, Texas ",
    socials: [
      { icon: envelope, handle: "kelly.hancock@senate.texas.gov" },
      { icon: twitter, handle: "@SenKellyHancock" },
      { icon: youtube, handle: "Kelly Hancock" },
      { icon: instagram, handle: "kellyhancock" },
      { icon: facebook, handle: "Kelly Hancock" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "August 5, 1969" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "9th District, Texas " },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0109" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Kelly_Hancock",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: ` First elected to the Texas Senate in 2012, Kelly Hancock represents Senate District 9 in Tarrant County. He previously served in the Texas House of Representatives and remains an advocate for core conservative values of limited government and lower taxes.

  Throughout his legislative career, Senator Hancock has worked diligently to keep government out of the way of Texas' job-creators and plan ahead for the growth associated with our state’s thriving economy. He has also passed model legislation to protect consumers from surprise medical bills and give Texas the most conservative state spending cap in the nation.

  As a consistent advocate for key issues such as property tax reform, education freedom, and border security, Senator Hancock has earned recognition as a "Courageous Conservative," a "Champion of Small Business," and a "Lone Star Conservative Leader."

  A graduate of Baylor University, Senator Hancock possesses an extensive business background and runs his family-founded distribution company. His commitment to public service began shortly after the birth of his first child. As a parent dedicated to a strong education system, Senator Hancock spent the next 13 years serving on his local school board.

  He and his wife, Robin, have been married 37 years and have three children: Chloe (Greg), Skylar (Aaron), and Harrison (Parker). They proudly welcomed their first grandchild in 2018 and are now proud grandparents to six tiny Texans!`,
  },
  {
    image: sen10,
    name: "Sen. Phil King",
    district: " 10th District, Texas",
    socials: [
      { icon: envelope, handle: "phil.king@senate.texas.gov" },
      { icon: twitter, handle: "@SenPhilKing" },
      { icon: youtube, handle: "Phil King" },
      { icon: instagram, handle: "philking" },
      { icon: facebook, handle: "Phil King" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "August 12, 1966" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "10th District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0104" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Phil_King_(Texas_politician)",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: ` Senator King proudly serves the citizens of Senate District 10, a sprawling district with a mixture of urban, suburban, and rural interests across eight counties.

  He previously served as State Representative and Parker County Justice of the Peace.

  Phil King was just elected as Chairman for the Texas Conservative Coalition Research Institute. He also serves on the National Board of Directors for the American Legislative Exchange Council and was the 2015 National Chair.

  Phil was a police officer in Fort Worth for 15 years, a reserve officer for 26 years, and continues to serve in the Texas State Guard. A practicing attorney and small business owner, King resides in Weatherford where he and his family have been longtime members of Trinity Bible Church. Phil and his wife Terry are the proud parents of six children and seventeen grandchildren.

  Phil earned his B.A. and M.B.A. from Dallas Baptist University and a law degree from Texas A&M University School of Law (formerly known as Texas Wesleyan University School of Law).`,
  },
  {
    image: sen11,
    name: "Sen. Mayes Middleton",
    district: " 11th District, Texas",
    socials: [
      { icon: envelope, handle: "mayes.middleton@senate.texas.gov" },
      { icon: twitter, handle: "@SenMayesMiddleton" },
      { icon: youtube, handle: "Mayes Middleton" },
      { icon: instagram, handle: "mayesmiddleton" },
      { icon: facebook, handle: "Mayes Middleton" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "December 1, 1981" },
      { title: "Date of Death", description: "N/A" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "11th District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0108" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Mayes_Middleton",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: ` Mayes Middleton is President of Middleton Oil Company, an independent oil and gas company. He also runs ranching, cattle, and farming operations. Mayes and his wife, Macy, have four children: Connor, Christian, Matthew, and Martha Ann. Mayes and Macy support numerous local community organizations and faith-based charities throughout the Galveston-Houston region.

  Prior to serving in the Texas Senate, Mayes served two terms in the Texas House of Representatives, representing Chambers and Galveston Counties. During his last term in the Texas House, Mayes served as Chairman of the Texas House Freedom Caucus.

  Now in the Texas Senate, Mayes represents Senate District 11, encompassing portions of Brazoria, Galveston, and Harris Counties. Throughout his time in both the House and Senate, Mayes has consistently ranked among the top most conservative members of the Legislature. Senator Middleton currently serves as the Vice Chairman of the Subcommittee on Higher Education and as a member on the Senate Committees on Administration, Business & Commerce, Education, Jurisprudence, and State Affairs.`,
  },
  {
    image: sen12,
    name: "Sen. Tan Parker",
    district: " 12th District, Texas",
    socials: [
      { icon: envelope, handle: "tan.parker@senate.texas.gov" },
      { icon: twitter, handle: "@SenTanParker" },
      { icon: youtube, handle: "Tan Parker" },
      { icon: instagram, handle: "tanparker" },
      { icon: facebook, handle: "Tan Parker" },
    ],
    bioData: [
      { title: "Gender", description: "Male" },
      { title: "Date of Birth", description: "N/A" },
      { title: "Date of Death", description: "September 29, 1976" },
      { title: "Chamber", description: "Upper" },
      { title: "Current District", description: "12th District, Texas" },
      { title: "District Address", description: "N/A" },
      { title: "District Voice", description: "-" },
      { title: "District Phone", description: "N/A" },
      {
        title: "Capitol Address",
        description: "P.O. Box 12068 Austin, TX 78711",
      },
      { title: "Capitol Phone", description: "(512) 463-0109" },
      { title: "Capitol Voice", description: "-" },
      { title: "Status", description: "Active" },
    ],
    wiki: "https://en.wikipedia.org/wiki/Tan_Parker",
    party: {
      name: "Republican Party",
      logo: republican,
    },
    biography: ` Tan Parker is a businessman who grew up in North Texas, working in his family’s restaurants while volunteering in his community. He married his college sweetheart, Beth, and they moved to Flower Mound, where they raised their daughters, Lauren and Ashley. While family comes first, Tan considers working for the betterment of Texas the highest honor of his professional life.

  Previously serving in the Texas House, Tan held leading committee roles on policy matters vital to our state. His leadership was instrumental in the unanimous election by his colleagues as chair of the House Republican Caucus during the 84th and 85th legislative sessions.

  Tan’s legislative success touches a broad range of issues facing Texans and serves as a reflection of open dialogue with his constituency. His legislative accomplishments represent his extensive work fostering Texas’ economic vitality and protecting our most vulnerable.

  Tan graduated from the University of Dallas and earned a Master’s degree from the London School of Economics before building a distinguished private sector career in technology and private equity. He also created the book, *Making Government Work*.

  The bedrock of his service is exemplified through passionate advocacy for community and fighting for common-sense, conservative policies that strengthen Texas’ prosperity.`,
  },
];

export const senators: Representative[] = [
  {
    image: sen1,
    name: "Sen. Bryan Hughes",
    district: 1,
    description:
      "Bryan Hughes is serving his third term in the Texas Senate, representing the 19 counties of Senate District One in Northeast Texas. Born and raised in East Texas, Bryan attended Tyler Junior College and the University of Texas at Tyler, receiving his B.B.A. in economics, cum laude.",
    id: 15,
  },
  {
    image: sen2,
    name: "Sen. Bob Hall",
    district: 2,
    description:
      "Currently in the 88th Legislature, Texas Senator Bob Hall, is the Chairman of the vital Senate Committee on Administration and an influential voting member on the Senate Committee of Finance, Health and Human Services, Local Government, and Veteran Affairs.",
    id: 16,
  },
  {
    image: sen3,
    name: "Sen. Robert Nichols",
    district: 3,
    description:
      "First elected to the Texas Senate in 2007, Robert Nichols represents 18 counties including the greater part of East and Southeast Texas. In the Texas Senate, Nichols currently serves as Chairman of the Senate Transportation Committee.",
    id: 17,
  },
  {
    image: sen4,
    name: "Sen. Brandon Creighton",
    district: 4,
    description:
      "On August 26, 2014, Senator Brandon Creighton was sworn in to the Texas State Senate to represent the citizens of District 4, which encompasses parts of Montgomery, Harris, Chambers, Jefferson and Galveston Counties.",
    id: 18,
  },
  {
    image: sen5,
    name: "Sen. Charles Schwertner",
    district: 5,
    description:
      "Senator Charles Schwertner, MD is a sixth-generation Texan and lifelong conservative Republican. Since 2013, Dr. Schwertner has represented Senate District 5, an eleven-county region of central and east Texas that includes Bastrop, Brazos, Freestone, Leon, and Williamson counties.",
    id: 19,
  },
  {
    image: sen6,
    name: "Sen. Carol Alvarado",
    district: 6,
    description:
      "Senator Carol Alvarado is proud to serve Texas Senate District 6 in Harris County and was first elected in a 2018 Special Election. In 2008, she was elected to the Texas House of Representatives and served five terms representing District 145.",
    id: 20,
  },
  {
    image: sen7,
    name: "Sen. Paul Bettencourt",
    district: 7,
    description:
      "First elected to the Senate in 2014, Senator Paul Bettencourt represents Senate District 7, which encompasses most of West Harris County. He previously served 10 years, from 1998 - 2008, as the Harris County Tax Assessor-Collector.",
    id: 21,
  },
  {
    image: sen8,
    name: "Sen. Angela Paxton",
    district: 8,
    description:
      "Angela Paxton was elected to the Texas Senate in November of 2018 and represents fast-growing Senate District 8, a district that is home to professional sports headquarters, dozens of Fortune 1000 companies, countless entrepreneurs and small businesses.",
    id: 22,
  },
  {
    image: sen9,
    name: "Sen. Kelly Hancock",
    district: 9,
    description:
      "First elected to the Texas Senate in 2012, Kelly Hancock represents Senate District 9 in Tarrant County. He previously served in the Texas House of Representatives and remains an advocate for core conservative values of limited government and lower taxes.",
    id: 23,
  },
  {
    image: sen10,
    name: "Sen. Phil King",
    district: 10,
    description:
      "Senator King proudly serves the citizens of SD 10, a sprawling district with a mixture of urban, suburban, and rural interests across eight counties. He previously served as State Representative and Parker County Justice of the Peace.",
    id: 24,
  },
  {
    image: sen11,
    name: "Sen. Mayes Middleton",
    district: 11,
    description:
      "Mayes Middleton is President of Middleton Oil Company, an independent oil and gas company. He also runs ranching, cattle, and farming operations. Mayes and his wife, Macy, have four children: Connor, Christian, Matthew, and Martha Ann.",
    id: 25,
  },
  {
    image: sen12,
    name: "Sen. Tan Parker",
    district: 12,
    description:
      "Tan Parker is a businessman, who grew up in North Texas working in his family’s restaurants while volunteering in his community. He married his college sweetheart, Beth, and they moved to Flower Mound, raising their daughters, Lauren and Ashley.",
    id: 26,
  },
];

export const representatives: Representative[] = [
  {
    image: rep1,
    name: "Rep. Alma A. Allen",
    district: 131,
    description:
      "Prior to being elected to the Texas House of Representatives, State Representative Dr. Alma A. Allen was elected to, and served on, the State Board of Education for over 10 years.",
    id: 3,
  },
  {
    image: rep2,
    name: "Rep. Steve Allison",
    district: 121,
    description:
      "State Representative Steve Allison represents House District 121, succeeding former Speaker of the House Joe Straus. District 121 covers parts of north central and northeast San Antonio, as well as the cities of Alamo Heights, Olmos Park, and Terrell Hills.",
    id: 4,
  },
  {
    image: rep3,
    name: "Rep. Rafael Anchía",
    district: 103,
    description:
      "State Representative Rafael Anchía is currently serving his tenth term in the Texas Legislature and represents a western corridor of Dallas County, which includes the cities of Dallas, Carrollton, Farmers Branch, and Irving. Rep. Anchía currently serves on the House Committees on State Affairs and Energy Resources.",
    id: 5,
  },
  {
    image: rep4,
    name: "Rep. Charles Doc Anderson",
    district: 56,
    description:
      "Chairman, Texas Legislative Rural Caucus Vice-Chairman, Texas House Aerospace Caucus Vice-Chairman, House Committee on Energy House Committee on Agriculture and Livestock",
    id: 6,
  },
  {
    image: rep5,
    name: "Rep. Trent Ashby",
    district: 9,
    description:
      "Representative Trent Ashby was sworn into the Texas House of Representatives in January 2013. His district is comprised of Angelina, Houston, Polk, San Augustine, Trinity, and Tyler Counties. He currently serves as Chair of the House Committee on Culture, Recreation & Tourism.",
    id: 7,
  },
  {
    image: rep6,
    name: "Rep. Ernest Bailes",
    district: 18,
    description:
      "Elected in 2016, State Representative Ernest Bailes represents House District 18. Bailes, a lifelong rancher and agriculturalist, was raised on his family’s dairy and beef cattle operation in East Texas. He grew up in Shepherd and earned his B.S. from Texas A&M University in 2004.",
    id: 8,
  },
  {
    image: rep7,
    name: "Rep. Cecil Bell Jr.",
    district: 3,
    description:
      "Representative Cecil Bell, Jr. is a sixth generation Texan whose family has been in the State of Texas since 1852. The oldest of three siblings, he was born in Rosenberg but was raised all across Texas. A 2009 Ernst & Young Entrepreneur of the Year Finalist for the Southwest Region.",
    id: 9,
  },
  {
    image: rep8,
    name: "Rep. Keith Bell",
    district: 4,
    description:
      "A lifelong Texan, State Representative Keith Bell resides in Forney, Texas. Before being elected to represent House District 4 in November 2018, Keith served as a trustee on the Forney ISD School Board for 20 years, elected as president for 17 of those years.",
    id: 10,
  },
  {
    image: rep9,
    name: "Rep. Diego M. Bernal",
    district: 123,
    description:
      "Diego Bernal proudly represents the 123rd District in the Texas House of Representatives. A life-long San Antonian and the son of a Vietnam War Veteran, Diego grew up watching his mother and father make sacrifices to provide opportunities for their children.",
    id: 11,
  },
  {
    image: rep10,
    name: "Rep. Salman Bhojani",
    district: 92,
    description:
      "Salman Bhojani is a husband, father, small business owner, attorney, and councilmember. He was elected to the Texas House of Representatives in November 2022 to represent House District 92. In 2018, he was elected to the Euless City Council, becoming the first Muslim-American elected in North Texas.",
    id: 12,
  },
  {
    image: rep11,
    name: "Rep. Greg Bonnen",
    district: 24,
    description:
      "State Representative Greg Bonnen, MD is serving his fourth term in the Texas House of Representatives and currently represents the 24th district which encompasses the cities of Galveston, League City, Santa Fe, and Tiki Island.",
    id: 13,
  },
  {
    image: rep12,
    name: "Rep. Rhetta Andrews Bowers ",
    district: 83,
    description:
      "State Representative Dustin Burrows proudly serves the people of House District 83 in West Texas. A fourth generation West Texan, Dustin was born and raised in Lubbock and attended Lubbock public schools. He received his BA from Rhodes College and his JD from Texas Tech School of Law.",
    id: 14,
  },
];

export const allRepresentatives = [...senators, ...representatives];
