import React from "react";
import "./globals.css";
import Api from "./apis/Api";
import ChangeTitle from "./state/ChangeTitle";
import Counter from "./state/Counter";
import Accordians from "./Accordians";

const App = () => {
  return (
    <>
      {/* <Api /> */}
      {/* <ChangeTitle />
      <Counter /> */}
      <Accordians />
    </>
  );
};

export default App;
