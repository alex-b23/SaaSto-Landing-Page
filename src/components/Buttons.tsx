import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

const Buttons = () => {
  return (
    <div>
      {/* NAVBAR BUTTONS */}
      <div className="flex-row items-center gap-5 flex">
        <Link href="/sign-in" className="text-color font-semibold">
          Login
        </Link>
        <Link
          href="/sign-up"
          className="border border-[#8976FD] text-color rounded-xl px-6 py-3"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
