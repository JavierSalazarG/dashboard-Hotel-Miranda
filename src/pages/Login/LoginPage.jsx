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
export const LoginPage = () => {
  return (
    <>
      <DivLoginStyles>
        <img src="../../../public/logo/logo.png" />
        <h1>Travl</h1>
        <PLoginStyles>Hotel Admin Dashboard</PLoginStyles>
        <FormStyles>
          <LabelStyles>
            <IconEmail /> <InputStyles type="email" />
          </LabelStyles>
          <LabelStyles>
            <IconPassword /> <InputStyles type="password" />
          </LabelStyles>
          <SubmitStyles type="submit" value={"Login"} />
        </FormStyles>
      </DivLoginStyles>
    </>
  );
};
