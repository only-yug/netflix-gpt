import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/25f808aa-cecb-4753-8541-9a79f40c18ae/web/IN-en-20251006-TRIFECTA-perspective_507f47be-8780-4697-92cb-0f6c78177b6e_medium.jpg"
          alt="background Img"
          className="absolute inset-0 w-full h-full object-cover -z-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-30"></div>

        <div className="relative flex flex-col items-center justify-center h-screen text-white">
          <div className="rounded bg-[rgb(0,0,0,.5)] w-80 h-1/2 p-6">
            <p className="text-3xl font-bold p-5">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </p>
            <div className="flex flex-col  justify-center">
              {!isSignInForm ? (
                <input
                  type="text"
                  placeholder="Name"
                  className="m-2 p-2 text-black rounded bg-[rgb(43,43,43)]"
                />
              ) : (
                ""
              )}
              <input
                type="text"
                placeholder="Email"
                className="m-2 p-2 text-black rounded bg-[rgb(43,43,43)]"
              />
              <input
                type="password"
                placeholder="Password"
                className="m-2 p-2 text-black rounded  bg-[rgb(43,43,43)]"
              />

              <button className="m-2 p-2 bg-red-600 hover:bg-red-700 rounded">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>

              {isSignInForm ? (
                <p className="mt-4">
                  New to Netflix? &nbsp;
                  <p
                    onClick={toggleForm}
                    className="text-blue-400 hover:underline inline cursor-pointer"
                  >
                    Sign up now
                  </p>
                </p>
              ) : (
                <p className="mt-4">
                  Already a Member? &nbsp;
                  <p
                    onClick={toggleForm}
                    className="text-blue-400 hover:underline inline cursor-pointer"
                  >
                    Sign In
                  </p>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
