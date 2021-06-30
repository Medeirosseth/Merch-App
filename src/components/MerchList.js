import React from "react";
import Merch from "./Merch";

const masterMerchList = [
  {
    merchType:"Jacket",
    merchDescription: "80's blue jean jacket *hole on left arm",
    issue: "Firebase wont save record. Halp"
  },
  {
    merchType:"Pants",
    merchDescription: "Levis 510",
    issue: "Firebase wont save record. Halp"
  },
  {
    merchType:"Hat",
    merchDescription: "Ribbed beanie",
    issue: "Firebase wont save record. Halp"
  },
]


export default function MerchList() {
  return (
    <>
    <hr/>
      {masterMerchList.map((merch, index) =>
        <Merch merchType={merch.merchType}
          merchDescription={merch.merchDescription}
          issues={merch.issue}
          key={index}/>
      )}
    </>
  )
}