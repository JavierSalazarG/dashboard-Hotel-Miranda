import {
  DivCommentStyled,
  SwiperStyled,
  SwiperSlideStyled,
  ImgStyled,
  PopUpStyled,
  Spinner,
} from "./comment.js";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsListFromAPIThunk } from "../../features/comments/commentThunk.js";
import {
  getCommentData,
  getCommentStatus,
} from "../../features/comments/commentSlice.js";

const Comment = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const dispatch = useDispatch();
  const [CommentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const CommentData = useSelector(getCommentData);
  const CommentStatus = useSelector(getCommentStatus);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + " ..." : text;
  };

  const openPopup = (comment) => {
    setSelectedComment(comment);
    setShowPopUp(true);
  };

  const closePopup = () => {
    setShowPopUp(false);
  };
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
    <DivCommentStyled>
      <h3>Latest Review by Customers</h3>
      <SwiperStyled
        navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
      >
        {loading ? (
          <Spinner></Spinner>
        ) : (
          CommentList &&
          CommentList.map((comment) => (
            <SwiperSlideStyled
              onClick={() => openPopup(comment)}
              key={comment.id}
            >
              <p>{truncateText(comment.comentario, 200)}</p>
              <div>
                <ImgStyled src={comment.foto_perfil} />
                <div>
                  <p>{comment.nombre}</p>
                  <p>{comment.fecha}</p>
                </div>
              </div>
            </SwiperSlideStyled>
          ))
        )}
      </SwiperStyled>
      {showPopUp && (
        <PopUpStyled>
          <h3>{selectedComment && selectedComment.nombre}</h3>
          <span>{selectedComment && selectedComment.fecha}</span>
          <p>{selectedComment && selectedComment.comentario}</p>
          <button onClick={closePopup}>Cerrar</button>
        </PopUpStyled>
      )}
    </DivCommentStyled>
  );
};

export default Comment;
