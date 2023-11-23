import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
//Pages------
import Layout from "./components/layaut/layaut";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { RoomPage } from "./pages/Roons/roomPage";
import { GuestPage } from "./pages/Guest/GuestPage";
import { BookingsPage } from "./pages/Bookings/BookingsPage";
import { ConciergePage } from "./pages/Concierge/ConciergePage";
import { LoginPage } from "./pages/Login/LoginPage";
import { NewEployee } from "./pages/NewEmployee/NewEployee";
import { ErrorPage } from "./pages/error-page";
//-------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/Bookings" element={<BookingsPage />} />
          <Route path="/Guest" element={<GuestPage />} />
          <Route path="/Concierges" element={<ConciergePage />} />
          <Route path="/Concierge/new" element={<NewEployee />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
