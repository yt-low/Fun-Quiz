import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <input
        type="radio"
        id={props.radioId}
        name={props.radioName}
        value={props.value}
        disabled={props.gameOver}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.radioId}
        className={`${props.gameOver ? classes["btn-wrong"] : ''} ${
          props.gameOver && props.correctAnswer ? classes["correct-answer"] : ""
        }`}
      >
        {props.title}
      </label>
    </div>
  );
};

export default Button;
