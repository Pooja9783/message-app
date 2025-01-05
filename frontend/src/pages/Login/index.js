import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs.username, inputs.password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-80 md:w-[35rem] lg:w-[25rem] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop filter backdrop-blur-lg bg-opacity-0">
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
                Username
              </span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link
            to="/signup"
            className="link link-neutral mt-2 inline-block text-sm hover:underline hover:text-blue-600"
            style={{ color: "rgb(232 190 215)" }}
          >
            Don't have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
