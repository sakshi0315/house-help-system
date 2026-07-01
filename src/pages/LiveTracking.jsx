import { useState, useEffect } from "react";
import MapView from "../components/MapView";
import {
  Phone,
  MessageCircle,
  Navigation,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

function LiveTracking() {

  const [eta, setEta] = useState(12);
  const [distance, setDistance] = useState(1.8);
  const [status, setStatus] = useState("On The Way");

  useEffect(() => {

    const timer = setInterval(() => {

      setEta((prev) => {

        if (prev > 1)
          return prev - 1;

        return 0;

      });

      setDistance((prev) => {

        if (prev > 0.2)
          return Number((prev - 0.2).toFixed(1));

        return 0;

      });

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {

    if (distance > 1.2) {

      setStatus("On The Way");

    }

    else if (distance > 0.5) {

      setStatus("Near You");

    }

    else if (distance > 0) {

      setStatus("Arrived");

    }

    else {

      setStatus("Service Started");

    }

  }, [distance]);

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

      {/* Map */}

      <div className="max-w-7xl mx-auto px-6 py-8">
        <MapView />
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
                {eta} Min
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
                {distance} KM
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

          <div className="mt-8 text-center">

            <span
              className={`
              px-6
              py-3
              rounded-full
              text-white
              font-semibold

              ${
                status === "On The Way"
                  ? "bg-blue-600"
                  : status === "Near You"
                  ? "bg-orange-500"
                  : status === "Arrived"
                  ? "bg-green-600"
                  : "bg-teal-600"
              }
              `}
            >
              {status}
            </span>

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

                <p className="text-sm text-gray-500 mt-2">
                  📍 Current Status:
                  <span
                    className={`
                    ml-2
                    font-semibold

                    ${
                      status === "On The Way"
                        ? "text-blue-600"
                        : status === "Near You"
                        ? "text-orange-500"
                        : status === "Arrived"
                        ? "text-green-600"
                        : "text-teal-600"
                    }
                    `}
                  >
                    {status}
                  </span>
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
                justify-center
                gap-2
                hover:bg-blue-700
                transition
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
                justify-center
                gap-2
                hover:bg-teal-600
                transition
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
                justify-center
                gap-2
                hover:bg-orange-600
                transition
                "
              >
                <Navigation size={18}/>
                Navigate
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Progress Timeline */}

      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-[32px] shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-8">
            Booking Progress
          </h2>

          <div className="flex justify-between items-center">

            <div className="text-center flex-1">

              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto">
                ✓
              </div>

              <p className="mt-3 font-medium">
                Assigned
              </p>

            </div>

            <div className="h-1 flex-1 bg-green-500"></div>

            <div className="text-center flex-1">

              <div
                className={`
                w-10
                h-10
                rounded-full
                text-white
                flex
                items-center
                justify-center
                mx-auto

                ${
                  status === "On The Way" ||
                  status === "Near You" ||
                  status === "Arrived" ||
                  status === "Service Started"
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }
                `}
              >
                2
              </div>

              <p className="mt-3 font-medium">
                On The Way
              </p>

            </div>

            <div className="h-1 flex-1 bg-gray-300"></div>

            <div className="text-center flex-1">

              <div
                className={`
                w-10
                h-10
                rounded-full
                text-white
                flex
                items-center
                justify-center
                mx-auto

                ${
                  status === "Arrived" ||
                  status === "Service Started"
                    ? "bg-orange-500"
                    : "bg-gray-300"
                }
                `}
              >
                3
              </div>

              <p className="mt-3 font-medium">
                Arrived
              </p>

            </div>

            <div className="h-1 flex-1 bg-gray-300"></div>

            <div className="text-center flex-1">

              <div
                className={`
                w-10
                h-10
                rounded-full
                text-white
                flex
                items-center
                justify-center
                mx-auto

                ${
                  status === "Service Started"
                    ? "bg-teal-600"
                    : "bg-gray-300"
                }
                `}
              >
                4
              </div>

              <p className="mt-3 font-medium">
                Started
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default LiveTracking;