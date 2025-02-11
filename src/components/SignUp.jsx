import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CgMail, CgSpinner } from "react-icons/cg";
import { MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getAuth,
} from "firebase/auth";
import { app } from "./firebase.js"; // Ensure you are importing your Firebase config properly
const auth = getAuth(app);

// import { auth } from "./firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import OTPInput from "otp-input-react";

const SignUp = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // to show the input based on the condition
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [showPasswordInput, setShowPasswordInput] = useState(true);
  const [user,setUser] = useState(null);  
  const navigate = useNavigate();

  // const handleAuth = async () => {
  //   console.log(phone);
  //   console.log(otp);
  //   // onSignInSubmit();
  //   onSignup();
  //   // try {
  //   //   setLoading(true);
  //   //   if (isSignup) {
  //   //     await createUserWithEmailAndPassword(auth, email, password);
  //   //     toast.success("Account created successfully!");
  //   //   } else {
  //   //     await signInWithEmailAndPassword(auth, email, password);
  //   //     toast.success("Logged in successfully!");
  //   //   }
  //   //   navigate("/");
  //   // } catch (error) {
  //   //   console.error(error);
  //   //   toast.error(error.message);
  //   // } finally {
  //   //   setLoading(false);
    // }
  // };
  const handleAuth = async () => {
    setLoading(true);
    try {
      if (showPhoneInput && !showOtpInput) {
        await onSignup(); // Send OTP
      } else if (showOtpInput) {
        await onOTPVerify(); // Verify OTP
      } else if (showEmailInput && showPasswordInput) {
        if (isSignup) {
          await createUserWithEmailAndPassword(auth, email, password);
          toast.success("Account created successfully!");
        } else {
          await signInWithEmailAndPassword(auth, email, password);
          toast.success("Logged in successfully!");
        }
        navigate("/");
      } else {
        throw new Error("Invalid authentication method.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };
  
  

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Google sign in failed");
    }
  };

  // const setupRecaptcha = () => {
  //   if (!window.recaptchaVerifier) {
  //     const auth = getAuth();
  //     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  //       size: 'invisible',
  //       callback: () => onSignup(),
  //       'expired-callback': () => {
  //         toast.error("reCAPTCHA expired. Please try again.");
  //       }
  //     }, auth);
  //   }
  // };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA verified!", response);
        },
        "expired-callback": () => {
          toast.error("reCAPTCHA expired. Please try again.");
        },
      });
    }
  };
  

  // const onSignup = async () => {
  //   if (!phone) {
  //     toast.error("Please enter phone number");
  //     return;
  //   }
  
  //   try {
  //     setLoading(true);
  //     setupRecaptcha();
  //     const formatPhone = phone.startsWith("+") ? phone : `+${phone}`;
  //     const appVerifier = window.recaptchaVerifier;
  
  //     const confirmationResult = await signInWithPhoneNumber(auth, formatPhone, appVerifier);
  //     window.confirmationResult = confirmationResult;
  //     setShowOtpInput(true);
  //     toast.success("OTP sent successfully!");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(error.message || "Error sending OTP");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSignup = async () => {
    if (!phone) {
      toast.error("Please enter a valid phone number");
      return;
    }
  
    try {
      setupRecaptcha(); // Ensure recaptcha is set up before sending OTP
      const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`; // Ensure correct format
      const appVerifier = window.recaptchaVerifier;
  
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      window.confirmationResult = confirmationResult;
      
      setShowOtpInput(true); // Show OTP input after OTP is sent
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(error.message || "Failed to send OTP. Check the phone number format.");
    }
  };
  
  
  

  const onOTPVerify = async () => {
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
  
    try {
      setLoading(true);
      const result = await window.confirmationResult.confirm(otp);
      setUser(result.user);
      toast.success("Phone number verified!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="h-auto sm:p-20 w-full flex justify-center">
      <div id="recaptcha-container"></div>
      {user ? (
        <>
          <h2>Login Successfull</h2>
        </>
      ) : null}
      <div
        className="flex flex-col sm:flex-row justify-around items-center w-full max-w-5xl pl-10 rounded-2xl shadow-lg"
        style={{
          backgroundImage: "url('/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full sm:w-1/2 flex flex-col items-center bg-transparent p-6 rounded-lg pb-10 pt-10">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {isSignup ? "Sign Up" : "Sign In"}
          </h2>

          {/*  Email Input */}
          {showEmailInput && (
            <>
              {" "}
              <label htmlFor="email" className="w-full text-white mt-4 mb-2">
                Email
              </label>
              <div className="flex items-center border-2 border-gray-100 p-2 rounded-xl w-full bg-transparent">
                <CgMail size={23} className="text-white" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  className="w-full bg-transparent text-white outline-none pl-3 placeholder-white"
                />
              </div>
            </>
          )}

          {showPasswordInput && (
            <>
              <label htmlFor="password" className="w-full text-white mt-4 mb-2">
                Password
              </label>
              <div className="flex items-center border-2 border-gray-100 p-2 rounded-xl w-full bg-transparent">
                <MdLock size={23} className="text-white" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"}
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
            </>
          )}

          {showPhoneInput && (
            <>
              <label htmlFor="phone" className="w-full text-white mt-4 mb-2">
                Phone
              </label>
              <div className="flex items-center border-2 border-gray-100 p-2 rounded-xl w-full bg-transparent">
                <IoMdCall size={23} className="text-white" />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  type="number"
                  className="w-full bg-transparent text-white outline-none pl-3 placeholder-white"
                />
              </div>
            </>
          )}

          {showOtpInput && (
            <>
              <div
                className="bg-white text-emi-500 p-4 rounded-xl w-
          fit mt-4 flex items-center justify-between mx-auto"
              >
                <BsFillShieldLockFill size={23} />
              </div>

              <label htmlFor="otl" className="w-full text-white mt-4 mb-2">
                OTP
              </label>

              <OTPInput
              id="send-otp-button"
                OTPLength={6}
                value={otp}
                onChange={setOtp}
                OtpType="number"
                disabled={false}
                autoFocus
                className="flex justify-between gap-2 text-white font-xl font-bold"
                renderInput={(props) => <input {...props} />}
              ></OTPInput>
            </>
          )}

          <button
            className="flex items-center justify-center bg-violet-900 text-white font-semibold text-base py-3 mt-6 w-full rounded-xl hover:bg-violet-800"
            onClick={handleAuth}
          >
            {loading && <CgSpinner size={20} className="mr-2 animate-spin" />}
            <span className="mr-3">{isSignup ? "Sign Up" : "Sign In"}</span>
            <FaArrowRight size={17} />
          </button>

          <div className="flex items-center w-full my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-white">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full cursor-pointer flex items-center justify-center border border-white text-white font-semibold rounded-xl text-base py-3 mt-2 hover:bg-white hover:text-black" onClick={()=> {
            if(showPhoneInput){
              setShowPhoneInput(false);
              setShowEmailInput(true);
             setShowPasswordInput(true);
            }else{
              setShowEmailInput(false);
              setShowPhoneInput(true);
              setShowPasswordInput(false);
            }
          }}>
            <IoMdCall size={23} className="mr-2" /> Sign in with { showPhoneInput ? "Email":"Phone" }
          </button>

          <button
            className="w-full cursor-pointer flex items-center justify-center border border-white text-white font-semibold rounded-xl text-base py-3 mt-2 hover:bg-white hover:text-black"
            onClick={googleSignIn}
          >
            <FcGoogle size={23} className="mr-2" /> Sign in with Google
          </button>

          <div
            className="mt-4 text-sm text-white cursor-pointer"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Already" : "Don't"} have an account?{" "}
            <span className="font-semibold hover:underline">
              {isSignup ? "Sign In" : "Sign Up"}
            </span>
          </div>
        </div>

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
    </div>
  );
};

export default SignUp;
