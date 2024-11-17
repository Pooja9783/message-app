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
            className="w-6 h-6 text-[#e7e0e0]  cursor-pointer"
            onClick={logout}
            style={{ strokeWidth: 1}}         />
        </>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}
