import "./App.css";
import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import GameScreen from "./components/GameScreen";
import Emoji from "./components/Emoji";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [home, setHome] = useState(true);
  const [loading, setLoading] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setGameOver(false);
    setScore(0);
    setAnswers([]);
    startGame();
  };

  const startGame = () => {
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&category=11")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setHome(false);
        setQuizzes(data.results);
        treatmentToQuiz();
      });
  };

  const treatmentToQuiz = () => {
    setQuizzes((oldQuiz) =>
      oldQuiz.map((quiz, index) => {
        let temp = [];
        for (const choice of quiz.incorrect_answers) {
          temp.push(choice);
        }
        temp.push(quiz.correct_answer);
        const shuffledArray = temp.sort((a, b) => 0.5 - Math.random());

        return {
          ...quiz,
          radioName: index,
          choices: shuffledArray,
        };
      })
    );
  };

  const selectedAnswer = (event) => {
    const { name, value } = event.target;
    setAnswers((oldAnswer) => {
      return {
        ...oldAnswer,
        [name]: value,
      };
    });
  };

  const submitAnswer = (event) => {
    event.preventDefault();
    console.log(answers);
    quizzes.forEach((quiz, index) => {
      if (quiz.correct_answer === answers[index]) {
        console.log("Quest " + index + ": correct");
        setScore((setScore) => setScore + 1);
      }
    });
    setGameOver(true);
  };

  return (
    <div className="App">
      {home && !loading && <HomeScreen onClick={startGame} />}
      {loading && <LoadingScreen />}

      {!home && !loading && (
        <GameScreen
          quizzes={quizzes}
          selectedAnswer={selectedAnswer}
          submitAnswer={submitAnswer}
          score={score}
          gameOver={gameOver}
          startGame={resetGame}
        />
      )}

      <Emoji gameOver={gameOver} score={score} />
    </div>
  );
}

export default App;
