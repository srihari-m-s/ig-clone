import Sidebar from "../../components/RootLayout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet */}
      <Outlet />
    </div>
  );
}
