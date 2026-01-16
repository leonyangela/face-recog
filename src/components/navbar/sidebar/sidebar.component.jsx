import "./sidebar.styles.css";
import { forwardRef } from "react";
import { useLocation, useNavigate } from "react-router";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const menu = [
  { label: "Homepage", path: "/", icon: <HomeOutlinedIcon /> },
  {
    label: "Face Detection",
    path: "/face-detection",
    icon: <FullscreenIcon />,
  },
];

const Sidebar = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (url) => {
    navigate(url);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar" ref={ref}>
      {menu.map(({ label, path, icon }) => (
        <div
          key={path}
          className={`global-transition-all global-cursor-pointer item ${
            isActive(path) ? "item--active" : ""
          }`}
          onClick={() => handleClick(path)}
        >
          {icon}
          {label}
        </div>
      ))}
    </div>
  );
});

export default Sidebar;
