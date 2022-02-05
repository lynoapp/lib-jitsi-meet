export default class Word {
  constructor(word: string, begin: number, end: number);
  word: string;
  begin: number;
  end: number;
  getWord: () => string;
  getBeginTime: () => number;
  getEndTime: () => number;
}
