import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { ArchivedProvider } from "./contexts/archived.tsx";
import { FilterRoomsProvider } from "./contexts/rooms.tsx";
import { UserProvider } from "./contexts/user.tsx";
//Pages------
import Layout from "./components/layaut/layaut.tsx";
import { DashboardPage } from "./pages/Dashboard/DashboardPage.tsx";
import { RoomPage } from "./pages/Rooms/RoomPage.tsx";
import EditUser from "./pages/user/EditUser.jsx";
import { BookingsPage } from "./pages/Bookings/BookingsPage.tsx";
import { ConciergePage } from "./pages/Concierge/ConciergePage.tsx";
import { LoginPage } from "./pages/Login/LoginPage.tsx";
import { NewEmployee } from "./pages/NewEmployee/NewEployee.tsx";
import NewBooking from "./pages/NewBooking/NewBooking.tsx";
import ContactPage from "./pages/Contact/ContactPage.tsx";
import Booking from "./pages/Booking/Booking.tsx";
import NewRoom from "./pages/NewRoom/newRoom.jsx";
import { FilterBookingProvider } from "./contexts/boocking.tsx";
import EditEmployeepage from "./pages/EditEmployee/EditEmployeepage.tsx";
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

                        <Route path="user/new" element={<NewEmployee />} />
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
