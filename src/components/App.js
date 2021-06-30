import React from "react";
import Header from "./Header";

export default function App(){
  const name = "Shirt";
  const name2 = "Pants";
  return (
    <>
      <Header />
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </>
  );
}

