import HomePage from "../components/HomePage";
import ListTripsPage from "../components/ListTripsPage";
import ApplicationFormPage from "../components/ApplicationFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TripDetailsPage from "../components/TripDetailsPage";
import LoginPage from "../components/LoginPage";
import AdminHomePage from "../components/AdminHomePage";
import CreateTripPage from "../components/CreateTripPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="list" element={<ListTripsPage />} />
        <Route path="application" element={<ApplicationFormPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<AdminHomePage />} />
        <Route path="tripDetails" element={<TripDetailsPage />} />
        <Route path="createTrip" element={<CreateTripPage />} />
      </Routes>
    </BrowserRouter>
  );
};
