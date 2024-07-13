import React, { useState } from "react";
import Login from "./loginSignup/login";
import SignUp from "./loginSignup/signUp";
function App() {
  let [show, setShow] = useState();

  let btnLogin = () => {
    setShow("L");
    console.log(show);
  };
  let btnSignUp = () => {
    setShow("S");
    console.log(show);
  };

  return (
    <>
      <div className="d-flex justify-content-around col-md-3 mx-auto mb-4">
        <button
          onClick={() => {
            btnLogin();
          }}
          type="button"
          className="btn btn-primary col-4 mt-4"
        >
          Login
        </button>
        <button
          onClick={() => {
            btnSignUp();
          }}
          type="button"
          className="btn btn-primary col-4 mt-4"
        >
          SignUp
        </button>
      </div>
      {show === "L" ? <Login /> : show === "S" ? <SignUp /> : null}
    </>
  );
}

export default App;
