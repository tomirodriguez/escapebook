import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpFull, faThumbsDown as faThumbsDownFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Vote } from "../../lib/model/Utitls";
import styles from "./ThumbsCount.module.scss";

type PropsType = {
  likes: number;
  dislikes: number;
  userVote: Vote;
  onLike: () => void;
  onDislike: () => void;
};

export default function ThumbsCount({ likes, dislikes, userVote, onLike, onDislike }: PropsType) {
  return (
    <div className={`d-flex ai-center ${styles.thumbs}`}>
      <div className="d-flex flex-column ai-center">
        <div className={styles.iconContainer} onClick={onLike} data-voted={userVote === Vote.LIKE}>
          {userVote === Vote.LIKE ? (
            <FontAwesomeIcon icon={faThumbsUpFull} data-voted={true} width={15} height={15} color='#678dce' />
          ) : (
            <FontAwesomeIcon icon={faThumbsUp} data-voted={false} width={15} height={15} />
          )}
        </div>
        <span className={styles.count}>{likes}</span>
      </div>
      <div className="d-flex flex-column ai-center">
        <div className={styles.iconContainer} onClick={onDislike} data-voted={userVote === Vote.DISLIKE}>
          {userVote === Vote.DISLIKE ? (
            <FontAwesomeIcon icon={faThumbsDownFull} data-voted={true} width={15} height={15} color='#ff6961' />
          ) : (
            <FontAwesomeIcon icon={faThumbsDown} data-voted={false} width={15} height={15} />
          )}
        </div>
        <span className={styles.count}>{dislikes}</span>
      </div>
    </div>
  );
}
