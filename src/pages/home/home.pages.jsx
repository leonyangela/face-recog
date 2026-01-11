import "./home.styles.css";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "../../store";

import Navbar from "../../components/navbar/navbar.component";
import ImageLinkFormComponent from "../../components/formInput/image-link-form.component";

const HomePages = () => {
  const navbarRef = useRef();

  const { displayName } = useAuthStore((state) => {
    return state.user;
  });

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [navbarRef]);

  return (
    <div className="home">
      <Navbar ref={navbarRef} />

      <div
        className={`home__container`}
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div>Homepage {displayName}</div>
        <ImageLinkFormComponent />
      </div>
    </div>
  );
};

export default HomePages;
