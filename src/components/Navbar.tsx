"use client";
import React from "react";
import useStore from "../store";

const Navbar = () => {
  const { isLoading } = useStore();

  return (
    <div className="w-full h-[100px] flex justify-center items-center">
      <span>{isLoading ? "Navbar  Loading... " : "Navbar"}</span>
    </div>
  );
};

export default Navbar;
