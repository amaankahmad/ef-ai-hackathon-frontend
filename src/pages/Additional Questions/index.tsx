import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import RootPage from "../root";
import { Button, TextInput } from "flowbite-react";

export function formTextField(
  label: any,
  labelString: string,
  fieldPlaceholder: string,
  value: string,
  errorHit: any,
  errorMessage: string,
  prepend?: string,
  onInfoChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // <-- Add this
) {
  return (
    <div className="w-full px-4 pb-4">
      <div className="block pb-2">
        <label htmlFor={label}>{labelString}</label>
      </div>
      <div className="flex items-center w-full">
        <TextInput
          key={label}
          defaultValue={value}
          placeholder={fieldPlaceholder}
          type={"text"}
          className="w-full"
          onChange={(e) => {
            if (onInfoChange) {
              onInfoChange(e);
            }
          }}
        />
      </div>
      {errorHit && (
        <div
          className="bg-red-100 mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
    </div>
  );
}

const AddInfoPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    moleLocation: "",
    familyHistory: "",
    moleDuration: "",
    moleChange: "",
    moleSensation: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    const {
      moleLocation,
      familyHistory,
      moleDuration,
      moleChange,
      moleSensation,
    } = formData;
    if (
      !moleLocation ||
      !familyHistory ||
      !moleDuration ||
      !moleChange ||
      !moleSensation
    ) {
      setError("All fields must be filled.");
      return;
    }
    setError(null);
    console.log("Submitting data:", formData);
    navigate("/booking");
    // Navigate or perform other actions
  };

  return (
    <RootPage header="error">
      <div className="flex flex-col min-h-screen">
        <h1 className="px-4 py-8 xs:text-3xl text-6xl md:text-8xl font-bold flex items-center text-center">
          Some additional questions
        </h1>
        {formTextField(
          "moleLocation",
          "What is the location of the mole?",
          "e.g. on my back",
          formData.moleLocation,
          error,
          "This field is required.",
          undefined,
          (e) => handleInputChange(e, "moleLocation")
        )}
        {formTextField(
          "familyHistory",
          "Do you have a history of skin cancer in your family?",
          "e.g. Yes, my father had it",
          formData.familyHistory,
          error,
          "This field is required.",
          undefined,
          (e) => handleInputChange(e, "familyHistory")
        )}
        {formTextField(
          "moleDuration",
          "How long have you noticed the mole or skin change?",
          "e.g. 2 months",
          formData.moleDuration,
          error,
          "This field is required.",
          undefined,
          (e) => handleInputChange(e, "moleDuration")
        )}
        {formTextField(
          "moleChange",
          "Has the mole changed in size, shape or color recently?",
          "e.g. Yes it has grown",
          formData.moleChange,
          error,
          "This field is required.",
          undefined,
          (e) => handleInputChange(e, "moleChange")
        )}
        {formTextField(
          "moleSensation",
          "Do you experience any itchiness, tenderness or pain in the area?",
          "e.g. Yea it's really itchy",
          formData.moleSensation,
          error,
          "This field is required.",
          undefined,
          (e) => handleInputChange(e, "moleSensation")
        )}
        <div className="flex justify-end w-full pr-4 pt-4">
          <Button
            style={{ backgroundColor: "#31C48D" }}
            className="font-bold bg-white border-2 text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </RootPage>
  );
};

export default AddInfoPage;
