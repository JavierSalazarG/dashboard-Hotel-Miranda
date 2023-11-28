import styled from "styled-components";

export const TableStyled = styled.table`
  margin: 0 auto;
  width: 100%;
  background: #fff;
  padding: 1.25rem;
  border-radius: 1.25rem;
`;
export const TbodyStyled = styled.tbody``;

export const TrTitleStyled = styled.tr`
  height: 5.5rem;
  border-bottom: 2px solid #f5f5f5;

  th {
    text-align: left;
  }
`;
export const TrStyled = styled.tr`
  height: 5.5rem;
  cursor: pointer;
  border-bottom: 2px solid #f5f5f5;
  &:hover {
    box-shadow: 8rem;
    box-shadow: 0px 10px 30px #00000114;
  }
  th {
    text-align: left;
    padding-left: 3rem;
    padding-right: 2rem;
  }
  td {
    width: auto;
    text-align: start;
    padding-left: 0.5rem;
    padding-right: 2rem;
    border: none;
  }
`;
export const Spinner = styled.div`
  position: absolute;
  z-index: 999;
  top: 60%;
  left: 50%;
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
export const TrContactStyled = styled.tr`
  height: 5.5rem;
  border-bottom: 2px solid #f5f5f5;
  &:hover {
    box-shadow: 8rem;
    box-shadow: 0px 10px 30px #00000114;
  }

  td {
    width: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: start;
    padding-left: 1rem;
    padding-right: 2rem;
    border: none;
    p {
      max-width: 30rem;
    }
  }
`;

export const DivImgStyled = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
`;
export const ImgStyled = styled.img`
  width: 9.3rem;
  height: 4.8rem;
  border-radius: 8px;
  margin-right: 1rem;
`;
export const ImgPerfilStyled = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 8px;
  margin-right: 1rem;
`;
export const PStyled = styled.p`
  color: #799283;
  font-size: 0.8rem;
`;
export const DivTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PnumberStyled = styled.p`
  color: #799283;
  font-size: 0.8rem;
`;
export const IdBoockingStyled = styled.p`
  color: #799283;
  font-size: 0.8rem;
`;
export const AvailibleStyle = styled.span`
  background: #5ad07a;
  height: 3rem;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 12px;
`;

export const BookedStyle = styled.span`
  background: #e23428;
  height: 3rem;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 12px;
`;
export const ActiveStyle = styled.span`
  font-weight: 700;
  height: 3rem;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5ad07a;
  border-radius: 12px;
`;

export const InactiveStyle = styled.span`
  font-weight: 700;
  height: 3rem;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e23428;
  border-radius: 12px;
`;

export const TdButtonsStyled = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;

export const ButtonArchivetyled = styled.button`
  color: #e23428;
  font-weight: 600;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const SpanStatusStyled = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bg};
  font-weight: 600;
  background-color: transparent;
`;
export const ButtonNotesStyled = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  color: #212121;
  cursor: pointer;
  background-color: #eef9f2;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  &:hover {
    box-shadow: 0px 10px 30px #00000114;
  }
`;
export const SpanNotesStyles = styled.span`
  width: 100%;
  height: 100%;
  border: none;
  color: #799283;
  background: transparent;
  text-align: center;
  padding: 1rem;
  padding-right: 2rem;
  border-radius: 12px;
  border: 1px solid #799283;
  &:hover {
    cursor: no-drop;
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
