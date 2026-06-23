import HelperLayout from "../../components/layout/HelperLayout";

const notifications = [
  {
    id: 1,
    title: "New Booking Request",
    message: "Sakshi Kumari requested House Cleaning service.",
    time: "5 minutes ago",
    type: "booking",
  },
  {
    id: 2,
    title: "Payment Received",
    message: "₹500 has been credited to your account.",
    time: "1 hour ago",
    type: "payment",
  },
  {
    id: 3,
    title: "Job Completed",
    message: "Cooking service for Rahul Sharma marked as completed.",
    time: "Yesterday",
    type: "job",
  },
  {
    id: 4,
    title: "New Review Received",
    message: "You received a 5-star rating from Neha Verma.",
    time: "2 days ago",
    type: "review",
  },
];

export default function NotificationsHelper() {
  return (
    <HelperLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Notifications
        </h1>

        <p className="text-gray-500 mb-6">
          Stay updated with your latest activities.
        </p>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg">
                    {notification.title}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    {notification.message}
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Mark All as Read
          </button>

          <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
            Clear Notifications
          </button>
        </div>
      </div>
    </HelperLayout>
  );
}