import React from "react";
import { useState } from "react";
import { MainStyled } from "../stytedPages.ts";

import { addRoom } from "../../features/rooms/RoomsSlice.ts";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import ImagePhoto from "../../assets/img_habitaion.jpg";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
  TexterraStyled,
  LabelStyled,
  SubmitStyled,
  LabelSelectStyled,
} from "./newRoom.ts";

import { RoomsInterface } from "../../interfaces/rooms/rooms.ts";
import { useAppDispatch } from "../../app/store.ts";
const NewRoom = () => {
  const dispatch = useAppDispatch();
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
  const newId = (): string => {
    const newId = id.slice(0, 5);
    return newId;
  };
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newImage = {
      img1: ImagePhoto,
    };
    setImgs({ ...imgs, ...newImage });
    const roomNumber: number = parseInt(
      (e.currentTarget[1] as HTMLInputElement).value,
      10
    );
    const roomRate: number = parseInt(
      (e.currentTarget[2] as HTMLInputElement).value,
      0
    );
    const formData: RoomsInterface = {
      _id: newId(),
      imgs: {
        img1: null,
        img2: null,
        img3: null,
        img4: null,
        img5: null,
      },
      bedType: (e.currentTarget[0] as HTMLInputElement).value,
      roomNumber: roomNumber,
      rate: roomRate,
      offerPrice: 0,
      description: (e.currentTarget[3] as HTMLInputElement).value,
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
