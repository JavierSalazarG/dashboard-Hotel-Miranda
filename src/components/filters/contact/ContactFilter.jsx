import React from "react";
import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NewestStyled,
} from "../roomsFilterStyled";
const ContactFilter = () => {
  return (
    <DivOptionsStyled>
      <div>
        <ButtonOrdenStyled>All Contacts</ButtonOrdenStyled>
        <ButtonOrdenStyled>Archived</ButtonOrdenStyled>
      </div>
      <DivButtonsNewstyled>
        <NewestStyled>Newest</NewestStyled>
      </DivButtonsNewstyled>
    </DivOptionsStyled>
  );
};

export default ContactFilter;
