import React from "react";
import { MainStyled } from "../stytedPages.ts";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { getBookingListFromAPIThunk } from "../../features/booking/bookingThunk.ts";
import { getRoomsListFromAPIThunk } from "../../features/rooms/RoomsThunk.ts";
import "swiper/css/navigation";
import {
  DivGeneralStyled,
  H3NombreStyled,
  SectionStyled,
  PIdStyled,
  TableStyled,
  DivDatesRoomStyled,
  TdStyled,
  SpanStatusStyled,
  SwiperStyled,
  DivDescriptionStyled,
  SwiperSlideStyled,
} from "./bookingStyled.ts";
import { useSelector } from "react-redux";
import {
  getBookingsData,
  getBookingsStatus,
} from "../../features/booking/bookingSlice.ts";
import {
  getRoomsData,
  getRoomsStatus,
} from "../../features/rooms/RoomsSlice.ts";
import { useAppDispatch } from "../../app/store.ts";
import { BookingInterface } from "../../interfaces/booking/booking.ts";
import { RoomsInterface } from "../../interfaces/rooms/rooms.ts";
const Booking = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const [bookingDetails, setBookingDetails] = useState<
    BookingInterface | undefined
  >(undefined);
  const [roomDetails, setRoomDetails] = useState<RoomsInterface | undefined>();

  const bookingData = useSelector(getBookingsData);
  const bookingStatus = useSelector(getBookingsStatus);

  const roomsData = useSelector(getRoomsData);
  const roomstatus = useSelector(getRoomsStatus);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + " ..." : text;
  };

  useEffect(() => {
    if (bookingStatus === "idle" && id) {
      dispatch(getBookingListFromAPIThunk());
    } else if (bookingStatus === "fulfilled" && id) {
      const foundBooking = bookingData.find(
        (booking) => booking._id && booking._id.toString() === id.toString()
      );
      setBookingDetails(foundBooking);
    } else if (bookingStatus === "rejected") {
      console.error("Error fetching Rooms:", bookingStatus);
    }
  }, [bookingDetails]);

  useEffect(() => {
    if (roomstatus === "idle") {
      dispatch(getRoomsListFromAPIThunk());
    } else if (roomstatus === "fulfilled") {
      const foundRoom = roomsData.find((room: RoomsInterface) => {
        return (
          room._id &&
          bookingDetails &&
          room._id.toString() === bookingDetails.id_habitacion?.toString()
        );
      });
      setRoomDetails(foundRoom);
    } else if (roomstatus === "rejected") {
      console.error("Error al obtener las habitaciones:", roomstatus);
    }
  }, [bookingDetails, dispatch, roomsData, roomstatus]);

  return (
    <MainStyled>
      {bookingDetails && bookingDetails ? (
        <DivGeneralStyled>
          <SectionStyled>
            <H3NombreStyled>
              {bookingDetails.nombre} {bookingDetails.apellidos}
            </H3NombreStyled>
            <PIdStyled>#{id}</PIdStyled>
            <TableStyled>
              <tr>
                <th>Check In</th>
                <th>Check Out</th>
              </tr>
              <tr>
                <td>{bookingDetails.check_in}</td>
                <td>{bookingDetails.check_out}</td>
              </tr>
            </TableStyled>
            <DivDatesRoomStyled>
              <TableStyled>
                <tr>
                  <th>Room Info</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <TdStyled>
                    {bookingDetails.tipo_habitacion} -
                    {bookingDetails.numero_habitacion}
                  </TdStyled>
                  <TdStyled>
                    $ {roomDetails && roomDetails.rate}
                    /night
                  </TdStyled>
                </tr>
              </TableStyled>
              <p>{roomDetails && roomDetails.description}</p>
            </DivDatesRoomStyled>
          </SectionStyled>
          <SectionStyled>
            {bookingDetails.status === "Check In" ? (
              <SpanStatusStyled $bg="#5AD07A">
                <p>{bookingDetails.status}</p>
              </SpanStatusStyled>
            ) : bookingDetails.status === "In Progress" ? (
              <SpanStatusStyled $bg="#E4E97E">
                <p>{bookingDetails.status}</p>
              </SpanStatusStyled>
            ) : (
              <SpanStatusStyled $bg="#E23428">
                {bookingDetails.status}
              </SpanStatusStyled>
            )}
            {roomDetails && roomDetails.imgs && (
              <SwiperStyled
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {Object.values(roomDetails.imgs).map((img, index) => (
                  <SwiperSlideStyled key={index}>
                    <img
                      src={img || undefined}
                      alt={`Room Image ${index + 1}`}
                    />
                  </SwiperSlideStyled>
                ))}
              </SwiperStyled>
            )}
          </SectionStyled>
          <DivDescriptionStyled>
            {roomDetails && (
              <>
                <h3>{roomDetails.bedType}</h3>
                <p>{truncateText(roomDetails.description, 100)}</p>
              </>
            )}
          </DivDescriptionStyled>
        </DivGeneralStyled>
      ) : (
        <p>No se encontró la reserva con el ID {id}</p>
      )}
    </MainStyled>
  );
};

export default Booking;
