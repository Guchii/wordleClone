// @ts-nocheck
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
  const {
    board,
    correctWord,
    currentAttempt,
    setDisabledLetters,
    setCorrectLetters,
    setAlmostLetters,
  } = useContext(BoardContext);
  useEffect(() => {
    if (correct) {
      setCorrectLetters((prev) => [...prev, letter]);
    } else if (almost) {
      setAlmostLetters((prev) => [...prev, letter]);
    } else if (letter !== "") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);
  const letter = board[AttemptVal][letterPos];
  const correct = correctWord[letterPos] === letter.toUpperCase();
  const almost =
    !correct && letter !== "" && correctWord.includes(letter.toUpperCase());
  return (
    <>
      <span
        className={`h-16 w-16 border-2 border-gray-500  grid place-items-center duration-75 cursor-pointer
        rounded-sm uppercase font-bold ${
          currentAttempt.attempt > AttemptVal &&
          (correct ? "bg-green-600" : almost ? "bg-yellow-600" : "bg-slate-800")
        }`}
      >
        {letter}
      </span>
    </>
  );
};

export default Letter;
