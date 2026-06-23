import HelperLayout from "../../components/layout/HelperLayout";

const requests = [
  {
    id: 1,
    customer: "Sakshi Kumari",
    service: "House Cleaning",
    date: "25 June 2026",
    address: "Phagwara, Punjab",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Rahul Sharma",
    service: "Cooking",
    date: "26 June 2026",
    address: "Jalandhar, Punjab",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Neha Verma",
    service: "Babysitting",
    date: "27 June 2026",
    address: "Ludhiana, Punjab",
    status: "Pending",
  },
];

export default function RequestsHelper() {
  return (
    <HelperLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Booking Requests
        </h1>

        <p className="text-gray-500 mb-6">
          Manage incoming service requests.
        </p>

        <div className="space-y-5">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">
                    {req.customer}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    {req.service}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    📅 {req.date}
                  </p>

                  <p className="text-gray-500 text-sm">
                    📍 {req.address}
                  </p>
                </div>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                  {req.status}
                </span>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                  Accept
                </button>

                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelperLayout>
  );
}