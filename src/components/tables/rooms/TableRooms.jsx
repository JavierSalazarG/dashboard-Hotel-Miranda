import { SlOptionsVertical } from "react-icons/sl";
import { deletedRoom } from "../../../features/rooms/RoomsSlice";
import { useDispatch } from "react-redux";
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
} from "../TableStyled";

export const TableRooms = ({ RoomsList, loading }) => {
  const dispatch = useDispatch();

  const HandleDeleted = (id, event) => {
    if (event) {
      event.stopPropagation();
    }
    dispatch(deletedRoom(id));
  };
  return (
    <TableStyled>
      <TbodyStyled>
        <TrTitleStyled>
          <th>Room Name</th>
          <th>Room Type</th>
          <th>Job Desk</th>
          <th>Amenities</th>
          <th>Price</th>
          <th>Status</th>
          <th></th>
        </TrTitleStyled>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          RoomsList &&
          RoomsList.map((room) => (
            <TrStyled key={room.id}>
              <td>
                <DivImgStyled>
                  <ImgStyled
                    alt={`Room ${room.roomNumber}`}
                    src={room.imgs.img1}
                  />
                  <DivTextStyled>
                    <PStyled>{`#${room.roomNumber}`}</PStyled>
                    <p>{room.roomId}</p>
                  </DivTextStyled>
                </DivImgStyled>
              </td>

              <td>{room.bedType}</td>
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
                  onClick={() => HandleDeleted(room.id)}
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
          ))
        )}
      </TbodyStyled>
    </TableStyled>
  );
};
