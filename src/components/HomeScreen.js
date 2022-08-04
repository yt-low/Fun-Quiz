import EmojiLoop from "./EmojiLoop";
import classes from './HomeScreen.module.css';

const HomeScreen = (props) => {
  return (
    <div className={classes.home}>
      <h1>Fun Quizzz!</h1>
      <div className={classes.emoji}>
        <EmojiLoop />
        <EmojiLoop />
        <EmojiLoop />
        <EmojiLoop />
        <EmojiLoop />
      </div>
      <button onClick={props.onClick} className="btn-primary">Start quiz</button>
    </div>
  );
};

export default HomeScreen;
