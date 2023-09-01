import React from "react";
import { SignUp } from "@clerk/nextjs/app-beta";

const SignUpPage = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-[150px]">
      <div className="gradient-blue z-0"></div>
      <SignUp />
      <div className="gradient-purble z-0"></div>
    </main>
  );
};

export default SignUpPage;
