import type { ReactNode } from "react";
import "@fontsource/montserrat";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="min-h-screen w-full bg-gray-800 px-1 font-mont text-gray-100 antialiased select-none">
      {props.meta}
      <div className="grid place-items-center">{props.children}</div>
      <footer className="grid w-full place-items-center p-4 ">
        Shivom Srivastava
      </footer>
    </div>
  );
};
export { Main };
