import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FilterRoomsContext } from "../../contexts/rooms";
//styled ------------------
import {
  ContainerStyled,
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
  DivGeneralStyled,
  HeaderStyled,
  SectionTittleStyled,
  IconMenuStyled,
  H2TitleStyled,
  SectionButtonsStyled,
  ButtonsHeaderStyled,
  IconEmailsStyled,
  IconBellStyled,
  SpanAllertStyled,
} from "./LayautStyled";
//========================

//imgs ---------------
import Logo from "../../../public/logo/logo.png";
import ImgPefil from "../../../public/navbar/perfil.png";
//============================
const Layout = () => {
  const { setAll } = useContext(FilterRoomsContext);
  const navigate = useNavigate();
  const [isMenuVisible, setMenuVisible] = useState(true);
  let location = useLocation();
  let locationmal = location.pathname;
  let locationAcctual = locationmal.substring(1);

  if (locationAcctual === "user/new") {
    locationAcctual = "New Empoyee";
  } else if (locationAcctual === "profile/edit") {
    locationAcctual = "Edit Profile";
  } else if (locationAcctual === "room/new") {
    locationAcctual = "New Room";
  } else if (locationAcctual.startsWith("Booking/")) {
    locationAcctual = "Booking Details";
  }
  const HandleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const Handleprofile = () => {
    navigate("/profile/edit");
  };
  return (
    <ContainerStyled>
      {isMenuVisible && (
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
              <LinkNavStyles to={"/home"}>Dashboard</LinkNavStyles>
            </LiNavStyles>
            <LiNavStyles>
              <IconRoomStyles />
              <LinkNavStyles onClick={setAll} to={"/rooms"}>
                Room
              </LinkNavStyles>
            </LiNavStyles>
            <LiNavStyles>
              <IconBookingsStyles />
              <LinkNavStyles to={"/Bookings"}>Bookings</LinkNavStyles>
            </LiNavStyles>
            <LiNavStyles>
              <IconGuestStyles />
              <LinkNavStyles onClick={setAll} to={"/users"}>
                Users
              </LinkNavStyles>
            </LiNavStyles>
            <LiNavStyles>
              <IconConciergeStyles />
              <LinkNavStyles to={"/Contact"}>Contact</LinkNavStyles>
            </LiNavStyles>
          </UlNavStyles>
          <ProfileStyled>
            <ImgProfileStyled src={ImgPefil} />
            <NameProfileStyled>William Johanson</NameProfileStyled>
            <EmailProfileStyled>williamjohn@mail.com</EmailProfileStyled>
            <ButtonlProfileStyled onClick={Handleprofile}>
              Edit
            </ButtonlProfileStyled>
          </ProfileStyled>
          <FooterStyled>
            <ParrafStyled>Travl Hotel Admin Dashboard</ParrafStyled>
            <CopyrightStyled>© 2020 All Rights Reserved</CopyrightStyled>
            <CopyrightStyled>Made with ♥ by Peterdraw</CopyrightStyled>
          </FooterStyled>
        </NavStyles>
      )}

      <DivGeneralStyled>
        <HeaderStyled>
          <SectionTittleStyled>
            <IconMenuStyled onClick={HandleMenu} />
            <H2TitleStyled>{locationAcctual}</H2TitleStyled>
          </SectionTittleStyled>
          <SectionButtonsStyled>
            <ButtonsHeaderStyled>
              <SpanAllertStyled>3</SpanAllertStyled>
              <IconEmailsStyled />
            </ButtonsHeaderStyled>
            <ButtonsHeaderStyled>
              <SpanAllertStyled>5</SpanAllertStyled>
              <IconBellStyled />
            </ButtonsHeaderStyled>
          </SectionButtonsStyled>
        </HeaderStyled>
        <Outlet />
      </DivGeneralStyled>
    </ContainerStyled>
  );
};

export default Layout;
