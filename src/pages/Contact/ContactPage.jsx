import React from "react";
import { MainStyled, MarginStyled } from "../stytedPages";
import Comment from "../../components/comment/Comment.jsx";
import { Contact } from "../../components/tables/Contact.jsx";
const ContactPage = () => {
  return (
    <MainStyled>
      <Comment />
      <MarginStyled></MarginStyled>
      <Contact />
    </MainStyled>
  );
};

export default ContactPage;
