import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { MdLock } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const EmailVerification = ({email}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-xl font-semibold mb-2">
          A verification link has been sent to{" "}
          <span className="text-sm ">
            {email}
          </span>
        </div>
        <div className="text-cl mb-2 ">
          Please click on the link that has just been sent to your email account
          to verify your email before you sign in.
        </div>
        <div className="bg-blue-900 pr-26 pl-26 pt-2 pb-2 text-white rounded-xl mt-2 mb-2 ">
          Sign In Now
        </div>
        <div>Resend</div>
      </div>
    </>
  );
};

const SignUp = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [Continue, setContinue] = useState(true);
  return (
    <div className="h-auto sm:p-20 w-full flex justify-center ">
      {Continue ? (
        <div
          className="flex flex-col sm:flex-row justify-around items-center w-full max-w-5xl pl-10 rounded-2xl shadow-lg"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            cursor: "grab",
          }}
        >
          {/* Sign Up Form */}
          <div className="w-full sm:w-1/2 flex flex-col items-center bg-transparent p-6 rounded-lg pb-10 pt-10">
            <h2 className="text-3xl font-bold mb-6 text-white">
              {isSignup ? "Sign Up" : "Sign In"}
            </h2>

            {/* Email Input */}
            <label htmlFor="email" className="w-full text-white mb-2">
              E-mail
            </label>
            <div className="flex items-center border-2 border-gray-100 p-2 rounded-xl w-full bg-transparent">
              <CgMail size={25} className="text-white" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ash@gmail.com"
                type="email"
                name="email"
                id="email"
                className="w-full bg-transparent text-white outline-none pl-3 placeholder-white"
              />
            </div>

            {/* Password Input */}
            <label htmlFor="password" className="w-full text-white mt-4 mb-2">
              Set Password
            </label>
            <div className="flex items-center border-2 border-gray-100 p-2 rounded-xl w-full bg-transparent">
              <MdLock size={23} className="text-white" />
              <input
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"} // Toggle input type
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-white outline-none pl-3 placeholder-white"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <FaEyeSlash size={23} className="text-white" />
                ) : (
                  <FaRegEye size={23} className="text-white" />
                )}
              </div>
            </div>

            {/* Continue Button */}
            <button
              className="flex items-center justify-center bg-violet-900 text-white font-semibold text-base py-3 mt-6 w-full rounded-xl hover:bg-violet-800 cursor-pointer"
              onClick={() => setContinue(!Continue)}
            >
              <span className="mr-3">Continue</span>
              <FaArrowRight size={17} />
            </button>

            {/* Forgot Password */}
            <div className="text-sm mt-3 cursor-pointer text-white hover:underline">
              Forgot your password?
            </div>

            {/* Divider */}
            <div className="flex items-center w-full my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-3 text-sm text-white">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Other Sign In Options */}
            <button className="w-full flex items-center justify-center border border-white text-white font-semibold rounded-xl text-base py-3 mt-2 hover:bg-white hover:text-black">
              <IoMdCall size={23} className="mr-2" /> Sign in with Phone
            </button>
            <button className="w-full flex items-center justify-center border border-white text-white font-semibold rounded-xl text-base py-3 mt-2 hover:bg-white hover:text-black">
              <FcGoogle size={23} className="mr-2" /> Sign in with Google
            </button>

            {/* Already have an account */}
            <div
              className="mt-4 text-sm text-white"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Already " : `Doesn't`} have an account?{" "}
              <span className="cursor-pointer font-semibold hover:underline">
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2 h-full bg-white rounded-2xl">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <img
                src="StartJobHunt.png"
                alt="Start Job Hunt"
                className="w-3/4 h-full rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      ) : (
        <EmailVerification email={email}/>
      )}
    </div>
  );
};

export default SignUp;
