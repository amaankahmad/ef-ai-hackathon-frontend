import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import RootPage from "../root";
import AboutMeSection from "./sections/aboutMeSection";
import HeroSection from "./sections/heroSection";
import PathFinderSection from "./sections/pathfinder";
import PodcastSection from "./sections/podcast";
import WritingSection from "./sections/writing";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

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
      <div>
        <HeroSection />
        <AboutMeSection />
        <PathFinderSection />
        <PodcastSection />
        <WritingSection />
      </div>
    </RootPage>
  );
};

export default HomePage;
