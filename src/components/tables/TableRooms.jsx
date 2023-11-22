import { SlOptionsVertical } from "react-icons/sl";
import { rooms } from "../../data/rooms";
import {
  TableStyled,
  TrTitleStyled,
  TrStyled,
  ImgHabitacionStyled,
  ThFacilitiesStyled,
  PnumberStyled,
  AvailibleStyle,
  BookedStyle,
  TbodyStyled,
} from "./TableStyled";

export const TableRooms = () => {
  return (
    <TableStyled>
      <TbodyStyled>
        <TrTitleStyled>
          <th colSpan="2">Room Name</th>
          <th>Bed Type</th>
          <th>Job Desk</th>
          <ThFacilitiesStyled>Facilities</ThFacilitiesStyled>
          <th>Rate</th>
          <th>Status</th>
        </TrTitleStyled>
        {rooms.map((room) => (
          <TrStyled key={room.roomId}>
            <td>
              <ImgHabitacionStyled src={room.img} />
            </td>
            <td>
              <PnumberStyled>{`#${room.roomNumber}`}</PnumberStyled>
              <p>{room.roomId}</p>
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
