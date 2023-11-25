import BookingFilters from "../../components/filters/booking/BookingFilters";
import Booking from "../../components/tables/Booking";
import { MainStyled } from "../stytedPages";
export const BookingsPage = () => {
  return (
    <MainStyled>
      <BookingFilters />
      <Booking />
    </MainStyled>
  );
};
