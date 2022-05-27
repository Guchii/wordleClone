import { BoardContext } from "@/pages/index";
/* eslint-disable unused-imports/no-unused-vars */
import { useContext, useEffect } from "react";

const Letter = ({
  letterPos,
  AttemptVal,
}: {
  letterPos: number;
  AttemptVal: number;
}) => {
  const { board, correctWord, currentAttempt, setDisabledLetters } =
    useContext(BoardContext);
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);
  const letter = board[AttemptVal][letterPos];
  const correct: boolean = correctWord.toUpperCase()[letterPos] === letter;
  const almost: boolean =
    !correct && letter !== "" && correctWord.includes(letter);
  return (
    <>
      <span
        className={`h-16 w-16 border-2 border-gray-500  grid place-items-center duration-75 cursor-pointer
            rounded-sm uppercase font-bold ${
              currentAttempt.attempt > AttemptVal &&
              (correct
                ? "bg-green-600"
                : almost
                ? "bg-yellow-600"
                : "bg-slate-900")
            }`}
      >
        {letter}
      </span>
    </>
  );
};

export default Letter;
