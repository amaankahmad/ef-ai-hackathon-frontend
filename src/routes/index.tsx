import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/error";
import ComingSoonPage from "../pages/ComingSoon";
import AppointmentBookingPage from "../pages/Appointment Booking";
import InspectPage from "../pages/Inspect";
import RegularTrackingPage from "../pages/Regular Tracking";
import AddInfoPage from "../pages/Additional Information";
import AnalysisPage from "../pages/Analysis";
import ConfirmationPage from "../pages/Confirmation";
import NoCTAPage from "../pages/No CTA";
import ClinicianPage from "../pages/Clinician view";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inspect" element={<InspectPage />} />
      <Route path="/booking" element={<AppointmentBookingPage />} />
      <Route path="/additional-info" element={<AddInfoPage />} />
      <Route path="/tracking" element={<RegularTrackingPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/negative" element={<NoCTAPage />} />
      <Route path="/error" element={<Error />} />
      <Route path="/clinician" element={<ClinicianPage />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
    </Routes>
  );
};

export default AppRoutes;
