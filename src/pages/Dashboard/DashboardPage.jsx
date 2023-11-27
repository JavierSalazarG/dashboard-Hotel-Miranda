import { MainStyled } from "../stytedPages.js";
import { Kpis } from "../../components/KPIs/Kpis.jsx";
import Comment from "../../components/comment/Comment.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsListFromAPIThunk } from "../../features/comments/commentThunk.js";
import {
  getCommentData,
  getCommentStatus,
} from "../../features/comments/commentSlice.js";
import { useEffect, useState } from "react";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const [CommentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const CommentData = useSelector(getCommentData);
  const CommentStatus = useSelector(getCommentStatus);

  useEffect(() => {
    if (CommentStatus === "idle" || CommentStatus === "pending") {
      dispatch(getCommentsListFromAPIThunk());
    } else if (CommentStatus === "fulfilled") {
      setLoading(false);
      setCommentList(CommentData);
    } else if (CommentStatus === "rejected") {
      console.error("Error fetching comments:", CommentStatus);
    }
    setLoading(false);
  }, [dispatch, CommentData, CommentStatus]);

  return (
    <MainStyled>
      <Kpis />
      <Comment loading={loading} commentList={CommentList} />
    </MainStyled>
  );
};
