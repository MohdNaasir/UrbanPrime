import React, { useContext, useState } from 'react'
import logo from "../assets/vcart logo.png"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthDataContext } from '../context/AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AdminDataContext } from '../context/AdminContext';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { serverUrl } = useContext(AuthDataContext)
  const navigate = useNavigate()
  const { getAdmin } = useContext(AdminDataContext)
  const [loading, setLoading] = useState(false)

  const AdminLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      )
      console.log(result.data)
      toast.success("Admin Login Successfully")
      setLoading(false)
      getAdmin()
      navigate("/")
    } catch (error) {
      console.log(error.message)
      setLoading(false)
      toast.error("Admin Login Failed")
    }
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center justify-center px-4">
      
      {/* Header */}
      <div className="flex items-center gap-3 absolute top-6 left-6 cursor-pointer" onClick={() => navigate("/")}>
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h1 className="text-2xl font-bold tracking-wide">UrbanPrime</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-[420px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        
        <h2 className="text-3xl font-bold mb-2">Admin Login</h2>
        <p className="text-gray-200 text-sm mb-6">Welcome back! Please login to continue</p>

        <form onSubmit={AdminLogin} className="w-full flex flex-col gap-5">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 pr-10 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
            {showPassword ? (
              <IoEyeOffOutline
                className="absolute right-3 top-3 w-6 h-6 cursor-pointer text-gray-300 hover:text-white"
                onClick={() => setShowPassword(prev => !prev)}
              />
            ) : (
              <IoEyeOutline
                className="absolute right-3 top-3 w-6 h-6 cursor-pointer text-gray-300 hover:text-white"
                onClick={() => setShowPassword(prev => !prev)}
              />
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex items-center justify-center text-lg font-semibold transition duration-300 shadow-md"
          >
            {loading ? <Loading /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
