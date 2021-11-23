import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { ContactInfo, Room } from "../../lib/model/Company";
import { WithId } from "../../lib/model/Utitls";
import RoomCard from "./RoomCard";
import styles from "./RoomsLists.module.scss";

export type RoomForList = Room & WithId & { companyLogo: string; contact: ContactInfo; franchiseName: string };

type PropsType = {
  rooms: RoomForList[];
};
export default function RoomsList({ rooms }: PropsType) {
  return (
    <ul className="d-grid grid-md-col-2">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </ul>
  );
}
