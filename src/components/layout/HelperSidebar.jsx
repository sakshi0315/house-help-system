import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaClipboardList,
  FaBriefcase,
  FaMoneyBillWave,
  FaUser,
  FaStar,
  FaBell,
} from "react-icons/fa";

export default function HelperSidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/helper/dashboard_helper",
      icon: <FaHome />,
    },
    {
      name: "Requests",
      path: "/helper/requests_helper",
      icon: <FaClipboardList />,
    },
    {
      name: "Active Jobs",
      path: "/helper/activeJobs_helper",
      icon: <FaBriefcase />,
    },
    {
      name: "Earnings",
      path: "/helper/earning_helper",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Profile",
      path: "/helper/profile_helper",
      icon: <FaUser />,
    },
    {
      name: "Reviews",
      path: "/helper/reviews_helper",
      icon: <FaStar />,
    },
    {
      name: "Notifications",
      path: "/helper/notifications_helper",
      icon: <FaBell />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        Helper Panel
      </h1>

      <div className="flex flex-col gap-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 bg-blue-600 px-4 py-3 rounded-lg"
                : "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700"
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

      </div>
    </div>
  );
}