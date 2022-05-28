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
      <footer className="p-4 text-center">
        Made with <span>❤️</span> by{" "}
        <a
          href="https://github.com/guchii"
          className="uppercase text-blue-300 duration-75"
        >
          Guchii
        </a>
      </footer>
    </div>
  );
};
export { Main };
