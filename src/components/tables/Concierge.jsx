import { SlOptionsVertical } from "react-icons/sl";
import { users } from "../../data/user";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  TableStyled,
  TrStyled,
  PnumberStyled,
  ActiveStyle,
  InactiveStyle,
  ImgPerfilStyled,
  DivImgStyled,
  DivTextStyled,
  TrTitleStyled,
} from "./TableStyled";

export const Concierge = () => {
  const navigate = useNavigate();
  const HanderClick = (id) => {
    navigate(`/Concierge/${id}`);
  };
  return (
    <TableStyled>
      <tbody>
        <TrTitleStyled>
          <th>Name</th>
          <th>Job Desk</th>
          <th>Schedule</th>
          <th>Contact</th>
          <th>Status</th>
        </TrTitleStyled>
        {users.map((user) => (
          <TrStyled
            onClick={() => {
              HanderClick(user.id);
            }}
            key={user.id}
          >
            <td>
              <DivImgStyled>
                <ImgPerfilStyled src={user.foto} />
                <DivTextStyled>
                  <PnumberStyled>{user.nombre}</PnumberStyled>
                  <p>#{user.id}</p>
                  <p>{user.start_date}</p>
                </DivTextStyled>
              </DivImgStyled>
            </td>
            <td>{user.description}</td>
            <td>{user.start_date}</td>
            <td>
              <BsTelephone />
              {user.contact}
            </td>
            <td>
              {user.status ? (
                <ActiveStyle>ACTIVE</ActiveStyle>
              ) : (
                <InactiveStyle>INACTIVE</InactiveStyle>
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
