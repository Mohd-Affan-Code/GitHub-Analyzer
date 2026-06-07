import React from "react";
import styles from "./styles/TopLanguageBar.module.css";

function TopLanguageBar() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>TOP LANGUAGES</div>
      <div className={styles.langrow}>
        <span className={styles.langname}>C</span>
        <div className={styles.langbarBg}>
          <div className={styles.langbar}></div>
        </div>
        <span>62%</span>
      </div>
      <div className={styles.langrow}>
        <span>JavaScript</span>
        <div>
          <div></div>
        </div>
        <span>18%</span>
      </div>
      <div className={styles.langrow}>
        <span>Java</span>
        <div>
          <div></div>
        </div>
        <span>12%</span>
      </div>
      <div className={styles.langrow}>
        <span>Python</span>
        <div>
          <div></div>
        </div>
        <span>8%</span>
      </div>
    </div>
  );
}

export default TopLanguageBar;
