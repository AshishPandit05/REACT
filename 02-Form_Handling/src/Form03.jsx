import React from "react";

const Form03 = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleOnChange = (e) => {
    setName({ ...form, [e.target.name]: e.target.value });
    console.log("name -" + name);
  };

  return (
    //   Optimised -->

    <div>
      <input
        name="name"
        onChange={handleOnChange}
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        onChange={handleOnChange}
        type="email"
        placeholder="Email"
      />

      <input
        name="password"
        onChange={handleOnChange}
        type="password"
        placeholder="Password"
      />

      <h3>Name is : {name}</h3>
      <h3>Email is : {email}</h3>
      <h3>Password is : {password}</h3>
    </div>
  );
};

export default Form03;
