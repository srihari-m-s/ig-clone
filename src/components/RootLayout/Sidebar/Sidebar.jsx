import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../../assets/constants";
import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";

const sidebarLinks = [
  {
    icon: <GoHome size={"28px"} />,
    text: "Home",
    link: "/",
  },
  {
    icon: <SearchLogo />,
    text: "Search",
  },
  {
    icon: <NotificationsLogo />,
    text: "Notifications",
    link: "",
  },
  {
    icon: <CreatePostLogo />,
    text: "Create",
    link: "",
  },
  {
    icon: <FaRegUser size={"24px"} />,
    text: "Profile",
    link: "",
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper d-flex vh-100">
      <Stack gap={4} className="border-end gap-3 pt-5">
        <div className="align-self-center mb-5">
          <InstagramLogo className="d-none d-lg-block" />
          <InstagramMobileLogo className="d-block d-lg-none" />
          {/* <Image src="/logo.png" fluid /> */}
        </div>

        {sidebarLinks.map((item, index) => {
          return (
            <Link
              to={item.link || null}
              className="text-decoration-none text-white nav__link"
              key={index}
            >
              <div className="nav-item align-items-center">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 500, hide: 250 }}
                  overlay={
                    <Tooltip id="sidebar-tooltip" className="d-md-none">
                      {item.text}
                    </Tooltip>
                  }
                >
                  <span className="nav-icon">{item.icon}</span>
                </OverlayTrigger>
                <span className="nav_link_text d-none d-lg-block">
                  {item.text}
                </span>
              </div>
            </Link>
          );
        })}

        {/* Logout */}
        <Link
          to={"/auth"}
          className="text-decoration-none text-white nav__link mt-auto mb-5"
        >
          <div className="nav-item align-items-center">
            <span className="nav-icon">
              <FiLogOut size={"28px"} />
            </span>
            <span className="nav_link_text d-none d-lg-block">{"Logout"}</span>
          </div>
        </Link>
      </Stack>
    </div>
  );
}
