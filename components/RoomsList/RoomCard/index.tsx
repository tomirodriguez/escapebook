import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import { RoomForList } from "..";
import { Vote } from "../../../lib/model/Utitls";
import ThumbsCount from "../../ThumbsCount";
import styles from "../RoomsLists.module.scss";

type PropsType = {
  room: RoomForList;
};

export default function RoomCard({ room }: PropsType) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(Math.ceil(Math.random() * 1000));
  const [dislikes, setDislikes] = useState<number>(Math.ceil(Math.random() * 100));
  const [userVote, setUserVote] = useState<Vote>(Vote.NO_VOTE);

  const like = () => {
    setLikes(likes + 1);
    setUserVote(Vote.LIKE);
  };

  const dislike = () => {
    setDislikes(dislikes + 1);
    setUserVote(Vote.DISLIKE);
  };

  const handleLike = () => {
    if (userVote === Vote.LIKE) {
      setUserVote(Vote.NO_VOTE);
      setLikes(likes - 1);
      return;
    }
    if (userVote === Vote.DISLIKE) setDislikes(dislikes - 1);

    like();
  };

  const handleDislike = () => {
    if (userVote === Vote.DISLIKE) {
      setUserVote(Vote.NO_VOTE);
      setDislikes(dislikes - 1);
      return;
    }
    if (userVote === Vote.LIKE) setLikes(likes - 1);

    dislike();
  };

  return (
    <li className="card">
      <div className={`d-flex ${styles.card}`}>
        <div className={styles.logo}>
          <Image src={room.companyLogo} width={50} height={50} alt={room.franchiseName} />
        </div>
        <div className={styles.info}>
          <div className="d-flex jc-between ai-center">
            <h3 className={styles.franchise}>{room.franchiseName}</h3>
            <ThumbsCount
              likes={likes}
              dislikes={dislikes}
              userVote={userVote}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          </div>
          <h2 className={styles.room}>{room.name}</h2>
        </div>
      </div>
    </li>
  );
}
