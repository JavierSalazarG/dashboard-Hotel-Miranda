import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
interface BookingProps {
  $bg?: string;
}
export const DivGeneralStyled = styled.div`
  width: 100%;
  max-width: 87.5rem;
  margin: 0 auto;
  max-height: 50rem;
  background-color: #fff;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0px 20px 30px #00000014;
`;
export const SectionStyled = styled.section`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const H3NombreStyled = styled.h3`
  color: #212121;
  font-size: 1.8rem;
  text-align: left;
  width: 80%;
  align-self: center;
`;
export const PIdStyled = styled.p`
  color: #799283;
  font-size: 0.8rem;
  margin-top: 0.8rem;
  text-align: left;
  width: 80%;
  align-self: center;
`;
export const TableStyled = styled.table`
  margin-top: 0.8rem;
  text-align: left;
  width: 80%;
  align-self: center;
  height: 2rem;
  margin-bottom: 2rem;
  th {
    color: #6e6e6e;
    font-size: 0.8rem;
  }
  td {
    color: #212121;
    font-weight: 600;
    height: 3rem;
  }
`;

export const TdStyled = styled.td`
  color: #212121;
  font-size: 1.5rem !important;

  p {
    color: #799283;
    font-size: 0.8rem;
  }
`;
export const DivDatesRoomStyled = styled.div`
  border-top: 2px solid #ebebeb;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 0.8rem;
    color: #363636;
  }
`;
export const SpanStatusStyled= styled.span<BookingProps> `
  position: relative;
  align-self: flex-end;
  font-weight: 600;
  z-index: 99;
  transform: rotate(45deg);
  width: 20rem;
  height: 5rem;
  left: 9rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: ${(props) => props.$bg};
  justify-content: center;
  top: -2rem;
  text-align: center;
  box-shadow: 0px 20px 30px #00000014;
`;
export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  z-index: 9;
`;
export const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
  }
`;
export const DivDescriptionStyled = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
  position: relative;
  left: 100%;
  bottom: 3rem;
  color: #363636;
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;
