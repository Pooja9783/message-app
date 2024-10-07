import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  const { loading, signup } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="login-container w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-500">
          Sign Up <span className="text-blue-500">....</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className="flex items-center">
            <label className="label p-2">
              <span className="text-base label-text">Male</span>
            </label>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              checked={inputs.gender === "male"}
              onChange={() => handleCheckBox("male")}
            />
            <label className="label p-2">
              <span className="text-base label-text">female</span>
            </label>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              checked={inputs.gender === "female"}
              onChange={() => handleCheckBox("female")}
            />
          </div>

          <Link
            to="/login"
            className="link link-neutral mt-2 inline-block text-sm hover:underline hover:text-blue-600"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
