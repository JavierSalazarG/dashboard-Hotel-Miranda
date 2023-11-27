import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
export const DivCommentStyled = styled.div`
  margin: 0 auto;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

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
export const Spinner = styled.div`
  position: absolute;
  z-index: 999;
  top: 8rem;
  left: 45%;
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border-left-color: #135846;

    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  
`;

export const PopUpStyled = styled.span`
  width: 100%;
  max-width: 50rem;
  height: 25rem;
  padding: 3rem;
  background: #fff;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  top: 30%;
  margin-left: 5rem;
  z-index: 99;
  box-shadow: 0px 16px 30px rgba(40, 39, 40, 0.44);

  h3 {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  span {
    margin-bottom: 2rem;
    color: #4e4e4e;
  }

  button {
    padding: 1rem;
    width: fit-content;
    margin-top: auto;
    align-self: center;
    border-radius: 12px;
    border: none;
    color: #135846;
    background: #ebf1ef;
    cursor: pointer;
  }
`;
