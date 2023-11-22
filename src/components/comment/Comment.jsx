import {
  DivCommentStyled,
  SwiperStyled,
  SwiperSlideStyled,
  ImgStyled,
} from "./comment.js";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { comments } from "../../data/comment.js";

const Comment = () => {
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
        {comments.map((comment) => (
          <SwiperSlideStyled key={comment.id}>
            <p>{comment.comentario}</p>
            <div>
              <ImgStyled src={comment.foto_perfil} />
              <div>
                <p>{comment.nombre}</p>
                <p>{comment.fecha}</p>
              </div>
            </div>
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
    </DivCommentStyled>
  );
};

export default Comment;
