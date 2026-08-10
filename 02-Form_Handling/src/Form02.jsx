import React, { useState } from "react";

const Form01 = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    //    better -->

    <div>
      <input
        onChange={(e) => {
          setName((name = e.target.value));
          console.log("name -" + name);
        }}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setEmail((email = e.target.value));
          console.log("email -" + email);
        }}
        type="email"
        placeholder="Email"
      />

      <input
        onChange={(e) => {
          setPassword((password = e.target.value));
          console.log("password -" + password);
        }}
        type="password"
        placeholder="Password"
      />

      <h3>Name is : {name}</h3>
      <h3>Email is : {email}</h3>
      <h3>Password is : {password}</h3>
    </div>
  );
};

export default Form01;
