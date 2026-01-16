import "./face-detection.styles.css";
import { useFaceDetectionStore } from "../../store/face-detection.store.js";
import useNavbarHeight from "../../hooks/navbar-height.jsx";

import Navbar from "../../components/navbar/navbar/navbar.component";
import Sidebar from "../../components/navbar/sidebar/sidebar.component.jsx";
import FaceDetectionCard from "../../components/cards/face-detection-card/face-detection-card.component.jsx";
import BasicCard from "../../components/cards/basic-card/basic-card.component.jsx";

import robotImg from "../../assets/images/robot-background.jpg";
import SpanCard from "../../components/cards/span-card/span-card.component.jsx";
import AlertPopupComponent from "../../components/popup/alert-popup.component.jsx";
import LoadingPopupComponent from "../../components/popup/loading-popup.component.jsx";

const FaceDetectionPages = () => {
  const [navbarRef, navbarHeight] = useNavbarHeight();

  const isLoading = useFaceDetectionStore((state) => state.isLoading);
  const isAlert = useFaceDetectionStore((state) => state.isAlert);
  const isAlertText = useFaceDetectionStore((state) => state.isAlertText);

  const howItWorks = [
    {
      title: "Step 1",
      text: "Find a publicly accessible image online and paste the image URL into the input field",
    },
    {
      title: "Step 2",
      text: "AI will start scans the image and detects any faces with high accuracy.",
    },
    {
      title: "Step 3",
      text: "Detected faces are highlighted with bounding boxes.",
    },
  ];

  const hardcodedImgURL = [
    {
      spanText: "Single Face",
      imgURL:
        "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Clear portrait photo",
    },
    {
      spanText: "Multiple Faces",
      imgURL:
        "https://images.unsplash.com/photo-1764816651356-66425a51673d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Group photo with multiple people",
    },
    {
      spanText: "Challenging Case",
      imgURL:
        "https://images.unsplash.com/photo-1767600467988-855bf61273ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Different angles or lighting conditions",
    },
  ];

  return (
    <>
      <div className="face-detection base-class">
        <Navbar ref={navbarRef} />

        <div
          className={`face-detection-container`}
          style={{ height: `calc(100vh - ${navbarHeight}px)` }}
        >
          <div className="face-detection-sidebar">
            <Sidebar />
          </div>

          <div className="face-detection-content base-content">
            <div
              className="explanation-card"
              style={{ backgroundImage: `url(${robotImg})` }}
            >
              <div className="explanation-card-overlay"></div>
              <h1 className="title">Face Detection</h1>
              <h1 className="subtitle">
                Detect human face from image using advanced computer vision. The
                AI will automatically analyze the image and highlight detected
                faces.
              </h1>
            </div>

            <h1 className="uppercase text-base pt-10 opacity-40">
              How it works
            </h1>
            <div className="title pb-2">Get Started with 3 Easy Steps</div>
            <div className="how-it-works">
              {howItWorks?.map((data, index) => {
                const { title, text } = data;
                return <BasicCard key={index} title={title} text={text} />;
              })}
            </div>

            <div className="text-sm text-gray-400">
              Don’t have an image? Try one of the examples below. Click any
              example below to automatically fill the input field and test face
              detection instantly.
              {hardcodedImgURL?.map((data, index) => {
                const { spanText, imgURL, description } = data;
                return (
                  <SpanCard
                    key={index}
                    spanText={spanText}
                    imgURL={imgURL}
                    description={description}
                  />
                );
              })}
            </div>

            <h1 className="uppercase text-base pt-4 opacity-40">Features</h1>
            <div className="title pb-2">Face Detection</div>

            <div className="w-full h-auto">
              <FaceDetectionCard />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 pointer-events-none z-20">
        {isLoading && <LoadingPopupComponent />}
      </div>
      <div className="absolute top-0 left-0 pointer-events-none z-20">
        {isAlert && <AlertPopupComponent popupText={isAlertText} />}
      </div>
    </>
  );
};

export default FaceDetectionPages;
