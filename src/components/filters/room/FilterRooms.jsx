import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NavStyled,
  NewestStyled,
} from "../roomsFilterStyled";
const FilterRooms = () => {
  return (
    <DivOptionsStyled>
      <div>
        <ButtonOrdenStyled>All Rooms</ButtonOrdenStyled>
        <ButtonOrdenStyled>Active Employee</ButtonOrdenStyled>
        <ButtonOrdenStyled>Inactive Employee</ButtonOrdenStyled>
      </div>
      <DivButtonsNewstyled>
        <NavStyled to={"/room/new"}>+ New Room</NavStyled>
        <NewestStyled>Newest</NewestStyled>
      </DivButtonsNewstyled>
    </DivOptionsStyled>
  );
};

export default FilterRooms;
