import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Board from "@/utils/Board";
import End from "@/utils/End";
import KeyBoard from "@/utils/Keyboard";
import { generateWordsSet, MyBoard } from "@/utils/Words";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";

export const BoardContext = createContext<BoardContextType>({});

type BoardContextType = {
  board?: string[][];
  setBoard?: Dispatch<SetStateAction<string[][]>>;
  currentAttempt?: { attempt: number; letterPos: number };
  setCurrentAttempt?: Dispatch<
    SetStateAction<{ attempt: number; letterPos: number }>
  >;
  onSelectLetter?: (letter: string) => void;
  onDelete?: () => void;
  onEnter?: () => void;
  disabledLetters?: string[];
  setDisabledLetters?: Dispatch<SetStateAction<string[]>>;
  correctLetters?: string[];
  setCorrectLetters?: Dispatch<SetStateAction<string[]>>;
  almostLetters?: string[];
  setAlmostLetters?: Dispatch<SetStateAction<string[]>>;
  gameOver?: { gameOver: boolean; correctWord: boolean };
  correctWord?: string;
};

const Index = () => {
  const [board, setBoard] = useState<string[][]>(MyBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([""]);
  const [almostLetters, setAlmostLetters] = useState([""]);
  const [correctLetters, setCorrectLetters] = useState([""]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    correctWord: false,
  });
  const [correctWord, setCorrectedWord] = useState<string | undefined>("");
  useEffect(() => {
    generateWordsSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectedWord(words.todaysWord?.toUpperCase());
    });
  }, []);

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt]![currentAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    let currentWord = board[currentAttempt.attempt]?.join("").toUpperCase();
    if (wordSet.has(currentWord!.toLowerCase())) {
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
    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, correctWord: false });
    }
  };

  const onSelectLetter = (letter: string) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt]![currentAttempt.letterPos] = letter;
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
        correctLetters,
        setCorrectLetters,
        almostLetters,
        setAlmostLetters,
        gameOver,
        correctWord,
      }}
    >
      <Main meta={<Meta title="Wordle" description="Beautiful wordle clone" />}>
        <div className="flex gap-4 justify-center items-center w-full py-4 border-b-2 border-b-slate-300">
          <h1
            className="text-3xl font-bold uppercase cursor-pointer"
            onClick={() => location.reload()}
          >
            Wordle
          </h1>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-32 items-center justify-between py-8">
          <Board />
          {gameOver.gameOver ? <End /> : <KeyBoard />}
        </div>
      </Main>
    </BoardContext.Provider>
  );
};

export default Index;
