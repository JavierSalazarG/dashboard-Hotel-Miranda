import { useState } from "react";
import { MainStyled } from "../stytedPages.ts";
import { useDispatch } from "react-redux";
import { addRoom } from "../../features/rooms/RoomsSlice.ts";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import ImagePhoto from "../../../public/img_habitaion.jpg";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
  TexterraStyled,
  LabelStyled,
  SubmitStyled,
  LabelSelectStyled,
} from "./newRoom.ts";
const NewRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = uuidv4();
  const [imgs, setImgs] = useState({});
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newImage = {
      img1: ImagePhoto,
    };
    setImgs({ ...imgs, ...newImage });
    const formData = {
      id: id,
      imgs: imgs,
      bedType: e.target[0].value,
      roomNumber: e.target[1].value,
      rate: e.target[2].value,
      description: e.target[3].value,
      facilities: ["Wi-Fi", "TV", "Air Conditioning"],
      start_date: getCurrentDate(),
      status: true,
    };

    dispatch(addRoom(formData));
    navigate("/rooms");
  };
  return (
    <MainStyled>
      <FormStyled onSubmit={HandleSubmit}>
        <LabelSelectStyled>Room Type</LabelSelectStyled>
        <SelectStyled>
          <option>...</option>
          <option value="Single">Single</option>
          <option value="Doble">Doble</option>
          <option value="Twin">Twin</option>
          <option value="Suite Junior">Suite Junior</option>
          <option value="Executive Suite">Executive Suite</option>
          <option value="Family room">Family room</option>
          <option value="Accessible Room">Accessible Room</option>
        </SelectStyled>
        <InputStyled type="number" placeholder="Room number" />
        <InputStyled type="number" placeholder="Price" />
        <TexterraStyled placeholder="Room description"></TexterraStyled>
        <LabelStyled>
          room image
          <input type="file" id="profilePicture" accept="image/* " />
        </LabelStyled>
        <SubmitStyled type="submit" value="save" />
      </FormStyled>
    </MainStyled>
  );
};

export default NewRoom;
