import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getHelpersBySkill, createBooking } from "../api/api";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  FileText,
  IndianRupee,
} from "lucide-react";

function Booking() {
  const [selectedTime, setSelectedTime] = useState("");
  const [service, setService] = useState("Cleaning");
  const [helpers, setHelpers] = useState([]);
const [selectedHelper, setSelectedHelper] = useState(null);

const [address, setAddress] = useState("");
const [date, setDate] = useState("");
const [instructions, setInstructions] = useState("");
const navigate = useNavigate();
const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    fetchHelpers();
}, [service]);

const fetchHelpers = async () => {

    try {

        setLoading(true);

        const response = await getHelpersBySkill(service);

        setHelpers(response.data);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

};

const handleBooking = async () => {

    console.log("Booking Clicked");

    try {

        const bookingData = {
            user_id: 1,
            helper_id: selectedHelper.id,
            service,
            date,
            time: selectedTime,
            address,
            instructions
        };

        console.log(bookingData);

        const response = await createBooking(bookingData);

        console.log(response);

                  // Save Booking ID
          localStorage.setItem(
              "booking_id",
              response.data.booking.id
          );

          // Save Total Amount
          localStorage.setItem(
              "amount",
              selectedHelper.cost + 49
          );

          // Navigate to Payment Page
          navigate("/payment");

    } catch (error) {

        console.log(error);

        console.log(error.response);

        console.log(error.response?.data);

        alert("Booking Failed");

    }
};

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
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
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
                value={date}
                onChange={(e)=>setDate(e.target.value)}
              />
            </div>

            {/* Time Slot */}

            {<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {timeSlots.map((time) => (

                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                    rounded-3xl
                    py-6
                    border-2
                    font-medium
                    transition-all
                    duration-300

                    ${
                      selectedTime === time
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                        : "bg-white hover:border-blue-400"
                    }
                    `}
                  >
                    {time}
                  </button>

                ))}

              </div>
            }


            <h2 className="font-semibold text-xl mt-8 mb-4">
            Available Helpers
            </h2>

            {
            loading ?

            <div className="text-gray-500">
            Loading helpers...
            </div>

            :

            <div className="grid md:grid-cols-2 gap-4">

            {helpers.map((helper)=>(

            <div
            key={helper.id}
            className={`
            border-2
            rounded-2xl
            p-5
            transition

            ${selectedHelper?.id===helper.id
            ?
            "border-blue-600 shadow-lg"
            :
            "border-gray-200"}
            `}
            >

            <h3 className="text-xl font-bold">
            {helper.name}
            </h3>

            <p className="text-gray-500">
            {helper.skill}
            </p>

            <div className="mt-2">
            ⭐ {helper.rating}
            </div>

            <div className="font-semibold mt-1">
            ₹{helper.cost}
            </div>

            <div className="mt-2">

            {helper.available ?

            <span className="text-green-600">
            Available
            </span>

            :

            <span className="text-red-600">
            Busy
            </span>

            }

            </div>

            <button
            onClick={()=>setSelectedHelper(helper)}
            className="
            mt-4
            w-full
            bg-blue-600
            text-white
            py-2
            rounded-xl
            "
            >

            Select Helper

            </button>

            </div>

            ))}

            </div>

            }

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
              value={instructions}
              onChange={(e)=>setInstructions(e.target.value)}
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

              <span>Helper</span>

              <span>

              {selectedHelper
              ?
              selectedHelper.name
              :
              "Not Selected"}

              </span>

              </div>

              <div className="flex justify-between">

              <span>Rating</span>

              <span>

              {selectedHelper
              ?
              `⭐ ${selectedHelper.rating}`
              :
              "--"}

              </span>

              </div>

              <div className="flex justify-between">
                <span>Base Price</span>
                <span>

                ₹{selectedHelper ? selectedHelper.cost : 0}

                </span>
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
                  {selectedHelper ? selectedHelper.cost + 49 : 49}
                </span>

              </div>

            </div>

            <button
          onClick={handleBooking}
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