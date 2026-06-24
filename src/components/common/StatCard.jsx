// export default function StatCard({
//   title,
//   value,
// }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h3 className="text-gray-500">
//         {title}
//       </h3>

//       <p className="text-3xl font-bold mt-2">
//         {value}
//       </p>
//     </div>
//   );
// }




export default function StatCard({ title, value }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
      <h3>{title}</h3>
      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}