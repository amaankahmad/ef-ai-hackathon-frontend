// Import necessary modules and hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import RootPage from "../root";
import { Button } from "flowbite-react";
import axios from "axios";

// Define the ClinicianPage component
const ClinicianPage = () => {
  // Use React Router's hooks to get location
  const location = useLocation();

  // Extract the data from the location state
  const {
    selectedDate,
    selectedTime,
    capturedImage,
    analysisScore,
    preInspectionData,
  } = location.state || {};

  // State for handling image
  const [imageSrc, setImageSrc] = useState(null);
  // State to store the GPT results
  const [gptResults, setGptResults] = useState(null);

  // Effect to read the captured image from the location state
  useEffect(() => {
    if (capturedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(capturedImage);
    }
  }, [capturedImage]);

  // Effect to send the POST request when the component mounts
  useEffect(() => {
    // Define an async function to send the POST request
    const fetchData = async () => {
      try {
        // Define the POST request data
        const postData = {
          message: analysisScore,
          data: preInspectionData,
        };

        // Send the POST request to the /final-diagnosis endpoint
        const response = await axios.post(
          "http://localhost:8080/pre-inspection",
          postData
        );

        // Handle the response
        if (response.data) {
          console.log("Received response:", response.data);
          setGptResults(response.data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the async function to send the POST request
    fetchData();
  }, [
    selectedDate,
    selectedTime,
    capturedImage,
    analysisScore,
    preInspectionData,
  ]);

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
        {gptResults && (
          <div className="mb-6">
            <strong>GPT Results:</strong> {gptResults}
          </div>
        )}
        <div className="mb-6">
          {/* Display the image if available */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Mole"
              className="w-48 h-48 object-cover rounded-full"
            />
          )}
        </div>
        <div className="text-align-left" style={{ color: "grey" }}>
          <div>
            {/* Display appointment information in grey */}
            Your appointment is scheduled for {selectedDate} at {selectedTime}.
          </div>
          <div className="mt-4">
            {/* Display location information in grey */}
            4th Floor, Room PathFinder, Senna Building
          </div>
          <div>Gorsuch Pl, London E2 8JL</div>
        </div>
        <Button
          onClick={addToCalendar}
          className="mt-12"
          style={{ backgroundColor: "#3296BC" }}
        >
          View appointment booking
        </Button>
        <div>Raw data collected below:</div>
        <div className="text-align-left" style={{ color: "grey" }}>
          <div>{JSON.stringify(preInspectionData)}</div>
        </div>
      </div>
    </RootPage>
  );
};

export default ClinicianPage;
