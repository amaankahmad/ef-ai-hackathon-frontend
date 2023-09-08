import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/footer";
import RootPage from "../root";
import Logo from "../../assets/logo.png";
import { Button } from "flowbite-react";

const HomePage = () => {
  const location = useLocation();
  let navigate = useNavigate();

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

  return (
    <RootPage header="home">
      <div className="flex flex-col items-center h-screen">
        {/* Logo */}
        <img src={Logo} alt="Molespec Logo" className="mt-48 w-24 mb-4" />

        {/* App Name */}
        <h1 className="text-4xl mt-12 font-bold text-gray-800 mb-8">
          Molespec
        </h1>

        {/* Start Button */}
        <Button
          className="bg-[#3296BC] mt-24 font-bold"
          onClick={() => {
            navigate("/image");
          }}
        >
          Get started
        </Button>
      </div>
    </RootPage>
  );
};

export default HomePage;
