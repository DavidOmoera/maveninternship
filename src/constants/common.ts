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
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter2,
    supporter3: voter3,
    supporter4: voter4,
    supporter5: voter5,
    supporter6: voter6,
    count1: "+23",
    count2: "+51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter8,
    supporter3: voter9,
    supporter4: voter10,
    supporter5: voter11,
    supporter6: voter12,
    count1: "+23",
    count2: "+51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter14,
    supporter3: voter15,
    supporter4: voter16,
    supporter5: voter17,
    supporter6: voter18,
    count1: "+23",
    count2: "+51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter18,
    supporter3: voter12,
    supporter4: voter2,
    supporter5: voter10,
    supporter6: voter12,
    count1: "+23",
    count2: "+51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter10,
    supporter3: voter12,
    supporter4: voter2,
    supporter5: voter10,
    supporter6: voter12,
    count1: "+23",
    count2: "+51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter10,
    supporter3: voter12,
    supporter4: voter2,
    supporter5: voter10,
    supporter6: voter12,
    count1: "+23",
    count2: "+51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter10,
    supporter3: voter12,
    supporter4: voter2,
    supporter5: voter10,
    supporter6: voter12,
    count1: "+23",
    count2: "+51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicitudin eget eget risus.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter2,
    supporter2: voter10,
    supporter3: voter12,
    supporter4: voter2,
    supporter5: voter10,
    supporter6: voter12,
    count1: "23",
    count2: "51",
  },
  {
    state: "Texas",
    relativeTime: "2w ago",
    title: "Secure the Border Act of 2023",
    status: "Introduced",
    description:
      "Faucibus et odio et hendrerit mauris est. Porta tempor dignissim viverra in. Duis mollis tristique enim leo in et. Faucibus elit id fames egestas lobortis sagittis enim. Non arcu id varius pellentesque volutpat libero. Dignissim quis amet sapien gravida egestas fermentum viverra in. Sodales neque egestas tincidunt velit scelerisque dolor non. Lectus sit nulla cursus et eleifend vulputate ullamcorper facilisis.",
    name: "Sen. Mat Adams",
    image: senator,
    supporter1: voter17,
    supporter2: voter10,
    supporter3: voter12,
    supporter4: voter2,
    supporter5: voter10,
    supporter6: voter12,
    count1: "+23",
    count2: "+51",
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
];
