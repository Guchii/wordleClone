export const MyBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordsSet = async () => {
  let wordSet;
  const res = await fetch("/word-bank.txt");
  const data = await res.text();
  const wordArr = data.split(/\r?\n/);
  const todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  wordSet = new Set(wordArr);
  return { wordSet, todaysWord };
};
