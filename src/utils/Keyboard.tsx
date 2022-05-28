// @ts-nocheck
import { BoardContext } from "@/pages/index";
import { KeyboardEvent, useContext, useEffect } from "react";

import Key from "./Key";

const KeyBoard = () => {
  const row1: string[] = "qwertyuiop".split("");
  const row2: string[] = "asdfghjkl".split("");
  const row3: string[] = "zxcvbnm".split("");
  const {
    onEnter,
    onSelectLetter,
    onDelete,
    disabledLetters,
    almostLetters,
    correctLetters,
  } = useContext(BoardContext);
  const handler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onEnter!();
    } else if (event.key === "Backspace") {
      onDelete!();
    } else {
      row1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter!(key);
        }
      });
      row2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter!(key);
        }
      });
      row3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter!(key);
        }
      });
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [handler]);
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-2">
        {row1.map((le) => (
          <Key
            letter={le}
            key={le}
            disabled={disabledLetters!.includes(le)}
            almost={almostLetters!.includes(le)}
            correct={correctLetters!.includes(le)}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {row2.map((le) => (
          <Key
            letter={le}
            key={le}
            disabled={disabledLetters!.includes(le)}
            almost={almostLetters!.includes(le)}
            correct={correctLetters!.includes(le)}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <Key letter="⏎" isBig />
        {row3.map((le) => (
          <Key
            letter={le}
            key={le}
            almost={almostLetters!.includes(le)}
            correct={correctLetters!.includes(le)}
            disabled={disabledLetters!.includes(le)}
          />
        ))}
        <Key letter="⌫" isBig />
      </div>
    </div>
  );
};

export default KeyBoard;
