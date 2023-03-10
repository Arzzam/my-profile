import React from "react";
import Left from "./Components/Left Section/Left";
import Right from "./Components/Right Section/Right";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const App = () => {
  return (
    <div> 
    {/* className="grid grid-rows-none md:grid-cols-2 md:grid md:divide-x-2" className="after:content-[''] after:table after:clear-both" */}
      <Left />
      <Right />
    </div>
  );
};

export default App;
