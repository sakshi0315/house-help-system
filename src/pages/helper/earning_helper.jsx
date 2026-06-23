import StatCard from "../../components/common/StatCard";

import HelperLayout from "../../components/layout/HelperLayout";

const transactions = [
  {
    id: 1,
    date: "25 June 2026",
    customer: "Sakshi Kumari",
    amount: "₹500",
  },
  {
    id: 2,
    date: "26 June 2026",
    customer: "Rahul Sharma",
    amount: "₹800",
  },
  {
    id: 3,
    date: "27 June 2026",
    customer: "Neha Verma",
    amount: "₹1200",
  },
  {
    id: 4,
    date: "28 June 2026",
    customer: "Amit Kumar",
    amount: "₹650",
  },
];

export default function EarningsHelper() {
  return (
    <HelperLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Earnings
        </h1>

        <p className="text-gray-500 mb-6">
          Track your income and payment history.
        </p>

        {/* Earnings Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Today's Earnings
            </h3>

            <p className="text-3xl font-bold mt-2">
              ₹1,200
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Monthly Earnings
            </h3>

            <p className="text-3xl font-bold mt-2">
              ₹18,500
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Total Earnings
            </h3>

            <p className="text-3xl font-bold mt-2">
              ₹72,000
            </p>
          </div>

        </div> */}



            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                <StatCard
                    title="Today's Earnings"
                    value="₹1,200"
                />

                <StatCard
                    title="Monthly Earnings"
                    value="₹18,500"
                />

                <StatCard
                    title="Total Earnings"
                    value="₹72,000"
                />

            </div>






        {/* Payment History Table */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Payment History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">
                    Date
                  </th>

                  <th className="text-left py-3">
                    Customer
                  </th>

                  <th className="text-left py-3">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((txn) => (
                  <tr
                    key={txn.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3">
                      {txn.date}
                    </td>

                    <td className="py-3">
                      {txn.customer}
                    </td>

                    <td className="py-3 font-semibold text-green-600">
                      {txn.amount}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </HelperLayout>
  );
}