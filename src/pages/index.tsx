import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Board from "@/utils/Board";
import KeyBoard from "@/utils/Keyboard";
import { generateWordsSet, MyBoard } from "@/utils/Words";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const BoardContext = createContext({});

const Index = () => {
  const [board, setBoard] = useState<string[][]>(MyBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());

  useEffect(() => {
    generateWordsSet().then((words) => {
      setWordSet(words.wordSet);
    });
  }, []);

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    let currentWord = board[currentAttempt.attempt]?.join("");
    console.log(currentWord);
    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPos: 0,
      });
    } else {
      alert("Word not found");
    }
  };

  const onSelectLetter = (letter: string) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = letter;
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
