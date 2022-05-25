enum CorrectLetter {
  correctPlace,
  inWord,
  notInWord,
}
interface StatusInterface {
  correctWord: Boolean;
  letters: CorrectLetter[];
}
export const correctWord = (inString: string, outString: string): object => {
  const letters: CorrectLetter[] = [CorrectLetter.correctPlace];
  const inStringArr = inString.toLowerCase().split('').slice(0, 5);
  const outStringArr = outString.toLowerCase().split('').slice(0, 5);

  inStringArr.forEach((le, idx) => {
    let letter: CorrectLetter;
    if (outStringArr.find((ole) => ole === le)) {
      letter = CorrectLetter.inWord;
      if (outStringArr.indexOf(le) === idx) {
        letter = CorrectLetter.correctPlace;
      }
    } else {
      letter = CorrectLetter.notInWord;
    }

    letters[idx] = letter;
  });
  const Status: StatusInterface = {
    correctWord: letters.every((le) => le === CorrectLetter.correctPlace),
    letters,
  };
  return Status;
};

const listOfValidWords: string[] = ['nicee', 'helooo', 'ewafasd', 'dfjasdfa'];

export const wordInList = (inString: string): boolean => {
  if (listOfValidWords.find((word) => word === inString)) {
    return true;
  }
  return false;
};
