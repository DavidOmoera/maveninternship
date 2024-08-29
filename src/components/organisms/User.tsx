import React from "react";
//import { Pill } from "components/molecules/Pill";
// import { watchedBills } from "constants/common";

type TUserProps = { 
    id: number;
  };

export function User({
  // insert Typescript User properties
  id }: TUserProps) {
  return (
    <div>{id}</div>
  );
}
