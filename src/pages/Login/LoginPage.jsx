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
} from "./LoginStyled";

//imgs--------------
import Logo from "../../../public/logo/logo.png";
import { useState } from "react";
//===========================
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (email !== "admin@admin.com" || password !== "admin") {
      return alert(
        "error al entrar, correo: admin@admin.com y password: admin"
      );
    } else {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
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
              value={email}
              onChange={handleEmailChange}
              type="email"
            />
          </LabelStyles>
          <LabelStyles>
            <IconPassword />{" "}
            <InputStyles
              value={password}
              onChange={handlePasswordChange}
              type="text"
            />
          </LabelStyles>
          <SubmitStyles type="submit" value={"Login"} />
        </FormStyles>
      </DivLoginStyles>
    </>
  );
};
