import styled from "styled-components";
import { NavLink } from "react-router-dom";
const DivError = styled.div`
  width: 50%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 5rem;
  h1 {
    font-size: 6rem;
    color: red;
  }
  h2 {
    font-size: 3rem;
    color: #135846;
  }
  p {
    font-size: 1.5rem;
    color: #135846;
  }
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: red;
  cursor: pointer;
`;
export const ErrorPage = () => {
  return (
    <DivError>
      <h1>404</h1>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <LinkStyled to={"/home"}>Go to Home</LinkStyled>
    </DivError>
  );
};
