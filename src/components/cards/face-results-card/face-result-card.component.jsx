import "./face-result-card.styles.css";
import { useRef } from "react";
import { useFaceDetectionStore } from "../../../store";

const FaceResultCard = () => {
  const imgRef = useRef();
  const inputURL = useFaceDetectionStore((state) => state.inputURL);
  const faceResult = useFaceDetectionStore((state) => state.faceResult);
  const boundingBoxes = useFaceDetectionStore((state) => state.boundingBoxes);
  const setBoundingBox = useFaceDetectionStore(
    (state) => state.setBoundingBoxes
  );

  const calculateFaceLocation = (regions) => {
    const image = imgRef.current;

    if (!image) return;

    const width = image.clientWidth;
    const height = image.clientHeight;

    const boxes = regions.map((region) => {
      const { top_row, left_col, bottom_row, right_col } =
        region.region_info.bounding_box;

      return {
        leftCol: left_col * width,
        topRow: top_row * height,
        boxWidth: (right_col - left_col) * width,
        boxHeight: (bottom_row - top_row) * height,
      };
    });

    setBoundingBox(boxes);
  };

  return (
    <div className={`result`}>
      {faceResult && faceResult.length > 0 ? (
        <>
          <div className="relative w-fit h-fit">
            <img
              src={inputURL}
              onLoad={() => calculateFaceLocation(faceResult)}
              className="result-img"
              ref={imgRef}
            />
            {boundingBoxes &&
              boundingBoxes.map((box, idx) => (
                <div
                  key={idx}
                  className="result-bounding-box"
                  style={{
                    top: `${box.topRow}px`,
                    left: `${box.leftCol}px`,
                    width: `${box.boxWidth}px`,
                    height: `${box.boxHeight}px`,
                  }}
                />
              ))}
          </div>
        </>
      ) : (
        <div className="result-empty-placeholder">
          <h1>No Image Loaded</h1>
          <h1>Paste an image URL to see results and click "Detect Faces"</h1>
        </div>
      )}
    </div>
  );
};

export default FaceResultCard;
