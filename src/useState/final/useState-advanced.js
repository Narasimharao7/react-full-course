import React, { useState } from "react";

function UseStateAdvance() {
  //   const initialObj = {
  //     firstName: "Emma",
  //     lastName: "Waston",
  //     age: 27,
  //   };

  const [data, setData] = useState({
    firstName: "Emma",
    lastName: "Waston",
    age: 27,
  });

  const changeFirstName = () => {
    setData({ ...data, firstName: "Krishna" });
  };

  const changeLastName = () => {
    setData({
      ...data,
      lastName: "Kumar",
    });
  };

  return (
    <div>
      <p>My First Name is {data.firstName}</p>
      <button onClick={changeFirstName}>Change First Name</button>
      <p>My Last Name is {data.lastName}</p>
      <button onClick={changeLastName}>Change Last Name</button>
      <p>age {data.age}</p>
    </div>
  );
}

export default UseStateAdvance;
