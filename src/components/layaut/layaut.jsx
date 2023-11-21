import { Outlet } from "react-router-dom";

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
  ImgPerfilHeader,
  FormSeekerStyled,
  LabelSeekerStyled,
  InputSeekerStyled,
  IconSeekerStyled,
  ButtonsHeaderStyled,
  IconHeartStyled,
  IconEmailsStyled,
  IconMessagesStyled,
  IconBellStyled,
  SpanAllertStyled,
} from "./LayautStyled";
//========================
//imgs ---------------
import Logo from "../../../public/logo/logo.png";
import ImgPefil from "../../../public/navbar/perfil.png";
//============================
const Layout = () => {
  return (
    <ContainerStyled>
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

      <DivGeneralStyled>
        <HeaderStyled>
          <SectionTittleStyled>
            <IconMenuStyled />
            <H2TitleStyled>Concierge List</H2TitleStyled>
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
              <IconHeartStyled />
            </ButtonsHeaderStyled>
            <ButtonsHeaderStyled>
              <SpanAllertStyled>3</SpanAllertStyled>
              <IconEmailsStyled />
            </ButtonsHeaderStyled>
            <ButtonsHeaderStyled>
              <SpanAllertStyled>5</SpanAllertStyled>
              <IconBellStyled />
            </ButtonsHeaderStyled>
            <ButtonsHeaderStyled>
              <SpanAllertStyled>5</SpanAllertStyled>
              <IconMessagesStyled />
            </ButtonsHeaderStyled>
            <ImgPerfilHeader src={ImgPefil} />
          </SectionButtonsStyled>
        </HeaderStyled>
        <Outlet />
      </DivGeneralStyled>
    </ContainerStyled>
  );
};

export default Layout;
