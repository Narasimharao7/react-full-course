import React, { useState } from "react";

const Index = () => {
  const [showData, setShowData] = useState(false);
  const onClickShow = () => {
    setShowData(!showData);
  };
  return (
    <div>
      <button onClick={onClickShow}>
        {showData ? <span>Hide</span> : <span>Show</span>}
      </button>
      {showData && (
        <p className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      )}
    </div>
  );
};

export default Index;
