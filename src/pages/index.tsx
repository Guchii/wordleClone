import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Board from "@/utils/Board";
import KeyBoard from "@/utils/Keyboard";
import { MyBoard } from "@/utils/Words";
import { useState } from "react";
import { createContext } from "react";

export const BoardContext = createContext({});

const Index = () => {
  const [board, setBoard] = useState<string[][]>(MyBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.letterPos - 1][currentAttempt.attempt] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    setCurrentAttempt({
      ...currentAttempt,
      attempt: currentAttempt.attempt + 1,
      letterPos: 0,
    });
  };

  const onSelectLetter = (letter: string) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.letterPos][currentAttempt.attempt] = letter;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    });
  };
  const correctWord = "hello";

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        currentAttempt,
        setCurrentAttempt,
        onSelectLetter,
        onDelete,
        onEnter,
        correctWord,
      }}
    >
      <Main meta={<Meta title="Wordle" description="Beautiful wordle clone" />}>
        <h1 className="p-4 text-3xl uppercase">Wordle</h1>
        <div className="flex sm:flex-col lg:flex-row gap-32 items-center justify-between py-8">
          <Board />
          <KeyBoard />
        </div>
      </Main>
    </BoardContext.Provider>
  );
};

export default Index;
