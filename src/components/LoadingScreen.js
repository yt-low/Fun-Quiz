import EmojiLoop from "./EmojiLoop";
import classes from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.emoji}><EmojiLoop /></div>
      <p>Loading... Please wait a moment.</p>
    </div>
  );
};

export default LoadingScreen;
