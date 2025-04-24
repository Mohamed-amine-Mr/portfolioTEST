import { useState, useEffect } from "react";

const TypewriterEffect = ({
  texts,
  typingDelay = 100,
  pauseDelay = 1500,
  eraseDelay = 50,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isTyping && currentIndex < currentText.length) {
      // Typing phase
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((c) => c + 1);
      }, typingDelay);
      return () => clearTimeout(timeout);
    } else if (isTyping && currentIndex >= currentText.length) {
      // Finished typing, now pause before erasing
      setIsPaused(true);
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDelay);
      return () => clearTimeout(pauseTimeout);
    } else if (!isTyping && displayText.length > 0) {
      // Erasing phase
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, eraseDelay);
      return () => clearTimeout(timeout);
    } else if (!isTyping && displayText.length === 0) {
      // Move to next text
      setIsTyping(true);
      setCurrentIndex(0);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [
    currentIndex,
    displayText,
    isTyping,
    isPaused,
    texts,
    currentTextIndex,
    typingDelay,
    pauseDelay,
    eraseDelay,
  ]);

  return <span className="typewriter-text">{displayText}</span>;
};

export default TypewriterEffect;
