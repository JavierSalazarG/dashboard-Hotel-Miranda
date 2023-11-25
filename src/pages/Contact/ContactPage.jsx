import { MainStyled, MarginStyled } from "../stytedPages";
import Comment from "../../components/comment/Comment.jsx";
import { Contact } from "../../components/tables/Contact.jsx";
import ContactFilter from "../../components/filters/contact/contactFilter.jsx";

const ContactPage = () => {
  return (
    <MainStyled>
      <Comment />
      <MarginStyled></MarginStyled>
      <ContactFilter />
      <Contact />
    </MainStyled>
  );
};

export default ContactPage;
