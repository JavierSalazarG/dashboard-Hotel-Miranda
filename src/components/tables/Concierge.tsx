import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FilterRoomsContext } from "../../contexts/rooms.jsx";
import { UsersInterface } from "../../interfaces/users/users.ts";
import { useDispatch } from "react-redux";
import { deletedUsers } from "../../features/users/UsersSlice.ts";
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
} from "./TableStyled.ts";
import { useNavigate } from "react-router-dom";
import { deleteUsersAPIThunk } from "../../features/users/usersThunk.ts";
import { string } from "prop-types";

interface ConciergeProps {
  UsersList: UsersInterface[];
  loading: boolean;
}

export const Concierge: React.FC<ConciergeProps> = ({ loading, UsersList }) => {
  const dispatch = useDispatch();
  const filterRoomsContext = useContext(FilterRoomsContext);

  if (!filterRoomsContext) {
    return null;
  }
  const { filter } = filterRoomsContext;
  const navigate = useNavigate();

  const HandleEdit = (id: string) => {
    navigate(`/user/edit/${id}`);
  };

  const HandleDeleted = (
    id: any,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event) {
      event.stopPropagation();
    }
    console.log("handleDeleted");
    dispatch(deleteUsersAPIThunk(id));
  };

  const RenderUsers = (user: UsersInterface) => (
    <TrStyled onClick={() => HandleEdit(user._id)} key={user._id}>
      <td>
        <DivImgStyled>
          <ImgPerfilStyled src={user.photo || undefined} />
          <DivTextStyled>
            <PnumberStyled>{user.nombre}</PnumberStyled>
            <p>#{user._id}</p>
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
          onClick={(event) => HandleDeleted(user._id, event)}
          className="button"
        >
          <IconDeletedStyled $color="#135846" />
        </ButtonDelete>
      </td>
    </TrStyled>
  );

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
          UsersList.map((user: UsersInterface) => {
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
