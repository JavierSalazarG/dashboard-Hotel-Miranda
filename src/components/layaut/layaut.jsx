import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  FormSeekerStyled,
  LabelSeekerStyled,
  InputSeekerStyled,
  IconSeekerStyled,
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
  const [isMenuVisible, setMenuVisible] = useState(true);
  let location = useLocation();
  let locationmal = location.pathname;
  let locationAcctual = locationmal.substring(1);
  if (locationAcctual === "Concierge/new") {
    locationAcctual = "New Empoyee";
  }
  const HandleMenu = () => {
    setMenuVisible(!isMenuVisible);
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
              <LinkNavStyles to={"/rooms"}>Room</LinkNavStyles>
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
              <LinkNavStyles to={"/Concierges"}>Concierge</LinkNavStyles>
            </LiNavStyles>
          </UlNavStyles>
          <ProfileStyled>
            <ImgProfileStyled src={ImgPefil} />
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
      )}

      <DivGeneralStyled>
        <HeaderStyled>
          <SectionTittleStyled>
            <IconMenuStyled onClick={HandleMenu} />
            <H2TitleStyled>{locationAcctual}</H2TitleStyled>
          </SectionTittleStyled>
          <SectionButtonsStyled>
            <FormSeekerStyled>
              <LabelSeekerStyled>
                <InputSeekerStyled type="text" />
                <IconSeekerStyled />
              </LabelSeekerStyled>
            </FormSeekerStyled>
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
