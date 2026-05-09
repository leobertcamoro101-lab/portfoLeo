import { useState, useEffect } from "react";

function TypewriterText({ words, speed = 100, pause = 1500 }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout;

    if (!isDeleting && displayed.length < word.length) {
      // Still typing forward
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, displayed.length + 1));
      }, speed);
    } else if (!isDeleting && displayed.length === word.length) {
      // Fully typed — pause then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && displayed.length > 0) {
      // Still deleting
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, displayed.length - 1));
      }, speed / 2);
    } else if (isDeleting && displayed.length === 0) {
      // Fully deleted — move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 200); // small delay before next word starts typing
    }
    
    // else if (isDeleting && displayed.length === 0) {
    //   // Fully deleted — move to next word and loop back to 0
    //   setIsDeleting(false); // not a real error, error because did not setTimeout
    //   setCurrentWord((prev) => (prev + 1) % words.length); // ← this ensures infinite loop
    // }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentWord, words, speed, pause]);

  return (
    <span className="text-[#2A7A4B] font-medium">
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-[#2D5BE3] ml-[2px] align-middle animate-[blink_0.7s_step-end_infinite]" />
    </span>
  );
}

export default TypewriterText

// [#2A7A4B]
// [#2D5BE3]