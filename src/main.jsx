import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
//Pages------
import { App } from "./App";
import Layout from "./components/layaut/layaut";
import { RoomPage } from "./pages/Roons/roomPage";
import { GuestPage } from "./pages/Guest/GuestPage";
import { BookingsPage } from "./pages/Bookings/BookingsPage";
import { ConciergePage } from "./pages/Concierge/ConciergePage";
import { UserPage } from "./pages/user/UserPage";
import { LoginPage } from "./pages/Login/LoginPage";
//-------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/Room" element={<RoomPage />} />
          <Route path="/Bookings" element={<BookingsPage />} />
          <Route path="/Guest" element={<GuestPage />} />
          <Route path="/Concierge" element={<ConciergePage />} />
          <Route path="/User" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
