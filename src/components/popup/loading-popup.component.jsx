
const LoadingPopupComponent = () => {
  return (
    <div className="w-screen h-screen absolute flex flex-col justify-center items-center">
      <div className="absolute bg-black w-full h-full opacity-60 z-10"></div>
      <div className="w-fit h-fit bg-white rounded-md z-20 flex justify-center items-center p-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="pl-4 text-black">Detecting faces, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPopupComponent;
