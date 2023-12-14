import React from "react";
import { deletedRoom } from "../../features/rooms/RoomsSlice.ts";
import { useDispatch } from "react-redux";
import { FilterRoomsContext } from "../../contexts/rooms.jsx";
import { useContext } from "react";
import {
  TableStyled,
  TrStyled,
  AvailibleStyle,
  BookedStyle,
  TbodyStyled,
  ImgStyled,
  PStyled,
  DivTextStyled,
  DivImgStyled,
  TrTitleStyled,
  Spinner,
  ButtonDelete,
  IconDeletedStyled,
} from "./TableStyled.ts";
import { RoomsInterface } from "../../interfaces/rooms/rooms.ts";
interface TableRoomsProps {
  RoomsList: RoomsInterface[];
  loading: boolean;
}
export const TableRooms: React.FC<TableRoomsProps> = ({
  RoomsList,
  loading,
}) => {
  const dispatch = useDispatch();

  const { filter } = useContext(FilterRoomsContext);

  const HandleDeleted = (id: string | null, event: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    if (id !== null) {
      dispatch(deletedRoom(id));
    }
  };

  const renderRooms = (room: RoomsInterface) => (
    <TrStyled key={room.id}>
      <td>
        <DivImgStyled>
          <ImgStyled
            alt={`Room ${room.roomNumber}`}
            src={room.imgs.img1 || undefined}
          />
          <DivTextStyled>
            <PStyled>{`#${room.roomNumber}`}</PStyled>
            <p>{room.id}</p>
          </DivTextStyled>
        </DivImgStyled>
      </td>

      <td>{room.bedType}</td>
      <td>{room.facilities}</td>
      <td>{`$${room.rate}/night`}</td>
      <td>
        {room.status ? (
          <AvailibleStyle>Available</AvailibleStyle>
        ) : (
          <BookedStyle>Booked</BookedStyle>
        )}
      </td>
      <td>
        <ButtonDelete
          onClick={(event) => HandleDeleted(room.id, event)}
          className="button"
        >
          {open ? (
            <IconDeletedStyled $color="red" />
          ) : (
            <IconDeletedStyled $color="#135846" />
          )}
        </ButtonDelete>
      </td>
    </TrStyled>
  );

  return (
    <TableStyled>
      <TbodyStyled>
        <TrTitleStyled>
          <th>Room Name</th>
          <th>Room Type</th>
          <th>Amenities</th>
          <th>Price</th>
          <th>Status</th>
          <th></th>
        </TrTitleStyled>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          RoomsList &&
          RoomsList.map((room) => {
            if (
              filter === "All" ||
              (filter === "Active" && room.status) ||
              (filter === "Inactive" && !room.status)
            ) {
              return renderRooms(room);
            }
            return null;
          })
        )}
      </TbodyStyled>
    </TableStyled>
  );
};
