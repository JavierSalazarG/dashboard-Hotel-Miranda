import FilterRooms from "../../components/filters/room/FilterRooms";
import { TableRooms } from "../../components/tables/rooms/TableRooms";
import { MainStyled } from "../stytedPages";

export const RoomPage = () => {
  return (
    <MainStyled>
      <FilterRooms />
      <TableRooms />
    </MainStyled>
  );
};
