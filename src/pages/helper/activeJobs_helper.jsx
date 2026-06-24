import HelperLayout from "../../components/layout/HelperLayout";

const activeJobs = [
  {
    id: 1,
    customer: "Sakshi Kumari",
    service: "House Cleaning",
    address: "Phagwara, Punjab",
    date: "25 June 2026",
    status: "Assigned",
  },
  {
    id: 2,
    customer: "Rahul Sharma",
    service: "Cooking",
    address: "Jalandhar, Punjab",
    date: "26 June 2026",
    status: "In Progress",
  },
  {
    id: 3,
    customer: "Neha Verma",
    service: "Babysitting",
    address: "Ludhiana, Punjab",
    date: "27 June 2026",
    status: "Assigned",
  },
];

export default function ActiveJobsHelper() {
  return (
    <HelperLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Active Jobs
        </h1>

        <p className="text-gray-500 mb-6">
          Manage your ongoing and assigned jobs.
        </p>

        <div className="space-y-5">
          {activeJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">
                    {job.customer}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    {job.service}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    📅 {job.date}
                  </p>

                  <p className="text-gray-500 text-sm">
                    📍 {job.address}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    job.status === "In Progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                  Start Job
                </button>

                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                  Mark Completed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelperLayout>
  );
}