import { useNavigate } from "react-router";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="logo global-cursor-pointer" onClick={handleClick}>
      <FullscreenIcon />
      <h1>Face Recognition</h1>
    </div>
  );
};

export default Logo;
