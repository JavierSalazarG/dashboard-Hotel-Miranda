import FilterRooms from "../../components/filters/room/FilterRooms.jsx";
import { TableRooms } from "../../components/tables/rooms/TableRooms.jsx";
import { MainStyled } from "../stytedPages.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsListFromAPIThunk } from "../../features/rooms/RoomsThunk.ts";
import { RoomsInterface } from "../../interfaces/rooms/rooms.js";
import React from "react";
import {
  getRoomsData,
  getRoomsStatus,
} from "../../features/rooms/RoomsSlice.ts";
import { Dispatch } from "@reduxjs/toolkit";
export const RoomPage: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const roomsData = useSelector(getRoomsData);
  const roomsStatus = useSelector(getRoomsStatus);
  const [RoomsList, setRoomsList] = useState<RoomsInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (roomsStatus === "idle" || roomsStatus === "pending") {
          await dispatch(getRoomsListFromAPIThunk());
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
