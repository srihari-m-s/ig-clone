import { Stack } from "react-bootstrap";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Sidebar from "../../components/RootLayout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Stack direction="horizontal">
      {/* Sidebar */}
      <Sidebar />
      <MaxWidthWrapper>
        <Outlet />
      </MaxWidthWrapper>
    </Stack>
  );
}
