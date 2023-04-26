import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.Title}>
      <h1>Red Panda</h1>
      <div className="Title-Subtitle">
        San Franciscos Privately Owned Public Spaces
      </div>
    </div>
  );
};

export default Header;
