import React from "react";
import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NavStyled,
  NewestStyled,
} from "../roomsFilterStyled";
const ConciergeFilter = () => {
  return (
    <DivOptionsStyled>
      <div>
        <ButtonOrdenStyled>All Employee</ButtonOrdenStyled>
        <ButtonOrdenStyled>Active Employee</ButtonOrdenStyled>
        <ButtonOrdenStyled>Inactive Employee</ButtonOrdenStyled>
      </div>
      <DivButtonsNewstyled>
        <NavStyled to={"/user/new"}>+ New Employee</NavStyled>
        <NewestStyled>Newest</NewestStyled>
      </DivButtonsNewstyled>
    </DivOptionsStyled>
  );
};

export default ConciergeFilter;
