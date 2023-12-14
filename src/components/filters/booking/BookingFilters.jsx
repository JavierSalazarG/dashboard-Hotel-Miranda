import React from "react";
import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NewestStyled,
  NavStyled,
} from "../roomsFilterStyled.ts";
import { FilterBookingContext } from "../../../contexts/boocking.tsx";
import { useContext } from "react";
const BookingFilters = () => {
  const {
    filter,
    setAll,
    setCheckingIn,
    setCheckingOut,
    setInProgress,
    setWithMessage,
  } = useContext(FilterBookingContext);
  return (
    <DivOptionsStyled>
      <div>
        {filter === "All" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setAll}
          >
            All Bookings
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setAll}>All Bookings</ButtonOrdenStyled>
        )}
        {filter === "Check In" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setCheckingIn}
          >
            Checking In
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setCheckingIn}>
            Checking In
          </ButtonOrdenStyled>
        )}

        {filter === "Check Out" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setCheckingOut}
          >
            Checking Out
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setCheckingOut}>
            Checking Out
          </ButtonOrdenStyled>
        )}

        {filter === "In Progress" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setInProgress}
          >
            In Progress
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setInProgress}>
            In Progress
          </ButtonOrdenStyled>
        )}

        {filter === "With Message" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setWithMessage}
          >
            With Notes
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setWithMessage}>
            With Notes
          </ButtonOrdenStyled>
        )}
      </div>
      <DivButtonsNewstyled>
        <NavStyled to={"/booking/new"}>+ New Booking</NavStyled>
        <NewestStyled>Newest</NewestStyled>
      </DivButtonsNewstyled>
    </DivOptionsStyled>
  );
};

export default BookingFilters;
