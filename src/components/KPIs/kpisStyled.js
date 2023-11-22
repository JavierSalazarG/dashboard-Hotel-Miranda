import styled from "styled-components";
import { MdOutlineBed } from "react-icons/md";
import { LuCalendarCheck2 } from "react-icons/lu";
import { BiExit } from "react-icons/bi";

const stylesIcons = `
color: red;
  width: 28px;
  height: 20px;

`;
export const DivKpisStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem;
`;
export const DivIconStyled = styled.div`
  background: #ffedec 0% 0% no-repeat padding-box;
  border-radius: 8px;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconBedStyled = styled(MdOutlineBed)`
  ${stylesIcons}
`;
export const IconCalendar = styled(LuCalendarCheck2)`
  ${stylesIcons}
`;
export const IconexiStyled = styled(BiExit)`
  ${stylesIcons}
`;

export const SectionElementStyled = styled.section`
  width: auto;
  height: 7.8rem;
  box-shadow: 0px 16px 30px #00000014;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 1rem;
  gap: 1.3rem;
  align-items: center;
  cursor: pointer;
  transition: all 3ms ease;

  &:hover {
    background-color: #fff;
  }
  &:hover ${DivIconStyled} {
    background: red;
  }
  &:hover ${DivIconStyled} ${IconBedStyled} {
    color: #fff;
  }
  &:hover ${DivIconStyled} ${IconCalendar} {
    color: #fff;
  }
  &:hover ${DivIconStyled} ${IconexiStyled} {
    color: #fff;
  }
`;

export const DivTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const NumberTextStyled = styled.p`
  color: #393939;
  font-size: 1.8rem;
  font-weight: 800;
`;
export const TextTextsStyled = styled.p`
  color: #787878;
  font-size: 0.8rem;
`;
