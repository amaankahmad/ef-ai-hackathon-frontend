import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RootPage from "../root";
import { Button } from "flowbite-react";

const ImageCapturePage = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Access the device camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("An error occurred: " + err);
        });
    }
  }, []);

  const captureImage = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const image = canvasRef.current.toDataURL("image/png");
    // Save or process the captured image
    console.log(image);
  };

  return (
    <RootPage header="error">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <video ref={videoRef} width="640" height="1200" autoPlay></video>
        <Button onClick={captureImage}>Capture</Button>
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          className="hidden"
        ></canvas>
      </div>
    </RootPage>
  );
};

export default ImageCapturePage;
