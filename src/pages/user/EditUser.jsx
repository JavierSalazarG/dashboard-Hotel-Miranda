import { MainStyled } from "../stytedPages.ts";
import {
  FormStyled,
  InputStyled,
  LabelStyled,
  SubmitStyled,
} from "./EditUserStiled.ts";
import { useNavigate } from "react-router-dom";
const EditUser = () => {
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();

    navigate("/home");
  };
  return (
    <MainStyled>
      <FormStyled onSubmit={HandleSubmit}>
        <InputStyled type="text" placeholder="William Johason" />
        <inInputStyledput type="email" placeholder="williamjohn@mail.com" />
        <InputStyled type="number" placeholder="phone number" />
        <LabelStyled>
          Profile Picture
          <input type="file" id="profilePicture" accept="image/*" />
        </LabelStyled>

        <SubmitStyled type="submit" value="save" />
      </FormStyled>
    </MainStyled>
  );
};

export default EditUser;
