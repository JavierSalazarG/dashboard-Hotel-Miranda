import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NavStyled,
  NewestStyled,
} from "../roomsFilterStyled.ts";
import { FilterRoomsContext } from "../../../contexts/rooms";
import { useContext } from "react";
const FilterRooms = () => {
  const { filter, setAll, setActive, setInactive } =
    useContext(FilterRoomsContext);

  return (
    <DivOptionsStyled>
      <div>
        {filter === "All" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setAll}
          >
            All Rooms
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setAll}>All Rooms</ButtonOrdenStyled>
        )}
        {filter === "Active" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setActive}
          >
            Active Employee
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setActive}>
            Active Employee
          </ButtonOrdenStyled>
        )}

        {filter === "Inactive" ? (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setInactive}
          >
            Inactive Employee
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled onClick={setInactive}>
            Inactive Employee
          </ButtonOrdenStyled>
        )}
      </div>
      <DivButtonsNewstyled>
        <NavStyled to={"/room/new"}>+ New Room</NavStyled>
        <NewestStyled>Newest</NewestStyled>
      </DivButtonsNewstyled>
    </DivOptionsStyled>
  );
};

export default FilterRooms;
