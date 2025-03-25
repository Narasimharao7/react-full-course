import React, { useState } from "react";

const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
    // console.log("form submitted");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="text"
            name="name"
            id="name"
            value={firstName}
            placeholder="Enter your Name"
            onChange={onChangeFirstName}
          />
        </div>
        <div className="form-container">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your Email"
            onChange={onChangeEmail}
          />
        </div>
        <div className="form-container">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your Password"
            onChange={onChangePassword}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Index;
