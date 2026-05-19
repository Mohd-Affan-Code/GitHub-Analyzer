import SearchBar from "./components/SearchBar";
import styles from "./App.module.css";
import ProfileCard from "./components/ProfileCard";

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
      <div>
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
