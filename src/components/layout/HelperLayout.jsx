import HelperSidebar from "./HelperSidebar";

export default function HelperLayout({ children }) {
  return (
    <div className="flex">
      <HelperSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}