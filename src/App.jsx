import SearchBar from "./components/SearchBar";
import styles from "./App.module.css";
import ProfileCard from "./components/ProfileCard";
import ProfileTabs from "./components/ProfileTabs";
import TopLanguageBar from "./components/TopLanguageBar";

function App() {
  return (
    <div className={styles.container}>
      <h1>GitHub Profile Analyzer</h1>
      <p className={styles.subHeading}>
        Kisi bhi GitHub user ka profile analyze karo
      </p>
      <div>
        <SearchBar />
      </div>
      <div className={styles.profileCard}>
        <ProfileCard />
      </div>
      <div className={styles.profileTabs}>
        <ProfileTabs tabName="Followers" tabData="236k" />
        <ProfileTabs tabName="Following" tabData="0" />
        <ProfileTabs tabName="Repos" tabData="12" />
        <ProfileTabs tabName="Total Stars" tabData="87k" />
      </div>
      <div>
        <TopLanguageBar />
      </div>
    </div>
  );
}

export default App;
