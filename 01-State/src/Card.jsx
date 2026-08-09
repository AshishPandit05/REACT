import React from "react";

const Card = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <h1>{item.class}</h1>
      <h1>{item.roll}</h1>
    </div>
  );
};

export default Card;
