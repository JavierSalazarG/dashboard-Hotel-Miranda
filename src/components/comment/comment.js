import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
export const DivCommentStyled = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  width: 100%;
  max-width: 70rem;
  height: 25rem;
  background-color: #fff;
  padding: 1.8rem;
  border-radius: 20px;
  h3 {
    color: #393939;
    font-size: 1.25rem;
    font-weight: 400;
  }
`;
export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  gap: 1rem;
`;
export const SwiperSlideStyled = styled(SwiperSlide)`
  width: 25rem;
  height: 18rem;
  border-radius: 20px;
  box-shadow: 0px 16px 30px #00000014;
  margin-top: 1.8rem;
  padding: 1.5rem;

  p {
    color: #4e4e4e;
    font-size: 0.8rem;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    div {
      display: flex;
      flex-direction: column;
      margin-top: 0;
      width: fit-content;
      text-align: start;
      margin-left: 1rem;
    }
  }
`;
export const ImgStyled = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 8px;
`;
