import { motion } from "framer-motion";
import {
  Search,
  UserCheck,
  Clock,
  MapPin,
} from "lucide-react";

function AutoAssignment() {

  const steps = [
    {
      title: "Finding Nearby Helpers",
      icon: <Search size={24} />,
      color: "text-blue-600",
    },

    {
      title: "Skill Matching",
      icon: <UserCheck size={24} />,
      color: "text-teal-600",
    },

    {
      title: "Availability Check",
      icon: <Clock size={24} />,
      color: "text-orange-500",
    },

    {
      title: "Best Helper Assigned",
      icon: <MapPin size={24} />,
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Heading */}

        <div className="text-center">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="
            w-24
            h-24
            mx-auto
            rounded-full
            border-4
            border-blue-600
            border-t-transparent
            "
          />

          <h1 className="text-5xl font-bold mt-8">
            Assigning Your Helper
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Our AI is finding the best available helper
            near your location.
          </p>

        </div>

        {/* Progress Card */}

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-10
          mt-12
          "
        >

          <div className="space-y-8">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.5,
                }}
                className="
                flex
                items-center
                gap-5
                "
              >

                <div
                  className={`
                  w-14
                  h-14
                  rounded-full
                  bg-slate-100
                  flex
                  items-center
                  justify-center
                  ${step.color}
                  `}
                >
                  {step.icon}
                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    {step.title}
                  </h3>

                  <p className="text-gray-500">
                    Processing...
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            text-center
            "
          >
            <h2 className="text-4xl font-bold text-blue-600">
              12
            </h2>

            <p className="text-gray-500 mt-2">
              Helpers Nearby
            </p>
          </div>

          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            text-center
            "
          >
            <h2 className="text-4xl font-bold text-teal-600">
              4.9
            </h2>

            <p className="text-gray-500 mt-2">
              Avg Rating
            </p>
          </div>

          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            text-center
            "
          >
            <h2 className="text-4xl font-bold text-green-600">
              15 Min
            </h2>

            <p className="text-gray-500 mt-2">
              Estimated Arrival
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AutoAssignment;