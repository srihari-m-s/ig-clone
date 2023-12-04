import { Stack } from "react-bootstrap";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../../assets/constants";
import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper d-flex vh-100">
      <Stack gap={4} className="border-end gap-3 pt-5">
        <div className="align-self-center">
          <InstagramLogo className="d-none d-md-block" />
          <InstagramMobileLogo className="d-block d-md-none" />
          {/* <Image src="/logo.png" fluid /> */}
        </div>

        <NavLink to={""} className="text-decoration-none text-white nav__link">
          <div className="nav-item">
            <span className="nav-icon">
              <GoHome size={"28px"} />
            </span>
            <span className="nav_link_text">Home</span>
          </div>
        </NavLink>

        <NavLink
          to={"search"}
          className="text-decoration-none text-white nav__link"
        >
          <div className="nav-item">
            <span className="nav-icon">
              <SearchLogo />
            </span>
            <span className="nav_link_text">Search</span>
          </div>
        </NavLink>

        <NavLink
          to={"notifications"}
          className="text-decoration-none text-white nav__link"
        >
          <div className="nav-item">
            <span className="nav-icon">
              <NotificationsLogo />
            </span>
            <span className="nav_link_text">Notifications</span>
          </div>
        </NavLink>

        <NavLink
          to={"create"}
          className="text-decoration-none text-white nav__link"
        >
          <div className="nav-item">
            <span className="nav-icon">
              <CreatePostLogo />
            </span>
            <p className="m-0 nav_link_text">Create</p>
          </div>
        </NavLink>

        <NavLink
          to={"profile"}
          className="text-decoration-none text-white nav__link"
        >
          <div className="nav-item">
            <span className="nav-icon">
              <FaRegUser size={"24px"} />
            </span>
            <p className="m-0 nav_link_text">Profile</p>
          </div>
        </NavLink>
      </Stack>
    </div>
  );
}
