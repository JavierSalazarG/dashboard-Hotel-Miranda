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
    padding-left: 2rem;
    padding-right: 2rem;
  }
  td {
    width: auto;
    text-align: start;

    border: none;
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
