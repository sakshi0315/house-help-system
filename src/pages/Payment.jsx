import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { getBooking } from "../api/api";
import {
  CreditCard,
  Smartphone,
  Wallet,
  Receipt,
  CheckCircle,
} from "lucide-react";

import {
  createOrder,
  verifyPayment,
} from "../api/api";

function Payment() {
  const userName = localStorage.getItem("user_name");
  const userEmail = localStorage.getItem("user_email");
  const userPhone = localStorage.getItem("user_phone");
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [method, setMethod] = useState("UPI");

  const bookingId = Number(localStorage.getItem("booking_id"));
  const amount = Number(localStorage.getItem("amount"));

  const methods = [
    {
      name: "UPI",
      icon: <Smartphone size={24} />,
    },
    {
      name: "Google Pay",
      icon: <Wallet size={24} />,
    },
    {
      name: "Paytm",
      icon: <Wallet size={24} />,
    },
    {
      name: "Credit Card",
      icon: <CreditCard size={24} />,
    },
    {
      name: "Debit Card",
      icon: <CreditCard size={24} />,
    },
  ];

  useEffect(() => {

    loadBooking();

}, []);

const loadBooking = async () => {

    try {

        const response = await getBooking(bookingId);

        setBooking(response.data);

    } catch (error) {

        console.log(error);

    }

};

  const handlePayment = async () => {

    try {

      setLoading(true);

      const response = await createOrder({

            booking_id: bookingId,

            amount: amount,

            payment_method: method,

      });

      const order = response.data.order;

      const options = {

        key: response.data.key,

        amount: order.amount,

        currency: order.currency,

        name: "Smart Helper",

        description: "Home Service Booking",

        image:
          "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",

        order_id: order.id,

        handler: async function (paymentResponse) {

          try {

            await verifyPayment({

              payment_id:
                paymentResponse.razorpay_payment_id,

              order_id:
                paymentResponse.razorpay_order_id,

              signature:
                paymentResponse.razorpay_signature,

            });

            alert("Payment Successful ✅");

            navigate("/tracking");

          } catch (err) {

            console.log(err);

            alert("Payment Verification Failed");

          }

        },

        prefill: {

          name: localStorage.getItem("user_name") || "",

          email: localStorage.getItem("user_email") || "",

          contact: localStorage.getItem("user_phone") || "",

},

        theme: {

          color: "#2563EB",

        },

      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {

      console.log(error);

      alert("Unable to initiate payment.");

    } finally {

      setLoading(false);

    }

  };  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-10">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Payment
          </h1>

          <p className="mt-2">
            Secure and Fast Checkout
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-[32px] shadow-xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Select Payment Method
              </h2>

              <div className="space-y-4">

                {methods.map((item) => (

                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setMethod(item.name)}
                    className={`
                      cursor-pointer
                      p-5
                      rounded-2xl
                      border-2
                      flex
                      items-center
                      gap-4
                      transition-all

                      ${
                        method === item.name
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200"
                      }
                    `}
                  >

                    <div className="text-blue-600">
                      {item.icon}
                    </div>

                    <span className="font-medium">
                      {item.name}
                    </span>

                  </motion.div>

                ))}

              </div>

              {method === "UPI" && (

                <div className="mt-8">

                  <label className="font-medium">
                    Enter UPI ID
                  </label>

                  <input
                    type="text"
                    placeholder="example@upi"
                    className="w-full mt-2 p-4 rounded-2xl border"
                  />

                </div>

              )}

              {(method === "Credit Card" ||
                method === "Debit Card") && (

                <div className="mt-8 space-y-4">

                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full p-4 rounded-2xl border"
                  />

                  <div className="grid grid-cols-2 gap-4">

                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="p-4 rounded-2xl border"
                    />

                    <input
                      type="text"
                      placeholder="CVV"
                      className="p-4 rounded-2xl border"
                    />

                  </div>

                </div>

              )}

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-[32px] shadow-xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Payment Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>{booking?.service}</span>
                  <span>₹{amount - 49}</span>
                </div>

                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>₹49</span>
                </div>

                <div className="flex justify-between">
                  <span>GST</span>
                  <span>₹18</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold text-xl">

                  <span>Total</span>

                  <span>₹{amount}</span>

                </div>

              </div>

              <button
                onClick={handlePayment}
                disabled={loading}
                className="
                  mt-8
                  w-full
                  py-4
                  rounded-2xl
                  bg-blue-600
                  text-white
                  font-semibold
                  hover:bg-blue-700
                  transition
                  disabled:opacity-50
                "
              >
                {loading ? "Processing..." : `Pay ₹${amount}`}
              </button>

            </div>

<div className="bg-white rounded-[32px] shadow-xl p-8 mt-6">

    <div className="flex items-center gap-3 mb-6">

        <Receipt className="text-blue-600"/>

        <h3 className="font-bold text-xl">
            Invoice
        </h3>

    </div>

    <div className="space-y-3 text-gray-600">

        <div className="flex justify-between">
            <span>Invoice No</span>
            <span>INV-{booking?.id}</span>
        </div>

        <div className="flex justify-between">
            <span>Booking ID</span>
            <span>#{booking?.id}</span>
        </div>

        <div className="flex justify-between">
            <span>Service</span>
            <span>{booking?.service}</span>
        </div>

        <div className="flex justify-between">
            <span>Helper</span>
            <span>{booking?.helper?.name}</span>
        </div>

        <div className="flex justify-between">
            <span>Rating</span>
            <span>⭐ {booking?.helper?.rating}</span>
        </div>

        <div className="flex justify-between">
            <span>Date</span>
            <span>{booking?.date}</span>
        </div>

        <div className="flex justify-between">
            <span>Time</span>
            <span>{booking?.time}</span>
        </div>

        <div className="flex justify-between">
            <span>Amount</span>
            <span>₹{amount}</span>
        </div>

        <div className="flex justify-between">
            <span>Payment</span>
            <span>{booking?.payment?.method}</span>
        </div>

        <div className="flex justify-between">
            <span>Status</span>

            <span
                className={`font-semibold ${
                    booking?.payment?.status === "Success"
                        ? "text-green-600"
                        : "text-orange-600"
                }`}
            >
                {booking?.payment?.status}
            </span>

        </div>

        <div>

            <p className="font-medium mb-1">
                Address
            </p>

            <p className="text-sm">
                {booking?.address}
            </p>

        </div>

        <div>

            <p className="font-medium mb-1">
                Transaction ID
            </p>

            <p className="text-xs break-all">
                {booking?.payment?.transaction_id}
            </p>

        </div>

    </div>

</div>

            <div className="bg-green-50 border border-green-200 rounded-[32px] p-6 mt-6">

              <div className="flex items-center gap-3">

                <CheckCircle className="text-green-600" />

                <span className="font-medium">
                  Secure Payment Protected
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payment;