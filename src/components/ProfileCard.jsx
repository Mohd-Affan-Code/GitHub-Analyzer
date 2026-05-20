import React from "react";
import styles from "./styles/ProfileCard.module.css";

function ProfileCard() {
  return (
    <div className={styles.container}>
      <div className={styles.profileImgCard}>
        <p className={styles.profileImg}>LT</p>
      </div>
      <div className={styles.profileText}>
        <h3>Linus Torvalds</h3>
        <p className={styles.profileField}>Creator of Linux and Git</p>
        <p className={styles.profileLocationJoin}> Portland, OR</p>
        <p className={styles.profileLocationJoin}>
          {" "}
          Joined 2011 · 5 years on GitHub
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
