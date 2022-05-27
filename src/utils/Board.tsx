import Letter from "@/utils/Letter";

const Board = () => {
  const noOfAttempts: number = 5;
  const noOfLetters: number = 5;
  return (
    <div className="flex flex-col gap-4">
      {new Array(noOfAttempts).fill(1).map((att, i) => {
        return (
          <div className="flex gap-4" key={i}>
            {new Array(noOfLetters).fill(1).map((ok, j) => {
              return <Letter letterPos={j} AttemptVal={i} key={j} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
