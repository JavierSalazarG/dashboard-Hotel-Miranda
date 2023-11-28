import {
  TableStyled,
  TrStyled,
  TbodyStyled,
  TrTitleStyled,
  IdBoockingStyled,
  SpanStatusStyled,
  ButtonNotesStyled,
  SpanNotesStyles,
  PopUpStyled,
  Spinner,
} from "./TableStyled";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = ({ BookingsList, loading }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const navigate = useNavigate();

  //Popup Mensage---------------
  const openPopup = (note, event) => {
    event.stopPropagation();
    setSelectedNote(note);
    setShowPopUp(true);
  };

  const closePopup = () => {
    setShowPopUp(false);
  };
  //=============================
  const HandleClick = (id) => {
    navigate(`/Booking/${id}`);
  };
  return (
    <TableStyled>
      <TbodyStyled>
        <TrTitleStyled>
          <th>Guest</th>
          <th>Order Date</th>
          <th>Check in</th>
          <th>Check out</th>
          <th>Special Request</th>
          <th>Room Type</th>
          <th>Status</th>
          <th></th>
        </TrTitleStyled>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          BookingsList &&
          BookingsList.map((booking) => (
            <TrStyled onClick={() => HandleClick(booking.id)} key={booking.id}>
              <td>
                <p>
                  {booking.nombre} {booking.apellidos}
                </p>
                <IdBoockingStyled>#{booking.id}</IdBoockingStyled>
              </td>

              <td>{booking.fecha_reserva}</td>
              <td>{booking.check_in}</td>
              <td>{booking.check_out}</td>
              <td>
                {booking.ha_anadido_mensaje ? (
                  <ButtonNotesStyled
                    onClick={(event) => openPopup(booking, event)}
                  >
                    View Notes
                  </ButtonNotesStyled>
                ) : (
                  <SpanNotesStyles>No Notes</SpanNotesStyles>
                )}
              </td>

              <td>
                <p>
                  {booking.tipo_habitacion} - {booking.numero_habitacion}
                </p>
              </td>

              <td>
                {booking.status === "Check In" ? (
                  <SpanStatusStyled $bg="#E8FFEE" $color="#5AD07A">
                    {booking.status}
                  </SpanStatusStyled>
                ) : booking.status === "In Progress" ? (
                  <SpanStatusStyled $bg="#E2E2E2" $color="yellow">
                    {booking.status}
                  </SpanStatusStyled>
                ) : (
                  <SpanStatusStyled $bg="#FFEDEC" $color="red">
                    {booking.status}
                  </SpanStatusStyled>
                )}
              </td>
              <td>
                <SlOptionsVertical />
              </td>
            </TrStyled>
          ))
        )}
        {showPopUp && (
          <PopUpStyled>
            <h3>
              {selectedNote && selectedNote.nombre}{" "}
              {selectedNote && selectedNote.apellidos}
            </h3>
            <span>{selectedNote && selectedNote.mensaje}</span>
            <p>{selectedNote && selectedNote.fecha_reserva}</p>
            <button onClick={closePopup}>Cerrar</button>
          </PopUpStyled>
        )}
      </TbodyStyled>
    </TableStyled>
  );
};

export default Booking;
