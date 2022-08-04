import { useEffect, useState, Fragment } from "react";

const emojiFace = ["🤣", "🤯", "🤓", "😬", "🤪", "🤑", "🤨", "😱", "🤫", "😍"];

const EmojiLoop = () => {
  const [displayEmoji, setDisplayEmoji] = useState(emojiFace[0]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      setDisplayEmoji(emojiFace[Math.floor(Math.random() * emojiFace.length)]);
    }, 300);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return <Fragment>{displayEmoji}</Fragment>;
};

export default EmojiLoop;
