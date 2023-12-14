import React from "react";
import { MainStyled, MarginStyled } from "../stytedPages.ts";
import Comment from "../../components/comment/Comment.tsx";
import { Contact } from "../../components/tables/Contact.tsx";
import ContactFilter from "../../components/filters/contact/contactFilter.jsx";
import { useSelector } from "react-redux";
import { getCommentsListFromAPIThunk } from "../../features/comments/commentThunk.ts";
import {
  getCommentData,
  getCommentStatus,
} from "../../features/comments/commentSlice.ts";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../app/store.ts";

const ContactPage = () => {
  const dispatch = useAppDispatch();
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
