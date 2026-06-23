import StatCard from "../../components/common/StatCard";

import HelperLayout from "../../components/layout/HelperLayout";

export default function DashboardHelper() {
  return (
    <HelperLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Helper Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here's your work summary.
          </p>
        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
          Available ✅
        </div>
      </div>



        {/* <div className="flex justify-between items-center mb-8">

            <div>
                <h1 className="text-4xl font-bold">
                Helper Dashboard
                </h1>

                <p className="text-gray-500">
                Welcome back! Here's your work summary.
                </p>
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                Available ✅
            </div>

        </div> */}





      {/* Stats Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Pending Requests</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Active Jobs</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Completed Jobs</h3>
          <p className="text-3xl font-bold mt-2">48</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Rating</h3>
          <p className="text-3xl font-bold mt-2">4.8 ⭐</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Today's Earnings</h3>
          <p className="text-3xl font-bold mt-2">₹1200</p>
        </div>

      </div> */}
      

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <StatCard
                title="Pending Requests"
                value="12"
            />
            <StatCard
                title="Active Jobs"
                value="5"
            />
            <StatCard
                title="Completed Jobs"
                value="48"
            />
            <StatCard
                title="Rating"
                value="4.8 ⭐"
            />
            <StatCard
                title="Today's Earnings"
                value="₹1200"
            />
        </div>




      {/* Recent Requests */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Requests
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>Sakshi</span>
            <span>House Cleaning</span>
            <span className="text-yellow-600 font-semibold">
              Pending
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Rahul</span>
            <span>Cooking</span>
            <span className="text-green-600 font-semibold">
              Accepted
            </span>
          </div>

          <div className="flex justify-between">
            <span>Neha</span>
            <span>Babysitting</span>
            <span className="text-blue-600 font-semibold">
              In Progress
            </span>
          </div>

        </div>
      </div>

      {/* Earnings Summary */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Earnings Summary
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <div>
            <p className="text-gray-500">Today</p>
            <p className="text-2xl font-bold">₹1200</p>
          </div>

          <div>
            <p className="text-gray-500">This Month</p>
            <p className="text-2xl font-bold">₹18,500</p>
          </div>

          <div>
            <p className="text-gray-500">Total Earnings</p>
            <p className="text-2xl font-bold">₹72,000</p>
          </div>

        </div>
      </div>
    </HelperLayout>
  );
}



// import HelperSidebar from "../../components/layout/HelperSidebar";

// export default function DashboardHelper() {
//   return (
//     <div className="flex">
//       <HelperSidebar />

//       <div className="flex-1 p-8">
//         <h1 className="text-3xl font-bold mb-6">
//           Helper Dashboard
//         </h1>

//         <div className="grid grid-cols-4 gap-6">
//           <div className="bg-white shadow rounded p-4">
//             <h3>Pending Requests</h3>
//             <p className="text-3xl font-bold">12</p>
//           </div>

//           <div className="bg-white shadow rounded p-4">
//             <h3>Active Jobs</h3>
//             <p className="text-3xl font-bold">5</p>
//           </div>

//           <div className="bg-white shadow rounded p-4">
//             <h3>Completed Jobs</h3>
//             <p className="text-3xl font-bold">47</p>
//           </div>

//           <div className="bg-white shadow rounded p-4">
//             <h3>Rating</h3>
//             <p className="text-3xl font-bold">4.8 ⭐</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }