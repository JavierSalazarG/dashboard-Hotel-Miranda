import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuCalendarCheck2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FiKey } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { HiMiniPuzzlePiece, HiMagnifyingGlass } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
const StylesIcons = `
width: 24px;
  height: 24px;
  color: #799283;
  margin-right: 1rem;
   &:active {
    color: red;
  }
`;
const StylesIconsHeader = `
width: 1.5rem;
  height: 1.5rem;
  align-self: flex-end;
  color: #135846;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #f8f8f8;
`;
//logo-------------------
export const NavStyles = styled.nav`
  width: 18rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  box-shadow: 13px 3px 40px #00000005;
  padding-left: 1rem;
  background-color: #fff;
  padding-bottom: 5rem;
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

  &:hover {
    border-left: 4px solid red;

    ${LinkNavStyles} {
      color: red;
      font-weight: 600;
    }
    ${IconCashboardStyles} {
      color: red;
      margin-left: 1rem;
    }
    ${IconRoomStyles} {
      color: red;
      margin-left: 1rem;
    }
    ${IconBookingsStyles} {
      color: red;
      margin-left: 1rem;
    }
    ${IconGuestStyles} {
      color: red;
      margin-left: 1rem;
    }
    ${IconConciergeStyles} {
      color: red;
      margin-left: 1rem;
    }
  }
`;

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
  cursor: pointer;
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

export const DivGeneralStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
//header----------------

export const HeaderStyled = styled.header`
  width: 100%;
  height: 7.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 10px #00000005;
  background-color: #fff;
`;
export const SectionTittleStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const IconMenuStyled = styled(RiMenu2Fill)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    -webkit-animation: pulsate-bck 0.5s ease-in-out infinite both;
    animation: pulsate-bck 0.5s ease-in-out infinite both;
  }
  @-webkit-keyframes pulsate-bck {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes pulsate-bck {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
export const H2TitleStyled = styled.h2`
  color: #262626;
  font-size: 1.75rem;
`;
export const SectionButtonsStyled = styled.section`
  width: 100%;
  max-width: 26rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImgPerfilHeader = styled.img`
  border-radius: 8px;
  width: 3.75rem;
  height: 3.75rem;
`;
export const FormSeekerStyled = styled.form`
  max-width: 21.9rem;
`;
export const LabelSeekerStyled = styled.label`
  max-width: 21.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fcfcfc;
  border-radius: 12px;
  height: 3.5rem;
`;
export const InputSeekerStyled = styled.input`
  border: none;
  width: 100%;
  padding-left: 1rem;
  outline: none;
  background: transparent;
  height: 3.5rem;
  color: #6e6e6e;
`;
export const IconSeekerStyled = styled(HiMagnifyingGlass)`
  width: 1.5rem;
  height: 1.5rem;
  color: #6e6e6e;
`;
export const ButtonsHeaderStyled = styled.button`
  background: none;
  border: none;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  position: relative;
  bottom: 0.5rem;
`;

//Icons header--------------

export const IconHeartStyled = styled(FaRegHeart)`
  ${StylesIconsHeader}
`;
export const IconMessagesStyled = styled(MdOutlineMessage)`
  ${StylesIconsHeader}
`;
export const IconEmailsStyled = styled(MdOutlineEmail)`
  ${StylesIconsHeader}
`;
export const IconBellStyled = styled(CiBellOn)`
  ${StylesIconsHeader}
`;

export const SpanAllertStyled = styled.span`
  display: none;
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #e23428;
  border-radius: 8px;
  position: relative;
  right: 0.5rem;
`;
//========================
//=============
