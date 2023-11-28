import FilterRooms from "../../components/filters/room/FilterRooms";
import { TableRooms } from "../../components/tables/rooms/TableRooms";
import { MainStyled } from "../stytedPages";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsListFromAPIThunk } from "../../features/rooms/RoomsThunk.js";
import {
  getRoomsData,
  getRoomsStatus,
} from "../../features/rooms/RoomsSlice.js";
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
