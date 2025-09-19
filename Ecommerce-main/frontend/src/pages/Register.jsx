import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/vcart logo.png'; 
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../utils/firebase';
import { AuthDataContext } from '../context/AuthContext';
import { UserDataContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Loading from '../../../admin/src/components/Loading';

const Register = () => {
  let { serverUrl } = useContext(AuthDataContext);
  let { getCurrentUser } = useContext(UserDataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // separate loaders
  const [registerLoading, setRegisterLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setRegisterLoading(true);
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/register",
        { name, email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      toast.success("Registered Successfully");
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.error(error.message);
      toast.error("Register Failed");
    } finally {
      setRegisterLoading(false);
    }
  };

  const googleSignup = async () => {
    setGoogleLoading(true);
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      toast.success("Registered Successfully");
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.error(error.message);
      toast.error("Register Failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-br from-[#141414] via-[#0c2025] to-[#1c3c47] text-white flex flex-col items-center justify-start">
      
      {/* Logo Header */}
      <div
        className="w-full h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[40px] h-[40px]" src={Logo} alt="logo" />
        <h1 className="text-[20px] font-bold">UrbanPrime</h1>
      </div>

      {/* Title */}
      <div className="w-full h-[100px] flex flex-col items-center justify-center gap-[10px]">
        <span className="text-[30px] font-bold">Create Your Account</span>
        <span className="text-[14px] text-gray-300">
          Join UrbanPrime and start shopping today
        </span>
      </div>

      {/* Form Card */}
      <div className="max-w-[500px] w-[90%] h-auto shadow-xl bg-[#ffffff0a] border border-[#ffffff3d] rounded-lg flex items-center justify-center flex-col py-8 px-6 backdrop-blur-md">
        <form
          onSubmit={handleSignup}
          className="w-full flex flex-col items-center gap-[20px]"
        >
          {/* Google Signup */}
          <div
            onClick={googleSignup}
            className="w-full h-[50px] rounded-lg flex items-center justify-center gap-5 cursor-pointer bg-[#42656cae] hover:bg-[#26474da2] transition-all duration-300"
          >
            <img
              className="w-8"
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="google"
            />
            {googleLoading ? <Loading /> : "Sign up with Google"}
          </div>

          {/* Divider */}
          <div className="w-full flex items-center justify-center gap-[10px] text-gray-400">
            <div className="w-[40%] h-[1px] bg-[#96969635]" />
            OR
            <div className="w-[40%] h-[1px] bg-[#96969635]" />
          </div>

          {/* Inputs */}
          <div className="w-full flex flex-col gap-[15px] relative">
            <input
              type="text"
              className="w-full h-[50px] border-2 border-[#96969635] rounded-lg shadow-md bg-transparent placeholder-[#ffffffb3] px-[20px] font-medium focus:outline-none focus:border-red-500 transition-all"
              placeholder="Username"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[#96969635] rounded-lg shadow-md bg-transparent placeholder-[#ffffffb3] px-[20px] font-medium focus:outline-none focus:border-red-500 transition-all"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-[50px] border-2 border-[#96969635] rounded-lg shadow-md bg-transparent placeholder-[#ffffffb3] px-[20px] font-medium focus:outline-none focus:border-red-500 transition-all"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {showPassword ? (
                <IoEyeOffOutline
                  className="w-[22px] h-[22px] text-gray-300 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IoEyeOutline
                  className="w-[22px] h-[22px] text-gray-300 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={registerLoading}
            className="w-full h-[50px] rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-60 flex items-center justify-center mt-[10px] text-[18px] font-semibold transition-all duration-300"
          >
            {registerLoading ? <Loading /> : "Register"}
          </button>

          {/* Already have account */}
          <p className="text-gray-300 text-sm mt-3">
            Already have an account?{" "}
            <span
              className="text-red-400 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
