import { BsTelephone } from "react-icons/bs";
import { FilterRoomsContext } from "../../contexts/rooms";
import { useDispatch } from "react-redux";
import { deletedUsers } from "../../features/users/UsersSlice";
import { useContext } from "react";
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
import { useNavigate } from "react-router-dom";
export const Concierge = ({ loading, UsersList }) => {
  const dispatch = useDispatch();
  const { filter } = useContext(FilterRoomsContext);
  const navigate = useNavigate();

  const HandleEdit = (id) => {
    navigate(`/user/edit/${id}`);
  };
  const RenderUsers = (user) => (
    <TrStyled onClick={() => HandleEdit(user.id)} key={user.id}>
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
          onClick={(event) => HandleDeleted(user.id, event)}
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
          UsersList.map((user) => {
            if (
              filter === "All" ||
              (filter === "Active" && user.status) ||
              (filter === "Inactive" && !user.status)
            ) {
              return RenderUsers(user);
            }
            return null;
          })
        )}
      </tbody>
    </TableStyled>
  );
};
