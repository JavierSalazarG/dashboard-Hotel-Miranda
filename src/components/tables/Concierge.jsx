import { SlOptionsVertical } from "react-icons/sl";
import { users } from "../../data/user";
import {
  TableStyled,
  TrTitleStyled,
  TrStyled,
  ThFacilitiesStyled,
  PnumberStyled,
  AvailibleStyle,
  BookedStyle,
} from "./TableStyled";

export const Concierge = () => {
  return (
    <TableStyled>
      <tbody>
        <TrTitleStyled>
          <th colSpan="2">Name</th>
          <ThFacilitiesStyled>Job Desk</ThFacilitiesStyled>
          <th>Schedule</th>
          <th>Contact</th>
          <th>Status</th>
        </TrTitleStyled>
        {users.map((user) => (
          <TrStyled key={user.id}>
            <td></td>
            <td>
              <PnumberStyled>{user.nombre}</PnumberStyled>
              <p>{user.id}</p>
              <p>{user.start_date}</p>
            </td>
            <td>{user.description}</td>
            <td>{user.start_date}</td>
            <td>{user.contact}</td>

            <td>
              {user.status ? (
                <AvailibleStyle>Available</AvailibleStyle>
              ) : (
                <BookedStyle>INACTIVE</BookedStyle>
              )}
            </td>
            <td>
              <SlOptionsVertical />
            </td>
          </TrStyled>
        ))}
      </tbody>
    </TableStyled>
  );
};
