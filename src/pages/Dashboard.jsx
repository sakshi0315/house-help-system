import {
  Bell,
  MapPin,
  User,
  BrushCleaning,
  ChefHat,
  Shirt,
  Wrench,
  Zap,
  Baby,
  Hammer,
  Trees,
  Clock
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Dashboard() {

  const services = [
    {
      title: "Cleaning",
      icon: <BrushCleaning size={32} />
    },
    {
      title: "Cooking",
      icon: <ChefHat size={32} />
    },
    {
      title: "Laundry",
      icon: <Shirt size={32} />
    },
    {
      title: "Plumbing",
      icon: <Wrench size={32} />
    },
    {
      title: "Electrician",
      icon: <Zap size={32} />
    },
    {
      title: "Babysitting",
      icon: <Baby size={32} />
    },
    {
      title: "Home Repair",
      icon: <Hammer size={32} />
    },
    {
      title: "Gardening",
      icon: <Trees size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <div className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">
              Welcome Shivam 👋
            </h1>

            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <MapPin size={16}/>
              Ahmedabad, India
            </div>

          </div>

          <div className="flex gap-4">

            <button className="p-3 bg-white rounded-xl shadow">
              <Bell />
            </button>

            <button className="p-3 bg-white rounded-xl shadow">
              <User />
            </button>

          </div>

        </div>

      </div>

      {/* Hero Card */}

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div
          className="
          rounded-[32px]
          p-10
          bg-gradient-to-r
          from-blue-600
          to-teal-500
          text-white
          shadow-2xl
          "
        >
          <h2 className="text-5xl font-bold">
            Need Help Today?
          </h2>

          <p className="mt-4 text-lg">
            Book trusted professionals in seconds.
          </p>

          <button
            className="
            mt-8
            px-8
            py-4
            bg-white
            text-black
            rounded-2xl
            font-semibold
            "
          >
            Book Service
          </button>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="grid md:grid-cols-4 gap-6">

  <Link to="/booking" className="block">
    <motion.div
      whileHover={{ y: -8 }}
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      cursor-pointer
      "
    >
      <h3 className="font-semibold text-lg">
        Book Service
      </h3>
    </motion.div>
  </Link>

  <Link to="/booking" className="block">
    <motion.div
      whileHover={{ y: -8 }}
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      cursor-pointer
      "
    >
      <h3 className="font-semibold text-lg">
        Track Helper
      </h3>
    </motion.div>
  </Link>

  <Link to="/payment" className="block">
    <motion.div
      whileHover={{ y: -8 }}
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      cursor-pointer
      "
    >
      <h3 className="font-semibold text-lg">
        Payments
      </h3>
    </motion.div>
  </Link>

  <Link to="/history" className="block">
    <motion.div
      whileHover={{ y: -8 }}
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      cursor-pointer
      "
    >
      <h3 className="font-semibold text-lg">
        History
      </h3>
    </motion.div>
  </Link>

</div>

        </div>

      </div>

      {/* Services */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold mb-6">
          Service Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {services.map((service) => (

            <motion.div
              key={service.title}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              cursor-pointer
              "
            >

              <div className="text-blue-600">
                {service.icon}
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-2">
                Professional service available
              </p>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Recent Activity */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex gap-4 mb-6">

            <Clock className="text-blue-600"/>

            <div>
              <h4 className="font-semibold">
                Cleaning Service Completed
              </h4>

              <p className="text-gray-500">
                Today • 11:45 AM
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <Clock className="text-green-600"/>

            <div>
              <h4 className="font-semibold">
                Payment Successful
              </h4>

              <p className="text-gray-500">
                Yesterday • ₹499
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;