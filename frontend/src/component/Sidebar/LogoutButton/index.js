import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../../hooks/useLogout";

export default function LoginButton() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto ">
      {!loading ? (
        <>
          <CiLogout
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={logout}
            style={{color:'rgb(35 2 21)'}}

          />
        </>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}
