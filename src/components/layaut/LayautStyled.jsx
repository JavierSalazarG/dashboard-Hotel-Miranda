import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuCalendarCheck2 } from "react-icons/lu";
import { FiKey } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { HiMiniPuzzlePiece } from "react-icons/hi2";

const StylesIcons = `
width: 24px;
  height: 24px;
  color: #799283;
  margin-right: 1rem;
   &:active {
    color: red;
  }
`;

//logo-------------------
export const NavStyles = styled.nav`
  width: 100%;
  max-width: 18rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  box-shadow: 13px 3px 40px #00000005;
  padding-left: 5rem;
`;

export const ALogoStyles = styled.nav`
  width: 100%;
  height: 7.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const ImgLogoStyles = styled.img`
  width: 3rem;
  margin-right: 1rem;
`;

export const H1LogoStyles = styled.h1`
  color: #212121;
  font-size: 1.5rem;
`;

export const PLogoStyles = styled.p`
  color: #5d5449;
  font-size: 0.7rem;
`;
//===============================

//Link -------------------------

export const UlNavStyles = styled.ul`
  width: 100%;
  margin-top: 2rem;
  height: 100%;
  max-height: 37rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const LiNavStyles = styled.li`
  width: 100%;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 4rem;

  cursor: pointer;
  transition: border-left 0.2s ease;
`;
export const LinkNavStyles = styled(NavLink)`
  text-decoration: none;
  color: #799283;
  transition: color 0.2 ease;
`;

//icons----------------------

export const IconCashboardStyles = styled(LuLayoutDashboard)`
  ${StylesIcons}
`;
export const IconRoomStyles = styled(FiKey)`
  ${StylesIcons}
`;
export const IconBookingsStyles = styled(LuCalendarCheck2)`
  ${StylesIcons}
`;
export const IconGuestStyles = styled(IoPersonOutline)`
  ${StylesIcons}
`;
export const IconConciergeStyles = styled(HiMiniPuzzlePiece)`
  ${StylesIcons}
`;
//===========================

//perfil----------------------

export const ProfileStyled = styled.div`
  width: 14rem;
  height: 14rem;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
`;
export const ImgProfileStyled = styled.img`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 8px;
`;
export const NameProfileStyled = styled.p`
  color: #393939;
  font-size: 1rem;
  margin-top: 15px;
`;
export const EmailProfileStyled = styled.p`
  color: #b2b2b2;
  font-size: 0.75rem;
  margin-top: 9px;
`;
export const ButtonlProfileStyled = styled.button`
  height: 2.9rem;
  width: 9.8rem;
  border: none;
  margin-top: 16px;
  background: #ebf1ef 0% 0% no-repeat padding-box;
  border-radius: 8px;
  color: #135846;
  font-size: 0.9rem;
  font-weight: 600;
`;

//=============================

//footer -------------------
export const FooterStyled = styled.footer`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin-top: 3.8rem;
`;
export const ParrafStyled = styled.footer`
  color: #212121;
  font-size: 1rem;
  font-weight: 600;
`;
export const CopyrightStyled = styled.footer`
  color: #799283;
  font-size: 0.8rem;
`;
//====================================
