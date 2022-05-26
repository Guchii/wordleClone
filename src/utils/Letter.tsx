/* eslint-disable unused-imports/no-unused-vars */
import { useContext } from "react";
import { BoardContext } from "@/pages/index";

const Letter = ({
  letterPos,
  AttemptVal,
}: {
  letterPos: number;
  AttemptVal: number;
}) => {
  const { board } = useContext(BoardContext);
  const letter = board[letterPos][AttemptVal];
  return (
    <>
      <span
        className={`h-16 w-16 bg-gray-900  grid place-items-center duration-75 cursor-pointer
            rounded-sm uppercase font-semibold`}
      >
        {letter}
      </span>
    </>
  );
};

export default Letter;
