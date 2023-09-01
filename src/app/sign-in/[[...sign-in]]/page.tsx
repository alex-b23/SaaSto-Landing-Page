import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-[150px]">
      <div className="gradient-blue z-0"></div>
      <SignIn />
      <div className="gradient-purble z-0"></div>
    </main>
  );
};

export default SignInPage;
