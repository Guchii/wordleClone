import { BoardContext } from "@/pages";
import { useContext } from "react";

const Key = ({ letter, isBig = false }: { letter: string; isBig: boolean }) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(BoardContext);
  const handler = () => {
    switch (letter) {
      case "⏎": {
        onEnter();
        break;
      }
      case "⌫": {
        onDelete();
        break;
      }
      default: {
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
