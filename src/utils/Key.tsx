import { BoardContext } from "@/pages";
import { useContext } from "react";

const Key = ({ letter, isBig = false }: { letter: string; isBig: boolean }) => {
  const {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(BoardContext);
  const handler = () => {
    switch (letter) {
      case "⏎": {
        // if (currentAttempt.letterPos !== 5) return;
        // setCurrentAttempt({
        //   ...currentAttempt,
        //   attempt: currentAttempt.attempt + 1,
        //   letterPos: 0,
        // });
        onEnter();
        break;
      }
      case "⌫": {
        onDelete();
        break;
      }
      default: {
        // if (currentAttempt.letterPos > 4) return;
        // const newBoard = [...board];
        // newBoard[currentAttempt.attempt][currentAttempt.letterPos] = letter;
        // setBoard(newBoard);
        // setCurrentAttempt({
        //   ...currentAttempt,
        //   letterPos: currentAttempt.letterPos + 1,
        // });
        onSelectLetter(letter);
        break;
      }
    }
  };
  return (
    <span
      className={`grid h-16 w-10 cursor-pointer place-items-center
            rounded-md bg-gray-900 duration-75
            active:translate-y-1 font-semibold uppercase ${
              isBig ? "flex-1" : ""
            }`}
      onClick={handler}
    >
      {letter}
    </span>
  );
};

export default Key;
