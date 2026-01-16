import "./navbar.styles.css";
import { forwardRef } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store";
import Logo from "../../logo/logo.component";
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const { displayName } = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const clearUser = useAuthStore((state) => state.clearUser);

  const handleLogout = () => {
    localStorage.removeItem("user");
    clearUser();
    navigate("/sign-in");
  };

  return (
    <div className="navbar" ref={ref}>
      <Logo />
      <div className="navigation">
        <div className="text-text">
          Welcome, {isLoggedIn ? displayName : "-"}!
        </div>
        {isLoggedIn ? (
          <div
            className="global-cursor-pointer auth-btn flex justify-center items-center gap-1 hover:text-blue-600 global-transition-all"
            onClick={handleLogout}
          >
            <LogoutIcon />
            Log out
          </div>
        ) : (
          <div className="nav" onClick={() => navigate("/sign-in")}>
            Log in
          </div>
        )}
      </div>
    </div>
  );
});

export default Navbar;
