import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Board from "@/utils/Board";
import End from "@/utils/End";
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
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    correctWord: false,
  });
  const [correctWord, setCorrectedWord] = useState<string | undefined>("");
  useEffect(() => {
    generateWordsSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectedWord(words.todaysWord);
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
    console.log(currentAttempt.attempt);
    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPos: 0,
      });
    } else {
      alert("Word not found");
      return;
    }
    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, correctWord: true });
      return;
    }
    if (currentAttempt.attempt === 4) {
      setGameOver({ gameOver: true, correctWord: false });
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
        disabledLetters,
        setDisabledLetters,
        gameOver,
        correctWord,
      }}
    >
      <Main meta={<Meta title="Wordle" description="Beautiful wordle clone" />}>
        <h1 className="p-4 text-3xl uppercase">Wordle</h1>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-32 items-center justify-between py-8">
          <Board />
          {gameOver.gameOver ? <End /> : <KeyBoard />}
        </div>
      </Main>
    </BoardContext.Provider>
  );
};

export default Index;
