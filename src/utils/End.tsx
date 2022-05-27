import { BoardContext } from "@/pages";
import { useContext } from "react";

const End = () => {
  const { currentAttempt, correctWord, gameOver } = useContext(BoardContext);
  return (
    <div className="flex flex-col text-center gap-4 bg-slate-900 p-8 rounded-md">
      <h2>The game has ended</h2>
      {gameOver.correctWord ? (
        <p>
          You took <span className="font-bold">{currentAttempt.attempt}</span>{" "}
          attempts to guess the word.
        </p>
      ) : (
        <div>
          You couldn't guess the word. The correct word was{" "}
          <span className="font-bold uppercase">{correctWord}</span>
        </div>
      )}
    </div>
  );
};

export default End;
