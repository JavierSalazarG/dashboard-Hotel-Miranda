import React, { forwardRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainStyled } from "../stytedPages";
import { useDispatch } from "react-redux";
import { getUsersListFromAPIThunk } from "../../features/users/usersThunk.js";
import { updateUsers } from "../../features/users/UsersSlice.js";
import { useSelector } from "react-redux";
import {
  getUsersData,
  getUsersStatus,
} from "../../features/users/UsersSlice.js";
import {
  FormStyled,
  InputStyled,
  LabelStyled,
  SubmitStyled,
} from "./EditEmployeeStyled.ts";
const EditEmployeepage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const usersData = useSelector(getUsersData);
  const Userstatus = useSelector(getUsersStatus);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contact: "",
  });
  console.log(formData.nombre);
  useEffect(() => {
    if (Userstatus === "idle" || Userstatus === "pending") {
      dispatch(getUsersListFromAPIThunk());
    } else if (Userstatus === "fulfilled") {
      const userWithId = usersData.find((user) => user.id === id);
      setFormData(userWithId || {});
    } else if (Userstatus === "rejected") {
      console.error("Error fetching users:", Userstatus);
    }
  }, [id, Userstatus, dispatch, usersData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <MainStyled>
      <FormStyled>
        <LabelStyled>
          Profile Picture
          <input type="file" id="profilePicture" accept="image/*" />
        </LabelStyled>
        <InputStyled
          type="text"
          onChange={handleOnChange}
          defaultValue={formData.nombre}
        />
        <InputStyled
          type="email"
          onChange={handleOnChange}
          defaultValue={formData.email}
        />
        <InputStyled
          type="number"
          onChange={handleOnChange}
          defaultValue={formData.contact}
        />

        <SubmitStyled type="submit" value="save" />
      </FormStyled>
    </MainStyled>
  );
};

export default EditEmployeepage;
