import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

const BoardContext = createContext(null);

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [board, setBoard] = useState(null);
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
