import { Outlet } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";

//styled ------------------
import {
  NavStyles,
  ALogoStyles,
  ImgLogoStyles,
  PLogoStyles,
  H1LogoStyles,
  UlNavStyles,
  LiNavStyles,
  LinkNavStyles,
  IconCashboardStyles,
  IconRoomStyles,
  IconConciergeStyles,
  IconGuestStyles,
  IconBookingsStyles,
  FooterStyled,
  ParrafStyled,
  CopyrightStyled,
  ProfileStyled,
  ImgProfileStyled,
  NameProfileStyled,
  EmailProfileStyled,
  ButtonlProfileStyled,
} from "./LayautStyled";
//========================
//imgs ---------------
import Logo from "../../../public/logo/logo.png";
//============================
const Layout = () => {
  return (
    <>
      <NavStyles>
        <ALogoStyles>
          <ImgLogoStyles src={Logo} />
          <div>
            <H1LogoStyles>travl</H1LogoStyles>
            <PLogoStyles>Hotel Admin Dashboard</PLogoStyles>
          </div>
        </ALogoStyles>
        <UlNavStyles>
          <LiNavStyles>
            <IconCashboardStyles />
            <LinkNavStyles to={"/"}>Dashboard</LinkNavStyles>
          </LiNavStyles>
          <LiNavStyles>
            <IconRoomStyles />
            <LinkNavStyles to={"/Room"}>Room</LinkNavStyles>
          </LiNavStyles>
          <LiNavStyles>
            <IconBookingsStyles />
            <LinkNavStyles to={"/Bookings"}>Bookings</LinkNavStyles>
          </LiNavStyles>
          <LiNavStyles>
            <IconGuestStyles />
            <LinkNavStyles to={"/Guest"}>Guest</LinkNavStyles>
          </LiNavStyles>
          <LiNavStyles>
            <IconConciergeStyles />
            <LinkNavStyles to={"/Concierge"}>Concierge</LinkNavStyles>
          </LiNavStyles>
        </UlNavStyles>
        <ProfileStyled>
          <ImgProfileStyled src="../../../public/navbar/perfil.png" />
          <NameProfileStyled>William Johanson</NameProfileStyled>
          <EmailProfileStyled>williamjohn@mail.com</EmailProfileStyled>
          <ButtonlProfileStyled>Contact Us</ButtonlProfileStyled>
        </ProfileStyled>
        <FooterStyled>
          <ParrafStyled>Travl Hotel Admin Dashboard</ParrafStyled>
          <CopyrightStyled>© 2020 All Rights Reserved</CopyrightStyled>
          <CopyrightStyled>Made with ♥ by Peterdraw</CopyrightStyled>
        </FooterStyled>
      </NavStyles>

      <div>
        <header>
          <RiMenu2Fill />
          <h2>Concierge List</h2>
          <form>
            <label>
              <input type="text" />
              <HiMagnifyingGlass />
            </label>
          </form>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <MdOutlineEmail />
          </button>
          <button>
            <CiBellOn />
          </button>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <MdOutlineMessage />
          </button>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
