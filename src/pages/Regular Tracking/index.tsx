// Import necessary modules and hooks
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import RootPage from "../root";
import { Button } from "flowbite-react";

// Define the ConfirmationPage component
const RegularTrackingPage = () => {
  // Use React Router's hooks to get location and navigation functions
  const navigate = useNavigate();

  // Get date and time from location state or use default values
  const date = "Friday, September 15th";
  const time = "8:00 AM";

  // State and ref for handling image
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  // Placeholder function for adding event to calendar
  const addToCalendar = () => {
    alert("Add to Calendar feature not yet implemented.");
  };

  return (
    <RootPage header="home">
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-4xl font-bold mb-12">
          All seems good but let's keep track of any changes. See you in a week
        </h1>
        <div className="text-align-left" style={{ color: "grey" }}>
          <div>
            {/* Display appointment information in grey */}
            Here is a calendar reminder for your next session.
          </div>
          <div>
            {/* Display location information in grey */}
            {date} at {time}.
          </div>
        </div>
        {/* Add to calendar button */}
        <Button
          onClick={addToCalendar}
          className="mt-12"
          style={{ backgroundColor: "#3296BC" }}
        >
          Add to Calendar
        </Button>
      </div>
    </RootPage>
  );
};

// Export the ConfirmationPage component
export default RegularTrackingPage;
