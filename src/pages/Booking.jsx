import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  FileText,
  IndianRupee,
} from "lucide-react";

function Booking() {
  const [service, setService] = useState("Cleaning");

  const services = [
    "Cleaning",
    "Cooking",
    "Laundry",
    "Plumbing",
    "Electrician",
    "Babysitting",
    "Home Repair",
    "Gardening",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM",
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Book Service
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Section */}

          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg">

            {/* Service */}

            <h2 className="font-semibold text-xl mb-4">
              Select Service
            </h2>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-4 rounded-2xl border mb-6"
            >
              {services.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Location */}

            <h2 className="font-semibold text-xl mb-4">
              Location
            </h2>

            <div className="relative mb-6">
              <MapPin
                className="absolute left-4 top-4 text-gray-400"
              />
              <input
                type="text"
                placeholder="Enter Address"
                className="
                w-full
                pl-12
                p-4
                rounded-2xl
                border
                "
              />
            </div>

            {/* Date */}

            <h2 className="font-semibold text-xl mb-4">
              Service Date
            </h2>

            <div className="relative mb-6">
              <Calendar
                className="absolute left-4 top-4 text-gray-400"
              />
              <input
                type="date"
                className="
                w-full
                pl-12
                p-4
                rounded-2xl
                border
                "
              />
            </div>

            {/* Time Slot */}

            <h2 className="font-semibold text-xl mb-4">
              Time Slot
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">

              {timeSlots.map((slot) => (
                <motion.button
                  key={slot}
                  whileHover={{ scale: 1.03 }}
                  className="
                  border
                  rounded-2xl
                  p-4
                  font-medium
                  "
                >
                  {slot}
                </motion.button>
              ))}

            </div>

            {/* Instructions */}

            <h2 className="font-semibold text-xl mb-4">
              Special Instructions
            </h2>

            <div className="relative">

              <FileText
                className="absolute left-4 top-4 text-gray-400"
              />

              <textarea
                rows="5"
                placeholder="Any special requirements..."
                className="
                w-full
                pl-12
                p-4
                rounded-2xl
                border
                "
              />

            </div>

          </div>

          {/* Summary Card */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            h-fit
            "
          >

            <h2 className="text-2xl font-bold mb-6">
              Booking Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Service</span>
                <span>{service}</span>
              </div>

              <div className="flex justify-between">
                <span>Base Price</span>
                <span>₹499</span>
              </div>

              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹49</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg">

                <span>Total</span>

                <span className="flex items-center gap-1">
                  <IndianRupee size={18}/>
                  548
                </span>

              </div>

            </div>

            <button
              className="
              mt-8
              w-full
              py-4
              rounded-2xl
              bg-blue-600
              text-white
              font-semibold
              shadow-lg
              "
            >
              Confirm Booking
            </button>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Booking;