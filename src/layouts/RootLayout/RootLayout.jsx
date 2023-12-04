import { Stack } from "react-bootstrap";
import Sidebar from "../../components/RootLayout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Stack direction="horizontal">
      {/* Sidebar */}
      <Sidebar />
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <Outlet />
      </div>
    </Stack>
  );
}
