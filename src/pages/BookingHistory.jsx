import { useEffect, useState } from "react";
import { Search, RotateCcw, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { getUserBookings } from "../api/api";

function BookingHistory() {

  const [search, setSearch] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {

      const response = await getUserBookings(1);

      setBookings(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.service.toLowerCase().includes(search.toLowerCase())
  );

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

        {/* Search */}

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-6
          "
        >

          <div className="relative">

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

        </div>

        {/* Booking Cards */}

        <div className="mt-8 space-y-6">

          {filteredBookings.map((booking)=>(

            <motion.div
              key={booking.id}
              whileHover={{ y:-5 }}
              className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-8
              "
            >

              <div className="flex flex-col lg:flex-row justify-between gap-8">

                <div className="space-y-2">

                  <h2 className="text-2xl font-bold">
                    {booking.service}
                  </h2>

                  <p>
                    📅 {booking.date}
                  </p>

                  <p>
                    🕒 {booking.time}
                  </p>

                  <p>
                    📍 {booking.address}
                  </p>

                  <p>
                    📝 {booking.instructions || "No Instructions"}
                  </p>

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
                        : booking.status === "Confirmed"
                        ? "bg-blue-100 text-blue-700"
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