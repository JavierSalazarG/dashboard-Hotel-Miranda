import FilterRooms from "../../components/filters/room/FilterRooms.jsx";
import { TableRooms } from "../../components/tables/rooms/TableRooms.jsx";
import { MainStyled } from "../stytedPages.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsListFromAPIThunk } from "../../features/rooms/RoomsThunk.ts";

import {
  getRoomsData,
  getRoomsStatus,
} from "../../features/rooms/RoomsSlice.ts";
export const RoomPage = () => {
  const dispatch = useDispatch();
  const roomsData = useSelector(getRoomsData);
  const roomsStatus = useSelector(getRoomsStatus);
  const [RoomsList, setRoomsList] = useState([]);
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
