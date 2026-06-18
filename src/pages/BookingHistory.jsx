import { useState } from "react";
import { Search, RotateCcw, Eye } from "lucide-react";
import { motion } from "framer-motion";

function BookingHistory() {

  const [search, setSearch] = useState("");

  const bookings = [
    {
      service: "Home Cleaning",
      date: "16 June 2026",
      cost: "₹499",
      status: "Completed",
    },

    {
      service: "Cooking Service",
      date: "14 June 2026",
      cost: "₹799",
      status: "Completed",
    },

    {
      service: "Electrician",
      date: "10 June 2026",
      cost: "₹699",
      status: "Cancelled",
    },

    {
      service: "Plumbing",
      date: "8 June 2026",
      cost: "₹899",
      status: "Completed",
    },

    {
      service: "Laundry Service",
      date: "5 June 2026",
      cost: "₹399",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-10">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Booking History
          </h1>

          <p className="mt-2">
            View and manage your previous bookings
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Search + Filters */}

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-6
          "
        >

          <div className="flex flex-col md:flex-row gap-4">

            <div className="relative flex-1">

              <Search
                className="
                absolute
                left-4
                top-4
                text-gray-400
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search bookings..."
                className="
                w-full
                pl-12
                p-4
                border
                rounded-2xl
                "
              />

            </div>

            <button
              className="
              px-6
              py-4
              bg-blue-600
              text-white
              rounded-2xl
              "
            >
              All
            </button>

            <button
              className="
              px-6
              py-4
              bg-slate-100
              rounded-2xl
              "
            >
              Completed
            </button>

            <button
              className="
              px-6
              py-4
              bg-slate-100
              rounded-2xl
              "
            >
              Pending
            </button>

          </div>

        </div>

        {/* Booking Cards */}

        <div className="mt-8 space-y-6">

          {bookings.map((booking,index)=>(

            <motion.div
              key={index}
              whileHover={{
                y:-5
              }}
              className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-8
              "
            >

              <div className="flex flex-col lg:flex-row justify-between gap-6">

                <div>

                  <h2 className="text-2xl font-bold">
                    {booking.service}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {booking.date}
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-blue-600">
                    {booking.cost}
                  </h3>

                </div>

                <div>

                  <span
                    className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium

                    ${
                      booking.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "Pending"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-700"
                    }
                    `}
                  >
                    {booking.status}
                  </span>

                </div>

                <div className="flex gap-3">

                  <button
                    className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    gap-2
                    "
                  >
                    <RotateCcw size={18}/>
                    Rebook
                  </button>

                  <button
                    className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-slate-100
                    flex
                    items-center
                    gap-2
                    "
                  >
                    <Eye size={18}/>
                    Details
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default BookingHistory;