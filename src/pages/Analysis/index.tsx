import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import RootPage from "../root";
import { Button } from "flowbite-react";

const AnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.capturedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(location.state.capturedImage);
    }
  }, [location]);

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      navigate("/analysis", { state: { capturedImage: file } });
    }
  };

  return (
    <RootPage header="home">
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl font-bold my-8">Image Analysis</h1>
        {imageSrc ? (
          <div className="mt-32 border-4 border-dashed border-gray-400 rounded-lg w-64 h-64 flex items-center justify-center mb-8">
            <img
              src={imageSrc}
              alt="Captured"
              className="w-60 h-60 object-cover rounded-lg"
            />
          </div>
        ) : (
          <p>No image to display</p>
        )}

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleCapture}
          className="hidden"
        />

        {/* Retake Button */}
        <div className="flex justify-between">
          <Button
            style={{ borderColor: "#3296BC" }}
            className="font-bold bg-white border-2 text-black mr-4"
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            Retake Image
          </Button>
          <Button
            style={{ backgroundColor: "#3296BC" }}
            className="font-bold bg-white border-2 text-white"
            onClick={() => {
              console.log("Analysing...");
            }}
          >
            Analyse
          </Button>
        </div>
      </div>
    </RootPage>
  );
};

export default AnalysisPage;
