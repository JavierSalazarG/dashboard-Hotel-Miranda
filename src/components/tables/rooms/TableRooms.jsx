import { SlOptionsVertical } from "react-icons/sl";
import { deletedRoom } from "../../../features/rooms/RoomsSlice";
import { useDispatch } from "react-redux";
import { FilterRoomsContext } from "../../../contexts/rooms";
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
} from "../TableStyled.ts";

export const TableRooms = ({ RoomsList, loading }) => {
  const dispatch = useDispatch();

  const { filter } = useContext(FilterRoomsContext);

  const HandleDeleted = (id, event) => {
    if (event) {
      event.stopPropagation();
    }
    dispatch(deletedRoom(id));
  };

  const renderRooms = (room) => (
    <TrStyled key={room.id}>
      <td>
        <DivImgStyled>
          <ImgStyled alt={`Room ${room.roomNumber}`} src={room.imgs.img1} />
          <DivTextStyled>
            <PStyled>{`#${room.roomNumber}`}</PStyled>
            <p>{room.roomId}</p>
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
        <ButtonDelete onClick={() => HandleDeleted(room.id)} className="button">
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
