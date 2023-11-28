import React from "react";
import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NewestStyled,
} from "../roomsFilterStyled";
const BookingFilters = () => {
  return (
    <DivOptionsStyled>
      <div>
        <ButtonOrdenStyled>All Bookings</ButtonOrdenStyled>
        <ButtonOrdenStyled>Checking In</ButtonOrdenStyled>
        <ButtonOrdenStyled>Checking Out</ButtonOrdenStyled>
        <ButtonOrdenStyled>In Progress</ButtonOrdenStyled>
      </div>
      <DivButtonsNewstyled>
        <NewestStyled>Newest</NewestStyled>
      </DivButtonsNewstyled>
    </DivOptionsStyled>
  );
};

export default BookingFilters;
