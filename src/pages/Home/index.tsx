import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../../components/Footer/footer";
import RootPage from "../root";
import Logo from "../../assets/logo.png";
import { Button } from "flowbite-react";

const HomePage = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Do something with the captured image file, e.g., send it to the server or navigate to another page
      navigate("/analysis", { state: { capturedImage: file } });
    }
  };

  return (
    <RootPage header="home">
      <div className="flex flex-col items-center h-screen">
        {/* Logo */}
        <img src={Logo} alt="Molespec Logo" className="mt-48 w-24 mb-4" />

        {/* App Name */}
        <h1 className="text-4xl mt-12 font-bold text-gray-800 mb-8">
          Molespec
        </h1>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleCapture}
          className="hidden"
        />

        {/* Start Button */}
        <Button
          style={{ backgroundColor: "#3296BC" }}
          className="font-bold"
          onClick={() => {
            fileInputRef.current.click();
          }}
        >
          Start you Molespec analysis
        </Button>
      </div>
    </RootPage>
  );
};

export default HomePage;
