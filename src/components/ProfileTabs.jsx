import React from "react";
import styles from "./styles/ProfileTabs.module.css";
function ProfileTabs({ tabName, tabData }) {
  return (
    <div className={styles.profileTab}>
      <p className={styles.label}>{tabName}</p>
      <p className={styles.value}>{tabData}</p>
    </div>
  );
}

export default ProfileTabs;
