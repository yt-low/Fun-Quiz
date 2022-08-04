import Button from "./Button";
import classes from "./GameScreen.module.css";

const GameScreen = (props) => {
  function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  let CTA = props.gameOver ? (
    <div className={classes.cta}>
      You've scored {props.score}/{props.quizzes.length} correct answers.
      <button type="button" onClick={props.startGame} className="btn-primary">
        Play again
      </button>
    </div>
  ) : (
    <div className={classes.cta}>
      <button type="submit" className="btn-primary">Check answer</button>
    </div>
  );

  return (
    <form className="game" onSubmit={props.submitAnswer}>
      <ul>
        {props.quizzes.map((item, index) => {
          return (
            <li key={index} className={classes.question}>
              <h2>{decodeHTMLEntities(item.question)}</h2>
              {item.choices.map((choice, i) => {
                return (
                  <Button
                    key={i}
                    title={decodeHTMLEntities(choice)}
                    value={choice}
                    radioName={item.radioName}
                    radioId={item.radioName + "-" + i}
                    correctAnswer={choice === item.correct_answer}
                    gameOver={props.gameOver}
                    onChange={props.selectedAnswer}
                  />
                );
              })}
            </li>
          );
        })}
      </ul>
      {CTA}
    </form>
  );
};

export default GameScreen;
