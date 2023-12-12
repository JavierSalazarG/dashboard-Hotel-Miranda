import { useNavigate } from "react-router-dom";
import {
  InputStyles,
  DivLoginStyles,
  LabelStyles,
  PLoginStyles,
  FormStyles,
  SubmitStyles,
  IconEmail,
  IconPassword,
} from "./LoginStyled.ts";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.jsx";

//imgs--------------
import Logo from "../../../public/logo/logo.png";
import { useState } from "react";
//===========================
export const LoginPage = () => {
  const [emailLocal, setEmaiLocal] = useState("");

  const [passwordLocal, setpasswordLocal] = useState("");
  const { Login, setEmail, setPassword } = useContext(UserContext);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmaiLocal(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setpasswordLocal(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (emailLocal !== "admin@admin.com" || passwordLocal !== "admin") {
      return alert(
        "error al entrar, correo: admin@admin.com y password: admin"
      );
    } else {
      Login(emailLocal, passwordLocal);
    }
    navigate("/home");
  };

  return (
    <>
      <DivLoginStyles>
        <img src={Logo} />
        <h1>Travl</h1>
        <PLoginStyles>Hotel Admin Dashboard</PLoginStyles>
        <FormStyles onSubmit={handleLogin}>
          <LabelStyles>
            <IconEmail />{" "}
            <InputStyles
              data-cy="inputUserEmail"
              value={emailLocal}
              onChange={handleEmailChange}
              type="email"
            />
          </LabelStyles>
          <LabelStyles>
            <IconPassword />{" "}
            <InputStyles
              data-cy="inputPasswordUser"
              value={passwordLocal}
              onChange={handlePasswordChange}
              type="text"
            />
          </LabelStyles>
          <SubmitStyles data-cy="loginButton" type="submit" value={"Login"} />
        </FormStyles>
      </DivLoginStyles>
    </>
  );
};
