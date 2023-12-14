import React, { forwardRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainStyled } from "../stytedPages.ts";
import { getUsersListFromAPIThunk } from "../../features/users/usersThunk.ts";
import { useSelector } from "react-redux";
import {
  getUsersData,
  getUsersStatus,
} from "../../features/users/UsersSlice.ts";
import {
  FormStyled,
  InputStyled,
  LabelStyled,
  SubmitStyled,
} from "./EditEmployeeStyled.ts";
import { useAppDispatch } from "../../app/store.ts";
import { UsersInterface } from "../../interfaces/users/users.ts";
interface formDataInterface {
  nombre: string | null;
  email: string | null;
  contact: string | null;
  key?: string | null;
}
const EditEmployeepage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const usersData = useSelector(getUsersData);
  const Userstatus = useSelector(getUsersStatus);
  const [formData, setFormData] = useState<formDataInterface>({
    nombre: "",
    email: "",
    contact: "",
  });
  console.log(formData.nombre);
  useEffect(() => {
    if (Userstatus === "idle" || Userstatus === "pending") {
      dispatch(getUsersListFromAPIThunk());
    } else if (Userstatus === "fulfilled") {
      const userWithId = usersData.find(
        (user: UsersInterface) => user.id === id
      );
      setFormData(userWithId || {});
    } else if (Userstatus === "rejected") {
      console.error("Error fetching users:", Userstatus);
    }
  }, [id, Userstatus, dispatch, usersData]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          defaultValue={formData.nombre ?? ""}
        />
        <InputStyled
          type="email"
          onChange={handleOnChange}
          defaultValue={formData.email ?? ""}
        />
        <InputStyled
          type="number"
          onChange={handleOnChange}
          defaultValue={formData.contact ?? ""}
        />

        <SubmitStyled type="submit" value="save" />
      </FormStyled>
    </MainStyled>
  );
};

export default EditEmployeepage;
