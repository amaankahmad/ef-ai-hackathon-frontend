import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import RootPage from "../root";
import { Button } from "flowbite-react";

const AnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
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

  const analyzeImage = async () => {
    setLoading(true);
    try {
      let formData = new FormData();
      formData.append("file", location.state.capturedImage);
      const res = await axios.post(
        "https://flask-app-hrkoys2nxa-uw.a.run.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const nextPageState = {
        capturedImage: location.state.capturedImage,
        analysisScore: res.data,
      };

      if (res.data > 0.9) {
        navigate("/additional-info", { state: nextPageState });
      } else if (res.data > 0.5) {
        navigate("/tracking", { state: nextPageState });
      } else {
        navigate("/negative", { state: nextPageState });
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
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
            className="font-bold border-2 bg-white text-black mr-4"
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            <p className="text-sm text-[#3296BC] font-bold">Retake Image</p>
          </Button>
          <Button
            style={{ backgroundColor: "#3296BC" }}
            className="font-bold bg-white border-2 text-white"
            onClick={analyzeImage}
            disabled={loading}
          >
            {loading ? "Analysing..." : "Analyse"}
          </Button>
        </div>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </RootPage>
  );
};

export default AnalysisPage;
