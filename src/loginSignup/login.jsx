import React from "react";

const Login = () => {
  return (
    <>
      <div className="container-fluid login">
        <div className="row text-center">
          <div className="col-md-4 col-12 border-dark bg-light mx-auto pb-4 pt-4 shadow ">
            <h1 className="text-primary mb-4">Login</h1>

            <div className="mb-3 row">
              <label for="email" class="col-sm-2 col-form-label text-left">
                Email
              </label>
              <div className="col-sm-10">
                <input type="text" class="form-control" id="email" />
              </div>
            </div>

            <div className="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            <div className="mx-auto col-md-12 col-12 mt-10 mx-auto text-center">
              <button type="button" className="btn btn-primary col-4 mt-4">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
