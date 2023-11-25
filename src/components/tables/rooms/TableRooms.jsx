import { SlOptionsVertical } from "react-icons/sl";
import { rooms } from "../../../data/rooms";
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
} from "../TableStyled";
export const TableRooms = () => {
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
        {rooms.map((room) => (
          <TrStyled key={room.roomId}>
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
              <SlOptionsVertical />
            </td>
          </TrStyled>
        ))}
      </TbodyStyled>
    </TableStyled>
  );
};
