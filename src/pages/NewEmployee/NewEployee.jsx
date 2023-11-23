import { MainStyled } from "../stytedPages";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
  TexterraStyled,
  LabelStyled,
  SubmitStyled,
} from "./newEmployee.js";
export const NewEployee = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <MainStyled>
      <FormStyled onSubmit={HandleSubmit}>
        <InputStyled type="text" placeholder="Name and Surname" />
        <inInputStyledput type="email" placeholder="Email" />
        <InputStyled type="number" placeholder="phone number" />
        <SelectStyled>
          <option>...</option>
          <option>Manager</option>
          <option>Recepción </option>
          <option> Servicio de Habitaciones</option>
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
