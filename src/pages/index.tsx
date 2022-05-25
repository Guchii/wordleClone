import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Board = () => {
  const noOfAttempts: number = 5;
  const noOfLetters: number = 5;
  return (
    <div className="flex flex-col gap-4">
      {new Array(noOfAttempts).fill(1).map((att, i) => {
        return (
          <div className="flex gap-4" key={i}>
            {new Array(noOfLetters).fill(1).map((ok, idx) => {
              return (
                <div
                  className="grid h-12 w-12 cursor-pointer place-items-center rounded-md bg-green-400 duration-75 active:translate-y-1"
                  key={idx}
                >
                  {ok}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const KeyBoard = () => {
  const allLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="mt-4 grid grid-cols-5 gap-2">
      {allLetters.map((letter) => {
        return (
          <span
            className={`h-10 w-14 bg-gray-900  grid place-items-center
            active:translate-y-1 duration-75 cursor-pointer
            rounded-md
            `}
            key={letter}
          >
            {letter.toUpperCase()}
          </span>
        );
      })}
      <span
        className="grid h-10 w-14  cursor-pointer place-items-center
            rounded-md bg-gray-900 duration-75
            active:translate-y-1
"
      >
        ⏎
      </span>
    </div>
  );
};

const Index = () => {
  // const [attemptNo, setAttemptNo] = useState(0);
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
