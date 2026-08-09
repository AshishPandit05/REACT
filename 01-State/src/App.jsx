import React from "react";
import Card from "./Card";

const App = () => {
  let arr = [
    {
      name: "Rohan",
      class: "10th",
      roll: 29,
    },
    {
      name: "Sohan",
      class: "10th",
      roll: 33,
    },
    {
      name: "Ram",
      class: "10th",
      roll: 22,
    },
  ];

  return (
    <div>
      {arr.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default App;
