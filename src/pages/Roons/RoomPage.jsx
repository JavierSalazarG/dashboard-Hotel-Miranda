import { TableRooms } from "../../components/tables/rooms/TableRooms";
import { MainStyled } from "../stytedPages";
import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NavStyled,
  NewestStyled,
} from "./roomsStyled";
export const RoomPage = () => {
  return (
    <MainStyled>
      <DivOptionsStyled>
        <div>
          <ButtonOrdenStyled>All Rooms</ButtonOrdenStyled>
          <ButtonOrdenStyled>Active Employee</ButtonOrdenStyled>
          <ButtonOrdenStyled>Inactive Employee</ButtonOrdenStyled>
        </div>
        <DivButtonsNewstyled>
          <NavStyled to={"/home"}>+ New Room</NavStyled>
          <NewestStyled>Newest</NewestStyled>
        </DivButtonsNewstyled>
      </DivOptionsStyled>
      <TableRooms />
    </MainStyled>
  );
};
