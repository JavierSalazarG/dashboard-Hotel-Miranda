import {
  TableStyled,
  TrContactStyled,
  TrTitleStyled,
  TdButtonsStyled,
  ButtonArchivetyled,
  SpanLoading,
} from "./TableStyled";

export const Contact = ({ CommentList, loading }) => {
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
          CommentList.map((comment) => (
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
                <ButtonArchivetyled>ARCHIVE</ButtonArchivetyled>
              </TdButtonsStyled>
            </TrContactStyled>
          ))
        )}
      </tbody>
    </TableStyled>
  );
};
