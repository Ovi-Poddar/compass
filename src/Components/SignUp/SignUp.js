import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    user_name: "",
    user_email: "",
    password: "",
    cpassword: "",
  });
  // let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const { user_name, user_email, password, cpassword } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: user_name,
        user_email: user_email,
        password: password
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div class="container signup-body">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div class="card-img-left d-none d-md-flex">
                {/* <!-- Background image for card set in CSS! --> */}
              </div>
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-bold signup-h3">
                  Register
                </h5>
                <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputUsername"
                      value={credentials.user_name}
                      onChange={onChange}
                      name="user_name"
                      placeholder="myusername"
                      required
                      autofocus
                    />
                    <label for="floatingInputUsername">Username</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputEmail"
                      value={credentials.user_email}
                      onChange={onChange}
                      name="user_email"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputEmail">Email address</label>
                  </div>

                  <hr />

                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      minLength={5}
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPasswordConfirm"
                      value={credentials.cpassword}
                      onChange={onChange}
                      name="cpassword"
                      minLength={5}
                      placeholder="Confirm Password"
                    />
                    <label for="floatingPasswordConfirm">
                      Confirm Password
                    </label>
                  </div>

                  <div class="d-grid mb-2">
                    <button
                      class="btn btn-lg btn-signup fw-bold text-uppercase text-white"
                      style={{ backgroundColor: "#E00707" }}
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  <Link class="d-block text-center mt-2 small" to="/login">
                    Have an account? Sign In
                  </Link>

                  <hr class="my-4" />

                  {/* <div class="d-grid mb-2">
                    <button
                      class="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i class="fab fa-google me-2"></i> Sign up with Google
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
