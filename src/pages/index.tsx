import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import KeyBoard from "@/utils/Keyboard";
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
              return <Letter letterPos={i} AttemptVal={j} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="wordle clone nice" description="Beautiful wordle clone" />
      }
    >
      <h1 className="p-4 text-3xl">This is my wordle clone</h1>
      <Board />
      <KeyBoard />
    </Main>
  );
};

export default Index;
