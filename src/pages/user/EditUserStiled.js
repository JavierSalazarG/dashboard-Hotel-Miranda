import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  height: 100%;
`;
export const InputStyled = styled.input`
  width: 90%;
  max-width: 30rem;
  border: none;
  padding: 1rem;
  color: #393939;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 10px 25px #00000114;
`;
export const TexterraStyled = styled.textarea`
  width: 90%;
  max-width: 30rem;
  height: 10rem;
  border: none;
  padding: 1rem;
  color: #393939;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 10px 25px #00000114;
`;
export const LabelStyled = styled.label`
  width: 90%;
  max-width: 30rem;
  height: 7rem;
  border: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: #393939;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 10px 25px #00000114;
  gap: 1rem;
  input {
    align-self: center;
  }
`;

export const SubmitStyled = styled.input`
  width: 30%;
  max-width: 20rem;
  cursor: pointer;
  border: none;
  padding: 1rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 10px 35px #00000114;
  background-color: #799283;
`;
