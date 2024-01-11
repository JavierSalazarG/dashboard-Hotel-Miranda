import React, { useContext } from "react";
import { ArchivedProvider } from "../../../contexts/archived";
import {
  DivOptionsStyled,
  DivButtonsNewstyled,
  ButtonOrdenStyled,
  NewestStyled,
} from "../roomsFilterStyled";

const ContactFilter: React.FC = () => {
  const { isArchived, setArchived, setAllContacts } =
    useContext(ArchivedProvider);

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
