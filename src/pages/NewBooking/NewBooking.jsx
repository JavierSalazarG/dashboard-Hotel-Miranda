import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsListFromAPIThunk } from "../../features/rooms/RoomsThunk.ts";
import { addBooking } from "../../features/booking/bookingSlice.ts";
import { useNavigate } from "react-router-dom";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
  TexterraStyled,
  SubmitStyled,
} from "./newBookingStyled.ts";
import {
  getRoomsData,
  getRoomsStatus,
} from "../../features/rooms/RoomsSlice.ts";
import { MainStyled } from "../stytedPages.ts";
const NewBooking = () => {
  const [roomDetails, setRoomDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomsData = useSelector(getRoomsData);
  const roomstatus = useSelector(getRoomsStatus);
  const id = uuidv4();
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };
  console.log(roomDetails);
  const newId = () => {
    const NewId = id.slice(0, 5);
    return NewId;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (roomstatus === "idle" || roomstatus === "pending") {
          await dispatch(getRoomsListFromAPIThunk());
        } else if (roomstatus === "fulfilled") {
          const availableRooms = roomsData.filter(
            (room) => room.status === true
          );
          setRoomDetails(availableRooms);
        } else if (roomstatus === "rejected") {
          console.error("Error al obtener las habitaciones:", roomstatus);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las habitaciones:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, roomsData, roomstatus]);

  const handleSubmid = (e) => {
    e.preventDefault();
    let mensaje = false;
    const selectedRoomId = e.target[4].value;
    const messageOption = e.target[5].value;
    console.log(messageOption);
    if (selectedRoomId.length > 0 && messageOption.length > 0) {
      mensaje = true;
    }
    const selectedRoom = roomDetails.find((room) => room.id === selectedRoomId);

    const formData = {
      id: newId(),
      nombre: e.target[0].value,
      apellidos: e.target[1].value,
      fecha_reserva: getCurrentDate(),
      check_in: e.target[2].value,
      check_out: e.target[3].value,
      id_habitacion: e.target[4].value,
      description: e.target[5].value,
      numero_habitacion: selectedRoom.roomNumber,
      tipo_habitacion: selectedRoom.bedType,
      ha_anadido_mensaje: mensaje,
      status: "Check In",
    };
    dispatch(addBooking(formData));
    navigate("/Bookings");
  };
  return (
    <MainStyled>
      <FormStyled onSubmit={handleSubmid}>
        <InputStyled type="text" placeholder="Name" />
        <InputStyled type="text" placeholder="Surname" />
        <InputStyled type="date" placeholder="Check in" />
        <InputStyled type="date" placeholder="Check out" />
        <SelectStyled>
          <option>...</option>
          {loading ? (
            <option value="" disabled>
              Cargando habitaciones...
            </option>
          ) : (
            roomDetails.map((room) => (
              <option value={room.id} key={room.id}>
                {room.bedType} - {room.roomNumber}
              </option>
            ))
          )}
        </SelectStyled>
        <TexterraStyled placeholder="mensaje"></TexterraStyled>

        <SubmitStyled type="submit" value="save" />
      </FormStyled>
    </MainStyled>
  );
};

export default NewBooking;
