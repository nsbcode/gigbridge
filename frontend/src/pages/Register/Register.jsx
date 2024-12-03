import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock, FiEyeOff, FiUser, FiFacebook } from "react-icons/fi";
import { BiLogoApple, BiLogoFacebook, BiLogoGoogle } from "react-icons/bi";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <main className="h-lvh flex flex-col justify-center items-center">
      <Navbar/>
      <div className="container flex justify-center items-center h-full p-4">
        <div className="bg-black/5 p-2 rounded-xl">
          <div className="bg-white rounded-xl grid gap-6 p-6 ">
            <div className="flex flex-col items-center justify-center">
              <div className="border h-10 w-10 rounded-lg inline-flex m-5 justify-center items-center border-black/15">
                <span className="text-2xl font-bold">G</span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tighter">
                Sign up to continue
              </h1>
              <p className="text-lg text-center">
                Please sign up to start your gig work application
              </p>
            </div>

            <form action="" className="grid gap-3">
              <div className="flex items-center px-2 py-2 bg-black/5 rounded-lg">
                <FiUser />
                <input
                  type="text"
                  className="bg-transparent pl-2 outline-none w-full"
                  placeholder="Username"
                />
              </div>

              <div className="flex items-center px-2 py-2 bg-black/5 rounded-lg">
                <MdOutlineAlternateEmail />
                <input
                  type="text"
                  className="bg-transparent pl-2 outline-none w-full select-none"
                  placeholder="Email"
                
                />
              </div>

              <div className="flex items-center px-2 py-2 bg-black/5 rounded-lg">
                <FiLock />
                <input
                  type="text"
                  className="bg-transparent pl-2 outline-none w-full"
                  placeholder="Password"
                />
                <div>
                  <FiEyeOff />
                </div>
              </div>

              <button className="bg-black rounded-lg py-2 text-white">
                Sign in
              </button>

              <p className="text-center">Or continue with</p>

              <div className="flex flex-nowrap gap-2">
                <div className="border w-full flex items-center justify-center py-2 rounded-lg">
                  <BiLogoGoogle />
                </div>
                <div className="border w-full flex items-center justify-center py-2 rounded-lg">
                  <BiLogoFacebook />
                </div>
                <div className="border w-full flex items-center justify-center py-2 rounded-lg">
                  <BiLogoApple />
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-2">
            <p>
              have an account? <a href="#">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
