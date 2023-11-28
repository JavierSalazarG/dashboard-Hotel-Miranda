import { BsTelephone } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { deletedUsers } from "../../features/users/UsersSlice";
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
  Spinner,
  IconDeletedStyled,
  ButtonDelete,
} from "./TableStyled";

export const Concierge = ({ loading, UsersList }) => {
  const dispatch = useDispatch();

  const HandleDeleted = (id, event) => {
    if (event) {
      event.stopPropagation();
    }
    dispatch(deletedUsers(id));
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
        {loading ? (
          <Spinner></Spinner>
        ) : (
          UsersList &&
          UsersList.map((user) => (
            <TrStyled key={user.id}>
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
                <ButtonDelete
                  onClick={() => HandleDeleted(user.id)}
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
      </tbody>
    </TableStyled>
  );
};
