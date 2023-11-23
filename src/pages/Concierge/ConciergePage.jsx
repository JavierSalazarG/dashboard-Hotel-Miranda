import { Concierge } from "../../components/tables/Concierge";
import { MainStyled } from "../stytedPages";

import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NavStyled,
  NewestStyled,
} from "./concierge.js";
export const ConciergePage = () => {
  return (
    <MainStyled>
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
      <Concierge />
    </MainStyled>
  );
};
