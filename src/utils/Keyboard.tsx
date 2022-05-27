import { BoardContext } from "@/pages/index";
import { useCallback, useContext, useEffect } from "react";

import Key from "./Key";

const KeyBoard = () => {
  const row1: string[] = "qwertyuiop".split("");
  const row2: string[] = "asdfghjkl".split("");
  const row3: string[] = "zxcvbnm".split("");
  const { onEnter, onSelectLetter, onDelete, currAttempt } =
    useContext(BoardContext);
  const handler = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        row1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
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
          <Key letter={le} key={le} isBig={false} />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {row2.map((le) => (
          <Key letter={le} key={le} isBig={false} />
        ))}
      </div>
      <div className="flex gap-2">
        <Key letter="⏎" isBig />
        {row3.map((le) => (
          <Key letter={le} key={le} isBig={false} />
        ))}
        <Key letter="⌫" isBig />
      </div>
    </div>
  );
};

export default KeyBoard;
