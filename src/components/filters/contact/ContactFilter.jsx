import { useContext } from "react";
import { Archived } from "../../../contexts/archived";
import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NewestStyled,
} from "../roomsFilterStyled";

const ContactFilter = () => {
  const { isArchived, setArchived, setAllContacts } = useContext(Archived);

  return (
    <DivOptionsStyled>
      <div>
        {isArchived ? (
          <ButtonOrdenStyled
            $color="#d4d4d4"
            $weight="400"
            $px="1"
            onClick={setAllContacts}
          >
            All Contacts
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setAllContacts}
          >
            All Contacts
          </ButtonOrdenStyled>
        )}
        {!isArchived ? (
          <ButtonOrdenStyled
            $color="#d4d4d4"
            $weight="400"
            $px="1"
            onClick={setArchived}
          >
            Archived
          </ButtonOrdenStyled>
        ) : (
          <ButtonOrdenStyled
            $color="#135846"
            $weight="600"
            $px="2"
            onClick={setArchived}
          >
            Archived
          </ButtonOrdenStyled>
        )}
      </div>
      <DivButtonsNewstyled>
        <NewestStyled>Newest</NewestStyled>
      </DivButtonsNewstyled>
    </DivOptionsStyled>
  );
};

export default ContactFilter;
