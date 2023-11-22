import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1.25rem;
  border-radius: 1.25rem;
  display: flex;
`;
export const TbodyStyled = styled.tbody`
  width: 100%;
`;

export const TrTitleStyled = styled.tr`
  height: 4.5rem;
  border-bottom: 2px solid #f5f5f5;
  width: 100%;

  th {
    width: 10rem !important;
    text-align: left;
    width: auto;
    padding-right: 3rem;
    padding-left: 1rem;
  }
`;
export const TrStyled = styled.tr`
  width: 100%;
  height: 7.5rem;

  td {
    width: 6rem;
    height: 100%;
  }
`;

export const ImgHabitacionStyled = styled.img`
  width: 9.3rem;
  height: 4.8rem;
  border-radius: 8px;
  margin-right: 1rem;
`;
export const ThFacilitiesStyled = styled.th`
  width: 6rem !important;
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
