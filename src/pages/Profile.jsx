import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Shield,
  Calendar,
  CheckCircle,
  Clock,
  Edit3,
  Lock,
  LogOut,
  Camera,
} from "lucide-react";

function Profile() {

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {

    setUser({
      id: localStorage.getItem("user_id"),
      name: localStorage.getItem("user_name"),
      email: localStorage.getItem("user_email"),
      phone: localStorage.getItem("user_phone"),
    });

  }, []);

  return (

    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-72 relative">

        <div className="max-w-7xl mx-auto px-6 pt-10">

          <h1 className="text-4xl font-bold text-white">
            My Profile
          </h1>

          <p className="text-blue-100 mt-2">
            Manage your personal account information
          </p>

        </div>

      </div>

      {/* Profile Card */}

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          bg-white
          rounded-[36px]
          shadow-2xl
          -mt-24
          p-10
          relative
          "
        >

          {/* Avatar */}

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

            <div className="relative">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                className="
                w-40
                h-40
                rounded-full
                border-8
                border-white
                shadow-xl
                "
              />

              <button
                className="
                absolute
                bottom-3
                right-3
                bg-blue-600
                text-white
                p-3
                rounded-full
                shadow-lg
                hover:bg-blue-700
                transition
                "
              >
                <Camera size={18} />
              </button>

            </div>

            {/* User Info */}

            <div className="flex-1">

              <h2 className="text-4xl font-bold">
                {user.name}
              </h2>

              <p className="text-gray-500 mt-2">
                Premium Smart Helper User
              </p>

              <div className="flex flex-wrap gap-4 mt-6">

                <div className="bg-blue-50 px-5 py-3 rounded-2xl flex items-center gap-3">

                  <Shield className="text-blue-600" />

                  <span>
                    Verified Account
                  </span>

                </div>

                <div className="bg-green-50 px-5 py-3 rounded-2xl flex items-center gap-3">

                  <Calendar className="text-green-600" />

                  <span>
                    Joined 2026
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <motion.div
              whileHover={{ y: -6 }}
              className="
              bg-blue-50
              rounded-3xl
              p-8
              text-center
              "
            >

              <CheckCircle
                className="
                mx-auto
                text-blue-600
                "
                size={36}
              />

              <h3 className="text-4xl font-bold mt-4">
                12
              </h3>

              <p className="text-gray-500 mt-2">
                Total Bookings
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="
              bg-green-50
              rounded-3xl
              p-8
              text-center
              "
            >

              <CheckCircle
                className="
                mx-auto
                text-green-600
                "
                size={36}
              />

              <h3 className="text-4xl font-bold mt-4">
                9
              </h3>

              <p className="text-gray-500 mt-2">
                Completed
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="
              bg-orange-50
              rounded-3xl
              p-8
              text-center
              "
            >

              <Clock
                className="
                mx-auto
                text-orange-600
                "
                size={36}
              />

              <h3 className="text-4xl font-bold mt-4">
                3
              </h3>

              <p className="text-gray-500 mt-2">
                Pending
              </p>

            </motion.div>

          </div>
                    {/* Personal Information */}

          <div className="grid lg:grid-cols-2 gap-8 mt-12">

            {/* Left Card */}

            <div
              className="
              bg-white
              rounded-[32px]
              border
              shadow-lg
              p-8
              "
            >

              <h3 className="text-2xl font-bold mb-8">
                Personal Information
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">

                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <User className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Full Name
                    </p>

                    <h4 className="font-semibold text-lg">
                      {user.name}
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="bg-green-100 p-4 rounded-2xl">
                    <Mail className="text-green-600" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Email Address
                    </p>

                    <h4 className="font-semibold text-lg">
                      {user.email}
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="bg-orange-100 p-4 rounded-2xl">
                    <Phone className="text-orange-600" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Phone Number
                    </p>

                    <h4 className="font-semibold text-lg">
                      {user.phone}
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="bg-purple-100 p-4 rounded-2xl">
                    <Shield className="text-purple-600" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      User ID
                    </p>

                    <h4 className="font-semibold text-lg">
                      #{user.id}
                    </h4>
                  </div>

                </div>

              </div>

            </div>

            {/* Account Settings */}

            <div
              className="
              bg-white
              rounded-[32px]
              border
              shadow-lg
              p-8
              "
            >

              <h3 className="text-2xl font-bold mb-8">
                Account Settings
              </h3>

              <div className="space-y-5">

                <button
                  className="
                  w-full
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-blue-50
                  hover:bg-blue-100
                  transition
                  "
                >

                  <Edit3 className="text-blue-600" />

                  <span className="font-semibold">
                    Edit Profile
                  </span>

                </button>

                <button
                  className="
                  w-full
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-orange-50
                  hover:bg-orange-100
                  transition
                  "
                >

                  <Lock className="text-orange-600" />

                  <span className="font-semibold">
                    Change Password
                  </span>

                </button>

                <button
                  onClick={() => {

                    localStorage.clear();

                    window.location.href = "/auth";

                  }}
                  className="
                  w-full
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-red-50
                  hover:bg-red-100
                  transition
                  "
                >

                  <LogOut className="text-red-600" />

                  <span className="font-semibold text-red-600">
                    Logout
                  </span>

                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );

}

export default Profile;