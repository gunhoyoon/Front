import React from "react";
import Input from "../components/common/Input";

const test = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div>test</div>;<Input type="password" onChange={onChange}></Input>;
    </div>
  );
};

export default test;
