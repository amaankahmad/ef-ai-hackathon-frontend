// Import necessary modules and hooks
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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

  // State and ref for handling image
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  // Effect to read the captured image from the location state
  useEffect(() => {
    if (location.state && location.state.capturedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(location.state.capturedImage);
    }
  }, [location]);

  // Function to handle image capture and navigate to analysis page
  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      navigate("/analysis", { state: { capturedImage: file } });
    }
  };

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
          onClick={() => navigate("/clinician")}
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
