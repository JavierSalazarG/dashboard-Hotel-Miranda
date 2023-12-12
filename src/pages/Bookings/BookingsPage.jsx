import BookingFilters from "../../components/filters/booking/BookingFilters";
import Booking from "../../components/tables/Booking";
import { MainStyled } from "../stytedPages";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingListFromAPIThunk } from "../../features/booking/bookingThunk.ts";
import {
  getBookingsData,
  getBookingsStatus,
} from "../../features/booking/bookingSlice.ts";
export const BookingsPage = () => {
  const dispatch = useDispatch();
  const BookingsData = useSelector(getBookingsData);
  const BookingsStatus = useSelector(getBookingsStatus);
  const [BookingsList, setBookingsList] = useState([]);
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
