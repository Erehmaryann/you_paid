import React from "react";
import "./SignUp.scss";

function SignUp() {
  return (
    <div className='sign-up'>
      <div className='dual-pg d-sm-flex  w-100'>
        <div
          className='first-half'
          style={{
            width: "30%",
            border: "2px solid red",
          }}
        ></div>
        <div
          className='second-half'
          style={{
            width: "70%",
            border: "2px solid blue",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SignUp;
