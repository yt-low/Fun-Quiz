import { Fragment } from "react";
import Confetti from "react-confetti";
import classes from "./Emoji.module.css"

const Emoji = (props) => {
  let HTMLElem = "";
  switch (props.score) {
    case 2:
      HTMLElem = <div className={`${classes.emoji} ${props.gameOver ? classes['score-2'] : ''}`}>🙄</div>;
      break;
    case 3:
      HTMLElem = <div className={`${classes.emoji} ${props.gameOver ? classes['score-3'] : ''}`}>🤭</div>;
      break;
    case 4:
    case 5:
      HTMLElem = (
        <Fragment>
          <div className={`${classes.emoji} ${props.gameOver ? classes['score-5'] : ''}`}>🤩</div>
          <Confetti
            width={window.innerWidth}
            height={document.documentElement.scrollHeight}
            gravity={0.12}
          />
        </Fragment>
      );
      break;
    default:
      HTMLElem = <div className={`${classes.emoji} ${props.gameOver ? classes['score-1'] : ''}`}>🤯</div>;
  }

  return HTMLElem;
};

export default Emoji;
