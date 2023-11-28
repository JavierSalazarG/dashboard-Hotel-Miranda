import { MainStyled } from "../stytedPages";
import { useDispatch } from "react-redux";
import { addUsers } from "../../features/users/UsersSlice.js";
import { useNavigate } from "react-router-dom";
import perfilImage from "../../../public/navbar/perfil.png";
import { v4 as uuidv4 } from "uuid";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
  TexterraStyled,
  LabelStyled,
  SubmitStyled,
} from "./newEmployee.js";
export const NewEployee = () => {
  const navigate = useNavigate();
  const id = uuidv4();
  const dispatch = useDispatch();
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      foto: perfilImage,
      nombre: e.target[0].value,
      id: id,
      email: e.target[1].value,
      start_date: getCurrentDate(),
      description: e.target[3].value,
      contact: e.target[2].value,
      status: true,
    };

    dispatch(addUsers(formData));
    navigate("/rooms");
  };
  return (
    <MainStyled>
      <FormStyled onSubmit={HandleSubmit}>
        <InputStyled type="text" placeholder="Name and Surname" />
        <InputStyled type="email" placeholder="Email" />
        <InputStyled type="number" placeholder="phone number" />
        <SelectStyled>
          <option>...</option>
          <option value="Manager">Manager</option>
          <option value="Recepción">Recepción </option>
          <option value="Servicio de Habitaciones">
            {" "}
            Servicio de Habitaciones
          </option>
        </SelectStyled>
        <TexterraStyled placeholder="Functions description"></TexterraStyled>
        <LabelStyled>
          Profile Picture
          <input type="file" id="profilePicture" accept="image/*" />
        </LabelStyled>
        <InputStyled type="text" placeholder="Password" />
        <SubmitStyled type="submit" value="save" />
      </FormStyled>
    </MainStyled>
  );
};
