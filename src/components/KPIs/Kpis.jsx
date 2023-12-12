import {
  DivKpisStyled,
  IconBedStyled,
  SectionElementStyled,
  DivIconStyled,
  DivTextStyled,
  NumberTextStyled,
  TextTextsStyled,
  IconCalendar,
  IconexiStyled,
} from "./kpisStyled.ts";

export const Kpis = () => {
  return (
    <DivKpisStyled>
      <SectionElementStyled>
        <DivIconStyled>
          <IconBedStyled />
        </DivIconStyled>
        <DivTextStyled>
          <NumberTextStyled>8,461</NumberTextStyled>
          <TextTextsStyled>New Booking</TextTextsStyled>
        </DivTextStyled>
      </SectionElementStyled>
      <SectionElementStyled>
        <DivIconStyled>
          <IconCalendar />
        </DivIconStyled>
        <DivTextStyled>
          <NumberTextStyled>963</NumberTextStyled>
          <TextTextsStyled>Scheduled Room</TextTextsStyled>
        </DivTextStyled>
      </SectionElementStyled>
      <SectionElementStyled>
        <DivIconStyled>
          <IconexiStyled />
        </DivIconStyled>
        <DivTextStyled>
          <NumberTextStyled>753</NumberTextStyled>
          <TextTextsStyled>Check In</TextTextsStyled>
        </DivTextStyled>
      </SectionElementStyled>
      <SectionElementStyled>
        <DivIconStyled>
          <IconexiStyled />
        </DivIconStyled>
        <DivTextStyled>
          <NumberTextStyled>516</NumberTextStyled>
          <TextTextsStyled>Check Out</TextTextsStyled>
        </DivTextStyled>
      </SectionElementStyled>
    </DivKpisStyled>
  );
};
