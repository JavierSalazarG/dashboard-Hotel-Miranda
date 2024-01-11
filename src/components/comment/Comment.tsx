import React from "react";
import {
  DivCommentStyled,
  SwiperStyled,
  SwiperSlideStyled,
  ImgStyled,
  PopUpStyled,
  Spinner,
} from "./comment.ts";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { CommentsInterface } from "../../interfaces/comments/comments.ts";

interface CommentProps {
  CommentList: CommentsInterface[];
  loading: boolean;
}
const Comment: React.FC<CommentProps> = ({ CommentList, loading }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedComment, setSelectedComment] =
    useState<CommentsInterface | null>(null);

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
          CommentList.map(
            (comment) =>
              !comment.archive && (
                <SwiperSlideStyled
                  onClick={() => openPopup(comment)}
                  key={comment._id}
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
              )
          )
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
