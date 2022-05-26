import { MyBoard } from "@/utils/Words";
import type { ReactNode } from "react";
import { createContext, useState } from "react";

export const BoardContext = createContext(undefined);

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [board, setBoard] = useState<string[][]>(MyBoard);
  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      <div className="min-h-screen w-full bg-gray-800 px-1 text-gray-100 antialiased">
        {props.meta}
        <div className="grid place-items-center">{props.children}</div>
        <footer className="grid w-full place-items-center p-4 ">
          Shivom Srivastava
        </footer>
      </div>
    </BoardContext.Provider>
  );
};
export { Main };
