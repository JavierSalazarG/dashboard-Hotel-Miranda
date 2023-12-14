import React, { FormEvent } from "react";
import { MainStyled } from "../stytedPages";
import { useDispatch } from "react-redux";
import { addUsers } from "../../features/users/UsersSlice";
import { useNavigate } from "react-router-dom";
import perfilImage from "../../assets/navbar/perfil.png";

import { v4 as uuidv4 } from "uuid";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
  TexterraStyled,
  LabelStyled,
  SubmitStyled,
} from "./newEmployee";

interface FormEmployee {
  foto: string;
  nombre: string;
  id: string;
  email: string;
  start_date: string;
  description: string;
  contact: string;
  status: boolean;
}

export const NewEmployee: React.FC = () => {
  const navigate = useNavigate();
  const id = uuidv4();
  const dispatch = useDispatch();

  const getCurrentDate = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const newId = (): string => {
    const newId = id.slice(0, 5);
    return newId;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData: FormEmployee = {
      foto: perfilImage, // Usa la importación directa de la imagen
      nombre: (e.currentTarget[0] as HTMLInputElement).value,
      id: newId(),
      email: (e.currentTarget[1] as HTMLInputElement).value,
      start_date: getCurrentDate(),
      description: (e.currentTarget[3] as HTMLInputElement).value,
      contact: (e.currentTarget[2] as HTMLInputElement).value,
      status: true,
    };

    dispatch(addUsers(formData));
    navigate("/users");
  };

  return (
    <MainStyled>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled type="text" placeholder="Name and Surname" />
        <InputStyled type="email" placeholder="Email" />
        <InputStyled type="number" placeholder="Phone number" />
        <SelectStyled>
          <option>...</option>
          <option value="Manager">Manager</option>
          <option value="Recepción">Recepción</option>
          <option value="Servicio de Habitaciones">
            Servicio de Habitaciones
          </option>
        </SelectStyled>
        <TexterraStyled placeholder="Functions description" />
        <LabelStyled>
          Profile Picture
          <input type="file" id="profilePicture" accept="image/*" />
        </LabelStyled>
        <InputStyled type="text" placeholder="Password" />
        <SubmitStyled type="submit" value="Save" />
      </FormStyled>
    </MainStyled>
  );
};
