import { MainStyled, MarginStyled } from "../stytedPages";
import Comment from "../../components/comment/Comment.jsx";
import { Contact } from "../../components/tables/Contact.jsx";
import ContactFilter from "../../components/filters/contact/contactFilter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsListFromAPIThunk } from "../../features/comments/commentThunk.js";
import {
  getCommentData,
  getCommentStatus,
} from "../../features/comments/commentSlice.js";
import { useState, useEffect } from "react";

const ContactPage = () => {
  const dispatch = useDispatch();
  const [CommentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const CommentData = useSelector(getCommentData);
  const CommentStatus = useSelector(getCommentStatus);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (CommentStatus === "idle" || CommentStatus === "pending") {
          await dispatch(getCommentsListFromAPIThunk());
        } else if (CommentStatus === "fulfilled") {
          setCommentList(CommentData);
        } else if (CommentStatus === "rejected") {
          console.error("Error fetching comments:", CommentStatus);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, CommentData, CommentStatus]);
  return (
    <MainStyled>
      <Comment CommentList={CommentList} loading={loading} />
      <MarginStyled></MarginStyled>
      <ContactFilter />
      <Contact CommentList={CommentList} loading={loading} />
    </MainStyled>
  );
};

export default ContactPage;
