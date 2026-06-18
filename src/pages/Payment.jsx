import { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Smartphone,
  Wallet,
  Receipt,
  CheckCircle,
} from "lucide-react";

function Payment() {
  const [method, setMethod] = useState("UPI");

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

  return (
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

          {/* Left Side */}

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

              {/* UPI Field */}

              {method === "UPI" && (

                <div className="mt-8">

                  <label className="font-medium">
                    Enter UPI ID
                  </label>

                  <input
                    type="text"
                    placeholder="example@upi"
                    className="
                    w-full
                    mt-2
                    p-4
                    rounded-2xl
                    border
                    "
                  />

                </div>

              )}

              {/* Card Form */}

              {(method === "Credit Card" ||
                method === "Debit Card") && (

                <div className="mt-8 space-y-4">

                  <input
                    type="text"
                    placeholder="Card Number"
                    className="
                    w-full
                    p-4
                    rounded-2xl
                    border
                    "
                  />

                  <div className="grid grid-cols-2 gap-4">

                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="
                      p-4
                      rounded-2xl
                      border
                      "
                    />

                    <input
                      type="text"
                      placeholder="CVV"
                      className="
                      p-4
                      rounded-2xl
                      border
                      "
                    />

                  </div>

                </div>

              )}

            </div>

          </div>

          {/* Right Side */}

          <div>

            {/* Summary */}

            <div className="bg-white rounded-[32px] shadow-xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Payment Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Cleaning Service</span>
                  <span>₹499</span>
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

                  <span>
                    ₹566
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
                "
              >
                Pay ₹566
              </button>

            </div>

            {/* Invoice */}

            <div
              className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-8
              mt-6
              "
            >

              <div className="flex items-center gap-3 mb-5">

                <Receipt
                  className="
                  text-blue-600
                  "
                />

                <h3 className="font-bold text-xl">
                  Invoice
                </h3>

              </div>

              <p className="text-gray-500">
                INV-2026-001
              </p>

              <p className="text-gray-500 mt-2">
                Service Date: 16 June 2026
              </p>

              <p className="text-gray-500 mt-2">
                Status: Pending Payment
              </p>

            </div>

            {/* Success Preview */}

            <div
              className="
              bg-green-50
              border
              border-green-200
              rounded-[32px]
              p-6
              mt-6
              "
            >

              <div className="flex items-center gap-3">

                <CheckCircle
                  className="
                  text-green-600
                  "
                />

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