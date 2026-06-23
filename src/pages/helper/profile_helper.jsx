import HelperLayout from "../../components/layout/HelperLayout";

export default function ProfileHelper() {
  return (
    <HelperLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          My Profile
        </h1>

        <p className="text-gray-500 mb-6">
          Manage your personal information and availability.
        </p>

        <div className="bg-white rounded-xl shadow p-8">

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />

            <div>
              <h2 className="text-2xl font-bold">
                Ramesh Kumar
              </h2>

              <p className="text-gray-500">
                House Helper
              </p>

              <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Available ✅
              </span>
            </div>
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-gray-600 mb-1">
                Full Name
              </label>

              <input
                type="text"
                value="Ramesh Kumar"
                className="w-full border rounded-lg p-3"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Phone Number
              </label>

              <input
                type="text"
                value="+91 9876543210"
                className="w-full border rounded-lg p-3"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Location
              </label>

              <input
                type="text"
                value="Phagwara, Punjab"
                className="w-full border rounded-lg p-3"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Experience
              </label>

              <input
                type="text"
                value="5 Years"
                className="w-full border rounded-lg p-3"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Skills
              </label>

              <input
                type="text"
                value="Cleaning, Cooking, Babysitting"
                className="w-full border rounded-lg p-3"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Hourly Charges
              </label>

              <input
                type="text"
                value="₹300/hour"
                className="w-full border rounded-lg p-3"
                readOnly
              />
            </div>

          </div>

          {/* Availability Toggle */}
          <div className="mt-8">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                readOnly
                className="w-5 h-5"
              />

              <span className="font-medium">
                Available for New Bookings
              </span>
            </label>
          </div>

          

            {/* Documents Section */}
            <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
                Verification Documents
            </h2>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">

                <div className="flex justify-between">
                <span>Aadhaar Card</span>
                <span className="text-green-600 font-medium">
                    Verified ✅
                </span>
                </div>

                <div className="flex justify-between">
                <span>PAN Card</span>
                <span className="text-yellow-600 font-medium">
                    Pending ⏳
                </span>
                </div>

                <div className="flex justify-between">
                <span>Police Verification</span>
                <span className="text-green-600 font-medium">
                    Verified ✅
                </span>
                </div>

            </div>

            <div className="flex gap-4 mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                View Documents
                </button>

                <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Upload Document
                </button>
            </div>
            </div>


             {/* Profile Completion */}
            <div className="mt-6">
            <p className="font-medium mb-2">
                Profile Completion: 85%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "85%" }}
                ></div>
            </div>
            </div>





          {/* Edit Button */}
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </HelperLayout>
  );
}