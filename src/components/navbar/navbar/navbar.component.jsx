import "./navbar.styles.css";
import { forwardRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store";

import Logo from "../../logo/logo.component";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";

const Navbar = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const { displayName } = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const clearUser = useAuthStore((state) => state.clearUser);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    clearUser();
    navigate("/sign-in");
    setOpen(false);
  };

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div ref={ref} className="navbar">
      {/* LEFT: Logo only */}
      <Logo />

      {/* RIGHT: Hamburger (mobile) / Auth (desktop) */}
      <div className="flex items-center gap-4">
        {/* Desktop auth */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="text-text">
            Welcome, {isLoggedIn ? displayName : "-"}!
          </div>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <LogoutIcon fontSize="small" />
              Log out
            </button>
          ) : (
            <button onClick={() => navigate("/sign-in")}>Log in</button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* {open && ( */}
        <div
          className={`
            absolute top-full left-0 w-full
            bg-white shadow-md
            flex flex-col
            lg:hidden
            z-50
            global-transition-all
            ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          {/* Welcome */}
          <div className="px-4 py-3 text-base">
            Welcome, {isLoggedIn ? displayName : "-"}!
          </div>

          <button
            onClick={() => goTo("/")}
            className="flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-100"
          >
            <HomeOutlinedIcon fontSize="small" />
            Homepage
          </button>

          <button
            onClick={() => goTo("/face-detection")}
            className="flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-100 "
          >
            <FullscreenOutlinedIcon fontSize="small" />
            Face Detection
          </button>

          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="px-4 py-3 text-left text-red-600 hover:bg-gray-100 flex items-center gap-2"
            >
              <LogoutIcon fontSize="small" />
              Log out
            </button>
          )}
        </div>
      {/* )} */}
    </div>
  );
});

export default Navbar;
