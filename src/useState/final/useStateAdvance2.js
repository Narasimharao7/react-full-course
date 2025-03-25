import React, { useState } from "react";

function UseStateAdvance() {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "Emma",
      lastName: "Waston",
      age: 27,
    },
    {
      id: 2,
      firstName: "Krishna",
      lastName: "Kumar",
      age: 25,
    },
    {
      id: 3,
      firstName: "Raja",
      lastName: "Rani",
      age: 29,
    },
  ]);

  const onDeleteMe = (comingid) => {
    // console.log(id);
    const filterData = data.filter((eachItem) => {
      return eachItem.id !== comingid;
    });
    setData(filterData);
  };
  return (
    <div>
      <ul>
        {data.map((eachItem) => {
          const { id, firstName, lastName, age } = eachItem;
          return (
            <li key={id}>
              <div>
                <p>My First Name is {firstName}</p>
                <p>My Last Name is {lastName}</p>
                <p>My Age is {age}</p>
                <button onClick={() => onDeleteMe(id)}>Delete Me</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseStateAdvance;
