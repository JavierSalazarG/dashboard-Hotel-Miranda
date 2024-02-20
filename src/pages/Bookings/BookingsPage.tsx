import React, { useState, useEffect } from "react";
import BookingFilters from "../../components/filters/booking/BookingFilters.jsx";
import Booking from "../../components/tables/Booking";
import { MainStyled } from "../stytedPages.ts";
import { useSelector } from "react-redux";
import { getBookingListFromAPIThunk } from "../../features/booking/bookingThunk.ts";
import {
  getBookingsData,
  getBookingsStatus,
} from "../../features/booking/bookingSlice.ts";
import { useAppDispatch } from "../../app/store.ts";
import { BookingInterface } from "../../interfaces/booking/booking"; // Importar el tipo BookingInterface

export const BookingsPage = () => {
  const dispatch = useAppDispatch();
  const BookingsData = useSelector(getBookingsData);
  const BookingsStatus = useSelector(getBookingsStatus);
  const [BookingsList, setBookingsList] = useState<BookingInterface[]>([]); // Inicializar BookingsList con el tipo BookingInterface[]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (BookingsStatus === "idle" || BookingsStatus === "pending") {
          await dispatch(getBookingListFromAPIThunk());
        } else if (BookingsStatus === "fulfilled") {
          setBookingsList(BookingsData);
        } else if (BookingsStatus === "rejected") {
          console.error("Error fetching Bookings:", BookingsStatus);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, BookingsData, BookingsStatus]);
  return (
    <MainStyled>
      <BookingFilters />
      <Booking BookingsList={BookingsList} loading={loading} />
    </MainStyled>
  );
};
