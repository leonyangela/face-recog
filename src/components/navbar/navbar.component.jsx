import "./navbar.styles.css";
import { forwardRef } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../store";

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
      <div className="logo">LOGO</div>
      <div className="navigation">
        <div className="text-text">
          Welcome, {isLoggedIn ? displayName : "-"}
        </div>
        {isLoggedIn ? (
          <div className="global-cursor-pointer" onClick={handleLogout}>
            Log out
          </div>
        ) : (
          <div onClick={() => navigate("/sign-in")}>Log in</div>
        )}
      </div>
    </div>
  );
});

export default Navbar;
