import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
//Pages------
import Layout from "./components/layaut/layaut";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { RoomPage } from "./pages/Roons/roomPage";
import EditUser from "./pages/user/EditUser";
import { BookingsPage } from "./pages/Bookings/BookingsPage";
import { ConciergePage } from "./pages/Concierge/ConciergePage";
import { LoginPage } from "./pages/Login/LoginPage";
import { NewEployee } from "./pages/NewEmployee/NewEployee";
import { ErrorPage } from "./pages/error-page";
import ContactPage from "./pages/Contact/ContactPage";
import Booking from "./pages/Booking/Booking";
//-------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<DashboardPage />} />
            <Route path="/profile/edit" element={<EditUser />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/Bookings" element={<BookingsPage />} />
            <Route path="/Booking/:id" element={<Booking />} />
            <Route path="/Users" element={<ConciergePage />} />
            <Route path="/user/new" element={<NewEployee />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
