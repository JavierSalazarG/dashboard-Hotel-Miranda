import {
  TableStyled,
  TrContactStyled,
  TrTitleStyled,
  TdButtonsStyled,
  ButtonArchivetyled,
  SpanLoading,
} from "./TableStyled.ts";
import { useContext } from "react";
import { Archived } from "../../contexts/archived";
import { useDispatch } from "react-redux";
import {
  AddArchive,
  DeleteArchive,
} from "../../features/comments/commentSlice";
export const Contact = ({ CommentList, loading }) => {
  const { isArchived } = useContext(Archived);
  const dispatch = useDispatch();
  const HandleArchive = (comment) => {
    if (!comment.archive) {
      dispatch(AddArchive(comment.id));
    } else {
      dispatch(DeleteArchive(comment.id));
    }
  };

  const renderComments = (comment) => (
    <TrContactStyled key={comment.id}>
      <td>{comment.fecha}</td>
      <td>
        <p>#{comment.id} </p>
        <p>{comment.nombre} </p>
      </td>
      <td>
        <p>{comment.comentario}</p>
      </td>
      <TdButtonsStyled>
        {comment.archive ? (
          <ButtonArchivetyled
            $color="#5AD07A"
            onClick={() => HandleArchive(comment)}
          >
            PUBLISH
          </ButtonArchivetyled>
        ) : (
          <ButtonArchivetyled
            $color="red"
            onClick={() => HandleArchive(comment)}
          >
            ARCHIVE
          </ButtonArchivetyled>
        )}
      </TdButtonsStyled>
    </TrContactStyled>
  );

  return (
    <TableStyled>
      <tbody>
        <TrTitleStyled>
          <th>Date</th>
          <th>Customer</th>
          <th>Asunto</th>
          <th>Boton</th>
        </TrTitleStyled>

        {loading ? (
          <SpanLoading>Loading data ...</SpanLoading>
        ) : (
          CommentList &&
          CommentList.map((comment) => {
            if (isArchived) {
              return comment.archive && renderComments(comment);
            } else {
              return !comment.archive && renderComments(comment);
            }
          })
        )}
      </tbody>
    </TableStyled>
  );
};
