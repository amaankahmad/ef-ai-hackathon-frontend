import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import RootPage from "../root";

const AppointmentBookingPage = () => {
  const navigate = useNavigate();

  return (
    <RootPage header="error">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="xs:text-5xl text-6xl md:text-8xl font-bold mb-6 flex items-center text-center">
          still under development
        </h1>
        <button
          className="px-8 py-4 my-[4%] text-black rounded-full text-lg font-semibold"
          style={{ backgroundColor: "#FFFFFF" }}
          onClick={() => navigate("/")}
        >
          in the meantime, lets take you home
        </button>
      </div>
    </RootPage>
  );
};

export default AppointmentBookingPage;
