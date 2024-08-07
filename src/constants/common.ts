import topRepresentative from "assets/top_representative.png";
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
    title: "Most Votes",
    representative: "Sen. Ivy Adams",
    district: "District 1",
    image: topRepresentative,
  },
  {
    title: "Most Votes of the Week",
    representative: "Sen. Ivy Adams",
    district: "District 1",
    image: topRepresentative,
  },
  {
    title: "Least Votes",
    representative: "Sen. Ivy Adams",
    district: "District 1",
    image: topRepresentative,
  },
];

export const watchedBills = [
  {
    state: "Texas",
    title: "Secure the Border Act of 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
  },
  {
    state: "Wyoming",
    title: "Secure the Border Act of 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
  },
  {
    state: "Washington",
    title: "Secure the Border Act of 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
  },
  {
    state: "Ohio",
    title: "Secure the Border Act of 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
  },
  {
    state: "West Virginia",
    title: "Secure the Border Act of 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
  },
  {
    state: "Colorado",
    title: "Secure the Border Act of 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ligula ac nisl maximus sollicit udin eget eget risus.",
    status: "Introduced",
    relativeTime: "2w ago",
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
    type: "Removed",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#FDEAEC",
    icon: archiveminus,
  },
  {
    time: "4 hrs ago",
    type: "Added",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#E9F3FF",
    icon: archiveadd,
  },
  {
    time: "Yesterday, 5:34 pm",
    type: "Edited",
    label: "your Profile",
    link: "",
    iconBackgroundColor: "#E1F8FD",
    icon: useredit,
  },
  {
    time: "Yesterday, 2:45 pm",
    type: "Removed",
    label: "a Legislature",
    link: "Texas",
    iconBackgroundColor: "#FFEAF1",
    icon: minuscirlce,
  },
  {
    time: "22/04/2023, 8:22 am",
    type: "Added",
    label: "a Legislature",
    link: "Alaska",
    iconBackgroundColor: "#E4F9ED",
    icon: addcircle,
  },
  {
    time: "21/04/2023, 8:19 am",
    type: "Logged in",
    label: "to your account",
    link: "",
    iconBackgroundColor: "#E4F9ED",
    icon: login,
  },
  {
    time: "20/04/2023, 7:32 am",
    type: "Logged out",
    label: "of your account",
    link: "",
    iconBackgroundColor: "#FFEAF1",
    icon: logout,
  },
  {
    time: "4w ago",
    type: "Removed",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#FFEAF1",
    icon: archiveminus,
  },
  {
    time: "5w ago",
    type: "Added",
    label: "a bill",
    link: "Secure the Border Act of 2023",
    iconBackgroundColor: "#E9F3FF",
    icon: archiveadd,
  },
  {
    time: "6w ago",
    type: "Edited",
    label: "your Profile",
    link: "",
    iconBackgroundColor: "#E1F8FD",
    icon: useredit,
  },
  {
    time: "7w ago",
    type: "Removed",
    label: "a Legislature",
    link: "Texas",
    iconBackgroundColor: "#FFEAF1",
    icon: minuscirlce,
  },
  {
    time: "2 months ago",
    type: "Added",
    label: "a Legislature",
    link: "Alaska",
    iconBackgroundColor: "#E4F9ED",
    icon: addcircle,
  },
  {
    time: "3 months ago",
    type: "Logged in",
    label: "to your account",
    link: "",
    iconBackgroundColor: "#E4F9ED",
    icon: login,
  },
  {
    time: "4 months ago",
    type: "Logged out",
    label: "of your account",
    link: "",
    iconBackgroundColor: "#FFEAF1",
    icon: logout,
  },
];
