import "./home.styles.css";
import { useNavigate } from "react-router";``
import { useAuthStore } from "../../store";
import useNavbarHeight from "../../hooks/navbar-height";

import Navbar from "../../components/navbar/navbar/navbar.component";
import Sidebar from "../../components/navbar/sidebar/sidebar.component";
import SubmitBtn from "../../components/button/submit-btn/submit-btn.component";

import FullscreenIcon from "@mui/icons-material/Fullscreen";

const HomePages = () => {
  const { displayName } = useAuthStore((state) => {
    return state.user;
  });

  const [navbarRef, navbarHeight] = useNavbarHeight();
  const navigate = useNavigate();

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 21) return "Good evening";

    return "Good night";
  };

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="home base-class">
      <Navbar ref={navbarRef} />

      <div
        className={`home-container`}
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div className="home-sidebar">
          <Sidebar />
        </div>

        <div className="home-content">
          <div className="block">
            <div className="text">
              {getGreeting()},{" "}
              <span className="text-blue-500">{displayName}</span>!
            </div>

            <div className="text">What do you want to do today?</div>

            <div className="pt-8 w-fit mx-auto flex justify-center items-center gap-2">
              <SubmitBtn
                text={"Face Detection"}
                className={`w-fit`}
                onClick={() => handleClick("/face-detection")}
                icon={<FullscreenIcon />}
              />
              {/* <SubmitBtn text={"Object Detection"} className={`w-fit`} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
