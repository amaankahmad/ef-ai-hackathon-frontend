// Import necessary modules and hooks
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RootPage from "../root";
import { Button } from "flowbite-react";

// Define the ConfirmationPage component
const ConfirmationPage = () => {
  // Use React Router's hooks to get location and navigation functions
  const location = useLocation();
  const navigate = useNavigate();

  // Get date and time from location state or use default values
  const date = location.state?.selectedDate || "Friday, September 8th";
  const time = location.state?.selectedTime || "8:00 AM";

  // Additional information
  const imageSrc = location.state?.capturedImage;
  const analysisScore = location.state?.analysisScore;
  const preInspectionData = location.state?.preInspectionData;

  // Placeholder function for adding event to calendar
  const addToCalendar = () => {
    alert("Add to Calendar feature not yet implemented.");
  };

  return (
    <RootPage header="home">
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-4xl font-bold mb-12">
          Your appointment with Dr. Clifford has been confirmed.
        </h1>
        <div className="text-align-left" style={{ color: "grey" }}>
          <div>
            {/* Display appointment information in grey */}
            Your appointment is scheduled for {date} at {time}.
          </div>
          <div className="mt-4">
            {/* Display location information in grey */}
            4th Floor, Room PathFinder, Senna Building
          </div>
          <div>Gorsuch Pl, London E2 8JL</div>
        </div>
        {/* Add to calendar button */}
        <Button
          onClick={addToCalendar}
          className="mt-12"
          style={{ backgroundColor: "#3296BC" }}
        >
          Add to Calendar
        </Button>
        <Button
          onClick={() =>
            navigate("/clinician", {
              state: {
                selectedDate: date,
                selectedTime: time,
                capturedImage: imageSrc,
                analysisMeanalysisScoressage: analysisScore,
                preInspectionData: preInspectionData,
              },
            })
          }
          className="mt-36"
          style={{ backgroundColor: "#3296BC" }}
        >
          Want to see the Clinician view?
        </Button>
      </div>
    </RootPage>
  );
};

// Export the ConfirmationPage component
export default ConfirmationPage;
