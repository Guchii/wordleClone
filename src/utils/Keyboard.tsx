const KeyBoard = () => {
  const row1: string[] = "qwertyuiop".split("");
  const row2: string[] = "asdfghjkl".split("");
  const row3: string[] = "zxcvbnm".split("");
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-2">
        {row1.map((le) => (
          <Key letter={le} key={le} isBig={false} />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {row2.map((le) => (
          <Key letter={le} key={le} isBig={false} />
        ))}
      </div>
      <div className="flex gap-2">
        <Key letter="⏎" isBig />
        {row3.map((le) => (
          <Key letter={le} key={le} isBig={false} />
        ))}
        <Key letter="⌫" isBig />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

const Key = ({ letter, isBig = false }: { letter: string; isBig: boolean }) => {
  return (
    <span
      className={`grid h-16 w-10 cursor-pointer place-items-center
            rounded-md bg-gray-900 duration-75
            active:translate-y-1 font-semibold ${isBig ? "flex-1" : ""}`}
    >
      {letter.toUpperCase()}
    </span>
  );
};

export default KeyBoard;
