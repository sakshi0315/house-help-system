import { useState } from "react";
import { motion } from "framer-motion";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff
} from "lucide-react";

function Auth() {

  const [isLogin,setIsLogin] = useState(true);
  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      password: ""
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async () => {
      console.log("Button Clicked");
  try {

    if (!isLogin) {

      const response = await api.post(
        "/auth/register",
        formData
      );

      alert(response.data.message);

      setIsLogin(true);

    } else {

      const response = await api.post(
        "/auth/login",
        {
          email: formData.email,
          password: formData.password
        }
      );

      alert(response.data.message);

      navigate("/dashboard");
    }

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );

  }
};

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Left Side */}

      <div className="hidden lg:flex flex-1 items-center justify-center hero-bg">

        <motion.div
          initial={{opacity:0,x:-50}}
          animate={{opacity:1,x:0}}
          className="max-w-lg"
        >
          <h1 className="text-5xl font-bold leading-tight">

            Get Help

            <span className="gradient-text block">
              Within 15 Minutes
            </span>

          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Book trusted home services,
            track helpers live and enjoy
            secure payments.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="glass p-6 rounded-3xl">
              ⭐ 4.9 Rating
            </div>

            <div className="glass p-6 rounded-3xl">
              🚀 Fast Assignment
            </div>

            <div className="glass p-6 rounded-3xl">
              🔒 Secure Payment
            </div>

            <div className="glass p-6 rounded-3xl">
              📍 Live Tracking
            </div>

          </div>
        </motion.div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center p-8">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="
          w-full
          max-w-md
          bg-white
          rounded-[32px]
          p-8
          shadow-2xl
          "
        >

          {/* Tabs */}

          <div className="flex bg-slate-100 rounded-2xl p-1 mb-8">

            <button
              onClick={()=>setIsLogin(true)}
              className={`
              flex-1
              py-3
              rounded-xl
              transition
              ${
                isLogin
                ? "bg-white shadow"
                : ""
              }
              `}
            >
              Login
            </button>

            <button
              onClick={()=>setIsLogin(false)}
              className={`
              flex-1
              py-3
              rounded-xl
              transition
              ${
                !isLogin
                ? "bg-white shadow"
                : ""
              }
              `}
            >
              Signup
            </button>

          </div>

          <h2 className="text-3xl font-bold mb-2">

            {
              isLogin
              ? "Welcome Back"
              : "Create Account"
            }

          </h2>

          <p className="text-gray-500 mb-8">
            Continue to Smart Helper
          </p>

          {/* Name */}

          {
            !isLogin &&
            <div className="mb-4 relative">

              <User
                size={18}
                className="
                absolute
                left-4
                top-4
                text-gray-400"
              />

              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                pl-12
                p-4
                rounded-2xl
                border"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>
          }

          {
        !isLogin &&
        <div className="mb-4 relative">

          <input
            type="text"
            placeholder="Phone Number"
            className="
            w-full
            p-4
            rounded-2xl
            border"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

        </div>
          }

          {/* Email */}

          <div className="mb-4 relative">

            <Mail
              size={18}
              className="
              absolute
              left-4
              top-4
              text-gray-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              pl-12
              p-4
              rounded-2xl
              border"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          {/* Password */}

          <div className="mb-4 relative">

            <Lock
              size={18}
              className="
              absolute
              left-4
              top-4
              text-gray-400"
            />

            <input
              type={
                showPassword
                ? "text"
                : "password"
              }
              placeholder="Password"
              className="
              w-full
              pl-12
              pr-12
              p-4
              rounded-2xl
              border"
              name="password"
              value={formData.password}
              onChange={handleChange}

            />

            <button
              onClick={()=>
                setShowPassword(
                  !showPassword
                )
              }
              className="
              absolute
              right-4
              top-4"
            >
              {
                showPassword
                ? <EyeOff size={18}/>
                : <Eye size={18}/>
              }
            </button>

          </div>

          {/* Forgot */}

          {
            isLogin &&
            <div className="text-right mb-6">

              <button
                className="
                text-blue-600
                text-sm"
              >
                Forgot Password?
              </button>

            </div>
          }

          {/* Submit */}

            <button
              onClick={handleSubmit}
              className="
              w-full
              py-4
              rounded-2xl
              bg-blue-600
              text-white
              font-semibold
              shadow-lg"
            >
            {isLogin ? "Login" : "Create Account"}
          </button>

          {/* Divider */}

          <div
            className="
            flex
            items-center
            my-8"
          >
            <div className="flex-1 h-px bg-gray-200"/>
            <span className="px-4 text-gray-400">
              OR
            </span>
            <div className="flex-1 h-px bg-gray-200"/>
          </div>

          {/* Social */}

          <button
            className="
            w-full
            py-4
            rounded-2xl
            border
            font-medium"
          >
            Continue with Google
          </button>

        </motion.div>

      </div>

    </div>
  );
}

export default Auth;