import styles from "../src/styles/Shortcut.module.css";
const Shortcuts = ({ shortcuts }) => {
  return (
    <div className={styles.shortcut}>
      {shortcuts.map((shortcut) => (
        <figure key={shortcut.mainShortcutId}>
          <img src={shortcut.imageUrl} alt="" />
          <figcaption>{shortcut.title}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Shortcuts;
