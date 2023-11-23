import { MainStyled } from "../stytedPages";
import {
  FormStyled,
  InputStyled,
  TexterraStyled,
  LabelStyled,
  SubmitStyled,
} from "./EditUserStiled";
import { useNavigate } from "react-router-dom";
const EditUser = () => {
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/home");
    }, 300);
  };
  return (
    <MainStyled>
      <FormStyled onClick={HandleSubmit}>
        <InputStyled type="text" placeholder="William Johason" />
        <inInputStyledput type="email" placeholder="williamjohn@mail.com" />
        <InputStyled type="number" placeholder="phone number" />

        <TexterraStyled placeholder="Functions description"></TexterraStyled>
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
