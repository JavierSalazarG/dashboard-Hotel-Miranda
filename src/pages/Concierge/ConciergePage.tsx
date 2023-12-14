import React from "react";
import ConciergeFilter from "../../components/filters/concierge/ConciergeFilter.jsx";
import { Concierge } from "../../components/tables/Concierge.tsx";
import { MainStyled } from "../stytedPages.ts";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsersListFromAPIThunk } from "../../features/users/usersThunk.ts";

import {
  getUsersData,
  getUsersStatus,
} from "../../features/users/UsersSlice.ts";
import { useAppDispatch } from "../../app/store.ts";
export const ConciergePage = () => {
  const dispatch = useAppDispatch();
  const usersData = useSelector(getUsersData);
  const Userstatus = useSelector(getUsersStatus);
  const [UsersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Userstatus === "idle" || Userstatus === "pending") {
          await dispatch(getUsersListFromAPIThunk());
        } else if (Userstatus === "fulfilled") {
          setUsersList(usersData);
        } else if (Userstatus === "rejected") {
          console.error("Error fetching comments:", Userstatus);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, usersData, Userstatus]);
  return (
    <MainStyled>
      <ConciergeFilter />
      <Concierge loading={loading} UsersList={UsersList} />
    </MainStyled>
  );
};
