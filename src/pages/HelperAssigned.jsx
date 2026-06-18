import { motion } from "framer-motion";
import {
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Navigation,
  CheckCircle,
} from "lucide-react";

function HelperAssigned() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-14">

        <div className="max-w-6xl mx-auto text-center px-6">

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="
            w-24
            h-24
            mx-auto
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            text-5xl
            "
          >
            ✅
          </motion.div>

          <h1 className="text-5xl font-bold mt-6">
            Helper Assigned Successfully
          </h1>

          <p className="mt-4 text-lg">
            Your professional helper is on the way
          </p>

        </div>

      </div>

      {/* Main Content */}

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-10
          "
        >

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Side */}

            <div>

              <div className="flex items-center gap-6">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
                  alt="helper"
                  className="
                  w-32
                  h-32
                  rounded-full
                  object-cover
                  border-4
                  border-blue-500
                  "
                />

                <div>

                  <h2 className="text-3xl font-bold text-slate-800">
                    Rahul Sharma
                  </h2>

                  <div className="flex items-center gap-2 mt-2">

                    <Star
                      className="text-yellow-400"
                      fill="currentColor"
                    />

                    <span className="font-medium">
                      4.9 Rating
                    </span>

                  </div>

                  <p className="text-gray-500 mt-2">
                    5+ Years Experience
                  </p>

                </div>

              </div>

              {/* Skills */}

              <div className="mt-10">

                <h3 className="text-xl font-semibold mb-4">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Cleaning",
                    "Cooking",
                    "Laundry",
                    "Home Care",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-blue-50
                      text-blue-600
                      border
                      border-blue-200
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div>

              <div className="grid grid-cols-2 gap-6">

                <div
                  className="
                  bg-blue-50
                  rounded-3xl
                  p-6
                  text-center
                  "
                >
                  <MapPin
                    className="
                    mx-auto
                    text-blue-600
                    "
                  />

                  <h4 className="mt-4 text-3xl font-bold text-slate-800">
                    1.8 KM
                  </h4>

                  <p className="text-gray-500">
                    Distance
                  </p>

                </div>

                <div
                  className="
                  bg-green-50
                  rounded-3xl
                  p-6
                  text-center
                  "
                >
                  <Clock
                    className="
                    mx-auto
                    text-green-600
                    "
                  />

                  <h4 className="mt-4 text-3xl font-bold text-slate-800">
                    12 Min
                  </h4>

                  <p className="text-gray-500">
                    ETA
                  </p>

                </div>

              </div>

              {/* Verification */}

              <div
                className="
                mt-6
                bg-green-50
                border
                border-green-200
                rounded-3xl
                p-6
                flex
                items-center
                gap-4
                "
              >

                <ShieldCheck
                  className="text-green-600"
                />

                <span>
                  Verified Background & Identity Checked
                </span>

              </div>

              {/* Buttons */}

              <div className="grid grid-cols-3 gap-4 mt-8">

                <button
                  className="
                  py-4
                  rounded-2xl
                  bg-blue-600
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  <Phone size={18}/>
                  Call
                </button>

                <button
                  className="
                  py-4
                  rounded-2xl
                  bg-teal-500
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  <MessageCircle size={18}/>
                  Chat
                </button>

                <button
                  className="
                  py-4
                  rounded-2xl
                  bg-orange-500
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  <Navigation size={18}/>
                  Track Live
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Timeline */}

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-8
          mt-8
          "
        >

          <h2 className="text-2xl font-bold mb-8">
            Service Timeline
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <CheckCircle className="text-green-500" />
              <span>Booking Confirmed</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-green-500" />
              <span>Helper Assigned</span>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-orange-500" />
              <span>Helper Travelling</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-500" />
              <span>Arrival Expected in 12 Minutes</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HelperAssigned;