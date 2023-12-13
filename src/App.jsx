import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ArchivedProvider } from "./contexts/archived.jsx";
import { FilterRoomsProvider } from "./contexts/rooms.jsx";
import { UserProvider } from "./contexts/user.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
//Pages------
import Layout from "./components/layaut/layaut";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { RoomPage } from "./pages/Rooms/RoomPage";
import EditUser from "./pages/user/EditUser";
import { BookingsPage } from "./pages/Bookings/BookingsPage";
import { ConciergePage } from "./pages/Concierge/ConciergePage";
import { LoginPage } from "./pages/Login/LoginPage";
import { NewEployee } from "./pages/NewEmployee/NewEployee";
import NewBooking from "./pages/NewBooking/NewBooking.jsx";
import ContactPage from "./pages/Contact/ContactPage";
import Booking from "./pages/Booking/Booking";
import NewRoom from "./pages/NewRoom/NewRoom.jsx";
import { FilterBookingProvider } from "./contexts/boocking.jsx";
import EditEmployeepage from "./pages/EditEmployee/EditEmployeepage.jsx";
export const App = () => {
  return (
    <React.StrictMode>
      <ArchivedProvider>
        <UserProvider>
          <FilterRoomsProvider>
            <FilterBookingProvider>
              <Provider store={store}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<LoginPage />} />

                    {localStorage.getItem("isLoggedIn") === "true" ? (
                      <Route element={<Layout />}>
                        <Route path="home" element={<DashboardPage />} />
                        <Route path="profile/edit" element={<EditUser />} />
                        <Route path="rooms" element={<RoomPage />} />
                        <Route path="room/new" element={<NewRoom />} />
                        <Route path="Bookings" element={<BookingsPage />} />
                        <Route path="booking/new" element={<NewBooking />} />
                        <Route path="Booking/:id" element={<Booking />} />
                        <Route path="Users" element={<ConciergePage />} />
                        <Route
                          path="user/edit/:id"
                          element={<EditEmployeepage />}
                        />

                        <Route path="user/new" element={<NewEployee />} />
                        <Route path="Contact" element={<ContactPage />} />
                      </Route>
                    ) : (
                      <Route path="*" element={<LoginPage />} />
                    )}
                  </Routes>
                </BrowserRouter>
              </Provider>
            </FilterBookingProvider>
          </FilterRoomsProvider>
        </UserProvider>
      </ArchivedProvider>
    </React.StrictMode>
  );
};
