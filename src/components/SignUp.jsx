import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CgMail, CgSpinner } from "react-icons/cg";
import { MdLock } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import OTPInput from "otp-input-react";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  sendEmailVerification,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "./firebase.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [Continue, setContinue] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  // to show the input based on the condition
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [showPasswordInput, setShowPasswordInput] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth(app);

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // await user.reload(); // 🔄 Force refresh user data
        if (user.emailVerified) {
          toast.success("Email verified successfully!");
          // navigate("/"); // 🔄 Navigate after verification
        }
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleAuth = async () => {
    if (showPhoneInput && !showOtpInput) {
      if(!phone || phone.length < 10) { 
        toast.error("Please enter a valid phone number");
        return;
      }
      await onSignup(); // Send OTP
    } else if (showOtpInput) {
      await onOTPVerify(); // Verify OTP
    }  else if (showEmailInput == true && showPasswordInput == true) {
      if (!email || !password) {
        toast.error("Please enter both email and password");
        return;
      }

      setLoading(true);
      try {
        if (isSignup) {
          // Create user account
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;

          // Send verification email
          await sendEmailVerification(user, {
            url: window.location.origin, // Redirect URL after verification
          });

          toast.success(
            "Verification email sent! Please check your inbox and spam folder."
          );
          toast.info(
            "After verifying your email, you can sign in with your credentials."
          );

          // Sign out the user - they need to verify email first
          await auth.signOut();
        } else {
          // For sign in
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;

          if (!user.emailVerified) {
            toast.error("Please verify your email before signing in.");
            // Optionally resend verification email
            await sendEmailVerification(user, {
              url: window.location.origin,
            });
            toast.info(
              "Verification email sent again. Please check your inbox."
            );
            await auth.signOut();
            return;
          }

          toast.success("Logged in successfully!");
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        switch (error.code) {
          case "auth/email-already-in-use":
            toast.error("Email already registered. Please sign in instead.");
            break;
          case "auth/invalid-email":
            toast.error("Invalid email address.");
            break;
          case "auth/weak-password":
            toast.error("Password should be at least 6 characters.");
            break;
          case "auth/user-not-found":
          case "auth/wrong-password":
            toast.error("Invalid email or password.");
            break;
          default:
            toast.error(error.message || "Authentication failed");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("reCAPTCHA verified!");
          },
          "expired-callback": () => {
            toast.error("reCAPTCHA expired. Please try again.");
          },
        }
      );
    }
  };

  const onSignup = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      setupRecaptcha();
      console.log(phone)
      const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`; // Default to India code
      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        appVerifier
      );
      window.confirmationResult = confirmationResult;

      setShowOtpInput(true);
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(
        error.message || "Failed to send OTP. Check phone number format."
      );
    }
  };

  const onOTPVerify = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      const result = await window.confirmationResult.confirm(otp);
      setUser(result.user);
      toast.success("Phone number verified!");
      navigate("/");
    } catch (error) {
      console.error("Invalid OTP:", error);
      toast.error("Incorrect OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        toast.success("Logged in successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Google sign in failed");
    }
  };

  return (
    <div className="h-auto sm:p-20 w-full flex justify-center">
      <div id="recaptcha-container"></div>
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
          {/* {showPhoneInput && (
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
          )} */}

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

            {/* Button to select what to choose phone of email */}
          {/* <button
            className="w-full cursor-pointer flex items-center justify-center border border-white text-white font-semibold rounded-xl text-base py-3 mt-2 hover:bg-white hover:text-black"
            onClick={() => {
              if (showPhoneInput) {
                setShowPhoneInput(false);
                setShowEmailInput(true);
                setShowPasswordInput(true);
              } else {
                setShowEmailInput(false);
                setShowPhoneInput(true);
                setShowPasswordInput(false);
              }
            }}
          >
            <IoMdCall size={23} className="mr-2" /> Sign in with{" "}
            {showPhoneInput ? "Email" : "Phone"}
          </button> */}
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
