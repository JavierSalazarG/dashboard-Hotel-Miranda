import React from "react";
import FilterRooms from "../../components/filters/room/FilterRooms.jsx";
import { TableRooms } from "../../components/tables/TableRooms.jsx";
import { MainStyled } from "../stytedPages.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsListFromAPIThunk } from "../../features/rooms/RoomsThunk.ts";
import { RoomsInterface } from "../../interfaces/rooms/rooms.js";
import {
  getRoomsData,
  getRoomsStatus,
} from "../../features/rooms/RoomsSlice.ts";
import { useAppDispatch } from "../../app/store.ts";
export const RoomPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const roomsData = useSelector(getRoomsData);
  const roomsStatus = useSelector(getRoomsStatus);
  const [RoomsList, setRoomsList] = useState<RoomsInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (roomsStatus === "idle") {
          dispatch(getRoomsListFromAPIThunk());
        } else if (roomsStatus === "fulfilled") {
          setRoomsList(roomsData);
        } else if (roomsStatus === "rejected") {
          console.error("Error fetching Rooms:", roomsStatus);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, roomsData, roomsStatus]);

  return (
    <MainStyled>
      <FilterRooms />
      <TableRooms RoomsList={RoomsList} loading={loading} />
    </MainStyled>
  );
};
