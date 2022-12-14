import { useEffect, useState, Fragment } from "react";

const emojiFace = ["๐คฃ", "๐คฏ", "๐ค", "๐ฌ", "๐คช", "๐ค", "๐คจ", "๐ฑ", "๐คซ", "๐"];

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
