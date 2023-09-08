import React from "react";
import { Link } from "react-router-dom";
import RootPage from "./root";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <RootPage header="error">
      <div className="flex flex-col items-center justify-center min-h-screen px-[10%]">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 flex items-center text-center">
          whoops, it seems you're lost
        </h1>
        <button
          className="px-8 py-4 my-[4%] text-black rounded-full text-lg font-semibold"
          style={{ backgroundColor: "#BFA98F" }}
          onClick={() => navigate("/")}
        >
          lets take you home
        </button>
      </div>
    </RootPage>
  );
};

export default ErrorPage;
