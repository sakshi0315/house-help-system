import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Navigation,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

function LiveTracking() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-8">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Live Tracking
          </h1>

          <p className="mt-2">
            Your helper is on the way
          </p>

        </div>

      </div>

      {/* Map Section */}

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div
          className="
          relative
          h-[500px]
          rounded-[32px]
          overflow-hidden
          shadow-xl
          bg-gradient-to-br
          from-blue-100
          via-white
          to-teal-100
          "
        >

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* User Location */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            absolute
            bottom-[25%]
            left-[70%]
            "
          >
            <div
              className="
              w-16
              h-16
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
              text-white
              shadow-xl
              "
            >
              📍
            </div>
          </motion.div>

          {/* Helper */}

          <motion.div
            animate={{
              x: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            absolute
            top-[30%]
            left-[25%]
            "
          >
            <div
              className="
              w-16
              h-16
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              shadow-xl
              "
            >
              🚴
            </div>
          </motion.div>

          {/* Route */}

          <svg
            className="absolute inset-0 w-full h-full"
          >
            <line
              x1="30%"
              y1="35%"
              x2="70%"
              y2="75%"
              stroke="#2563EB"
              strokeWidth="6"
              strokeDasharray="12"
            />
          </svg>

        </div>

      </div>

      {/* ETA Card */}

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-8
          "
        >

          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center">

              <Clock
                className="
                mx-auto
                text-orange-500
                "
              />

              <h2 className="text-3xl font-bold mt-3">
                12 Min
              </h2>

              <p className="text-gray-500">
                ETA
              </p>

            </div>

            <div className="text-center">

              <MapPin
                className="
                mx-auto
                text-blue-600
                "
              />

              <h2 className="text-3xl font-bold mt-3">
                1.8 KM
              </h2>

              <p className="text-gray-500">
                Distance
              </p>

            </div>

            <div className="text-center">

              <Star
                className="
                mx-auto
                text-yellow-500
                "
              />

              <h2 className="text-3xl font-bold mt-3">
                4.9
              </h2>

              <p className="text-gray-500">
                Rating
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Sheet */}

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-8
          "
        >

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Helper Info */}

            <div className="flex items-center gap-5">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
                alt="helper"
                className="
                w-20
                h-20
                rounded-full
                object-cover
                "
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Rahul Sharma
                </h3>

                <p className="text-gray-500">
                  Cleaning Specialist
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="grid grid-cols-3 gap-4">

              <button
                className="
                px-6
                py-4
                rounded-2xl
                bg-blue-600
                text-white
                flex
                items-center
                gap-2
                "
              >
                <Phone size={18}/>
                Call
              </button>

              <button
                className="
                px-6
                py-4
                rounded-2xl
                bg-teal-500
                text-white
                flex
                items-center
                gap-2
                "
              >
                <MessageCircle size={18}/>
                Chat
              </button>

              <button
                className="
                px-6
                py-4
                rounded-2xl
                bg-orange-500
                text-white
                flex
                items-center
                gap-2
                "
              >
                <Navigation size={18}/>
                Navigate
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LiveTracking;