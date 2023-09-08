// Import necessary modules and hooks
import { useEffect, useState } from "react";
import RootPage from "../root";
import { Button } from "flowbite-react";

// Define the ClinicianPage component
const ClinicianPage = ({
  capturedImage,
  classificationScore,
  additionalInfo,
}) => {
  // State for handling image
  const [imageSrc, setImageSrc] = useState(null);

  // Effect to read the captured image from the props
  useEffect(() => {
    if (capturedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(capturedImage);
    }
  }, [capturedImage]);

  // Placeholder function for adding event to calendar
  const addToCalendar = () => {
    alert("View booking feature not yet implemented.");
  };

  return (
    <RootPage header="home">
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-4xl font-bold mb-12">
          Here are the results of your patient's analysis:
        </h1>
        {imageSrc && (
          <div className="mb-6">
            <img
              src={imageSrc}
              alt="Mole"
              className="w-48 h-48 object-cover rounded-full"
            />
          </div>
        )}
        <div className="mb-6">
          <strong>Classification Score:</strong> {classificationScore}
        </div>
        <div className="mb-12">
          <strong>Additional Information:</strong> {additionalInfo}
        </div>
        <Button
          onClick={addToCalendar}
          className="mt-12"
          style={{ backgroundColor: "#3296BC" }}
        >
          View appointment booking
        </Button>
      </div>
    </RootPage>
  );
};

export default ClinicianPage;
