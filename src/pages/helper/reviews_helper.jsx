import HelperLayout from "../../components/layout/HelperLayout";

const reviews = [
  {
    id: 1,
    customer: "Sakshi Kumari",
    rating: 5,
    comment: "Excellent service. Very professional and punctual.",
    date: "25 June 2026",
  },
  {
    id: 2,
    customer: "Rahul Sharma",
    rating: 4,
    comment: "Good work. Arrived on time and completed everything.",
    date: "22 June 2026",
  },
  {
    id: 3,
    customer: "Neha Verma",
    rating: 5,
    comment: "Very friendly and did an amazing job.",
    date: "20 June 2026",
  },
];

export default function ReviewsHelper() {
  return (
    <HelperLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Reviews & Ratings
        </h1>

        <p className="text-gray-500 mb-6">
          See what customers think about your services.
        </p>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Average Rating
            </h3>

            <p className="text-4xl font-bold mt-2">
              4.8 ⭐
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Total Reviews
            </h3>

            <p className="text-4xl font-bold mt-2">
              124
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Repeat Customers
            </h3>

            <p className="text-4xl font-bold mt-2">
              38
            </p>
          </div>

        </div>

        {/* Reviews List */}
        <div className="space-y-5">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex justify-between items-center mb-3">

                <h2 className="font-semibold text-lg">
                  {review.customer}
                </h2>

                <span className="text-yellow-500 font-bold">
                  {"⭐".repeat(review.rating)}
                </span>

              </div>

              <p className="text-gray-700 mb-3">
                {review.comment}
              </p>

              <p className="text-sm text-gray-500">
                {review.date}
              </p>
            </div>
          ))}

        </div>
      </div>
    </HelperLayout>
  );
}