import styled from "styled-components";
import { NavLink } from "react-router-dom";
interface ButtonOrdenProps {
  color?: string;
  weight?: string;
  px?: string;
}
export const DivOptionsStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
export const DivButtonsNewstyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 1rem;
`;
export const ButtonOrdenStyled = styled.button<ButtonOrdenProps>`
  width: 11rem;
  text-align: center;
  border: none;
  background: transparent;
  border-bottom: ${(props) => props.px}px solid ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover {
    border-bottom: 2px solid #135846;
    color: #135846;
    font-weight: 600;
  }
`;
export const NavStyled = styled(NavLink)`
  text-decoration: none;
  border-radius: 0.75rem;
  padding: 0.8rem;
  background-color: #135846;
  color: #fff;
`;
export const NewestStyled = styled.button`
  text-decoration: none;
  border-radius: 0.75rem;
  padding: 0.8rem;
  background-color: #fff;
  border: 1px solid #135846;
  color: #135846;
`;
