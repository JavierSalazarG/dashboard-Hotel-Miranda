import React, { useState, useEffect, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { getRoomsListFromAPIThunk } from "../../features/rooms/RoomsThunk";
import { addBooking } from "../../features/booking/bookingSlice";
import { useNavigate } from "react-router-dom";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
  TexterraStyled,
  SubmitStyled,
} from "./newBookingStyled";
import { getRoomsData, getRoomsStatus } from "../../features/rooms/RoomsSlice";
import { RoomsInterface } from "../../interfaces/rooms/rooms";
import { MainStyled } from "../stytedPages";
import { useAppDispatch } from "../../app/store";

interface FormData {
  id: string;
  nombre: string;
  apellidos: string;
  fecha_reserva: string;
  check_in: string;
  check_out: string;
  id_habitacion: string;
  description: string;
  numero_habitacion: string;
  tipo_habitacion: string | undefined;
  ha_anadido_mensaje: boolean;
  status: string;
}

const NewBooking: React.FC = () => {
  const [roomDetails, setRoomDetails] = useState<RoomsInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const roomsData = useSelector(getRoomsData);
  const roomstatus = useSelector(getRoomsStatus);
  const id = uuidv4();

  const getCurrentDate = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const newId = (): string => {
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
            (room: RoomsInterface) => room.status === true
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

  const handleSubmid = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let mensaje = false;
    const selectedRoomId = (e.target as any)[4].value;
    const messageOption = (e.target as any)[5].value;
    console.log(messageOption);
    if (selectedRoomId.length > 0 && messageOption.length > 0) {
      mensaje = true;
    }
    const selectedRoom = roomDetails.find(
      (room: RoomsInterface) => room._id === selectedRoomId
    );

    const formData: any = {
      id: newId(),
      nombre: (e.target as any)[0].value,
      apellidos: (e.target as any)[1].value,
      fecha_reserva: getCurrentDate(),
      check_in: (e.target as any)[2].value,
      check_out: (e.target as any)[3].value,
      id_habitacion: selectedRoomId,
      description: messageOption,
      numero_habitacion: selectedRoom?.roomNumber.toString() || "",
      tipo_habitacion: selectedRoom?.bedType,
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
              <option value={room._id} key={room._id}>
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
