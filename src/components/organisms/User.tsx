import React from "react";
//import { Pill } from "components/molecules/Pill";
// import { watchedBills } from "constants/common";

type TUserProps = { 
    id: number;
    email: string;
    userRegistration: boolean;
    receipt: boolean;
    verification: boolean;
    token: number;
    googleID: string;
    outlookID: string;
    sessionActivity: boolean;
    password: string;
    stripe: number;
    organizationRegistration: boolean;
  };

export function User({
  // insert Typescript User properties
  id }: TUserProps) {
  return (
    <div>{id}</div>
  );
}
