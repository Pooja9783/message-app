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
    <div className="flex flex-col items-center justify-center md:w-[35rem] lg:w-[25rem] min-w-80  mx-auto">
      <div
        className="login-container w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop filter backdrop-blur-lg bg-opacity-0"
        
      >
        <h1
          className="text-3xl font-semibold text-center"
          style={{ color: "rgb(229 129 186)" }}
        >
          Gossip
          <span className="" style={{ color: "rgb(232 190 215)" }}>
            Box
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span
                className="text-base label-text"
                style={{ color: "rgb(232 190 215)" }}
              >
                Full Name
              </span>
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
              <span
                className="text-base label-text"
                style={{ color: "rgb(232 190 215)" }}
              >
                Username
              </span>
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
              <span
                className="text-base label-text"
                style={{ color: "rgb(232 190 215)" }}
              >
                Password
              </span>
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
              <span
                className="text-base label-text"
                style={{ color: "rgb(232 190 215)" }}
              >
                Confirm Password
              </span>
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
              <span
                className="text-base label-text"
                style={{ color: "rgb(232 190 215)" }}
              >
                Male
              </span>
            </label>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              style={{ borderColor: "rgb(232 190 215)" }}
              checked={inputs.gender === "male"}
              onChange={() => handleCheckBox("male")}
            />
            <label className="label p-2">
              <span
                className="text-base label-text"
                style={{ color: "rgb(232 190 215)" }}
              >
                female
              </span>
            </label>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              style={{ borderColor: "rgb(232 190 215)" }}
              checked={inputs.gender === "female"}
              onChange={() => handleCheckBox("female")}
            />
          </div>

          <Link
            to="/login"
            className="link link-neutral mt-2 inline-block text-sm hover:underline hover:text-blue-600"
            style={{ color: "rgb(232 190 215)" }}
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
